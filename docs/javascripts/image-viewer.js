(function () {
  "use strict";

  var selector = ".md-typeset .ms-plate:not(.ms-plate--row) img";
  var dialog;
  var viewport;
  var fullImage;
  var zoomOutput;
  var originalLink;
  var scale = 1;
  var fitScale = 1;
  var lastFocus;
  var drag;

  function makeButton(label, title, action, className) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "image-viewer__button" + (className ? " " + className : "");
    button.textContent = label;
    button.title = title;
    button.setAttribute("aria-label", title);
    button.addEventListener("click", action);
    return button;
  }

  function createViewer() {
    if (dialog) return;

    dialog = document.createElement("dialog");
    dialog.className = "image-viewer";
    dialog.setAttribute("aria-label", "Manuscript image viewer");

    var shell = document.createElement("div");
    shell.className = "image-viewer__shell";

    var toolbar = document.createElement("div");
    toolbar.className = "image-viewer__toolbar";

    toolbar.appendChild(makeButton("-", "Zoom out", function () {
      setScale(scale / 1.25);
    }));

    zoomOutput = document.createElement("output");
    zoomOutput.className = "image-viewer__zoom";
    zoomOutput.setAttribute("aria-live", "polite");
    zoomOutput.setAttribute("aria-label", "Zoom level");
    toolbar.appendChild(zoomOutput);

    toolbar.appendChild(makeButton("+", "Zoom in", function () {
      setScale(scale * 1.25);
    }));

    toolbar.appendChild(makeButton("Fit", "Fit image to screen", fitImage, "image-viewer__button--text"));

    originalLink = document.createElement("a");
    originalLink.className = "image-viewer__button image-viewer__button--text";
    originalLink.textContent = "Original";
    originalLink.title = "Open original image";
    originalLink.setAttribute("aria-label", "Open original image in a new tab");
    originalLink.target = "_blank";
    originalLink.rel = "noopener";
    toolbar.appendChild(originalLink);

    toolbar.appendChild(makeButton("\u00d7", "Close image viewer", function () {
      dialog.close();
    }, "image-viewer__close"));

    viewport = document.createElement("div");
    viewport.className = "image-viewer__viewport";

    fullImage = document.createElement("img");
    fullImage.className = "image-viewer__image";
    fullImage.addEventListener("load", fitImage);
    viewport.appendChild(fullImage);

    shell.appendChild(toolbar);
    shell.appendChild(viewport);
    dialog.appendChild(shell);
    document.body.appendChild(dialog);

    dialog.addEventListener("close", function () {
      document.body.classList.remove("image-viewer-open");
      fullImage.removeAttribute("src");
      if (lastFocus) lastFocus.focus();
    });

    viewport.addEventListener("pointerdown", startDrag);
    viewport.addEventListener("pointermove", moveDrag);
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    window.addEventListener("resize", function () {
      if (dialog.open) fitImage();
    });
  }

  function setScale(nextScale) {
    var minimum = Math.max(fitScale * 0.5, 0.05);
    scale = Math.min(Math.max(nextScale, minimum), 4);
    fullImage.style.width = Math.round(fullImage.naturalWidth * scale) + "px";
    zoomOutput.textContent = Math.round(scale * 100) + "%";
    viewport.classList.toggle("image-viewer__viewport--zoomed", scale > fitScale * 1.01);
  }

  function fitImage() {
    if (!fullImage.naturalWidth || !viewport.clientWidth) return;
    var availableWidth = Math.max(viewport.clientWidth - 40, 1);
    var availableHeight = Math.max(viewport.clientHeight - 40, 1);
    fitScale = Math.min(
      availableWidth / fullImage.naturalWidth,
      availableHeight / fullImage.naturalHeight,
      1
    );
    setScale(fitScale);
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }

  function openViewer(image) {
    createViewer();
    lastFocus = image;
    originalLink.href = image.currentSrc || image.src;
    fullImage.alt = image.alt || "Manuscript image";
    fullImage.src = image.currentSrc || image.src;
    document.body.classList.add("image-viewer-open");
    dialog.showModal();
    if (fullImage.complete) fitImage();
  }

  function startDrag(event) {
    if (event.button !== 0 || viewport.scrollWidth <= viewport.clientWidth && viewport.scrollHeight <= viewport.clientHeight) return;
    drag = {
      x: event.clientX,
      y: event.clientY,
      left: viewport.scrollLeft,
      top: viewport.scrollTop,
      pointerId: event.pointerId
    };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add("image-viewer__viewport--dragging");
  }

  function moveDrag(event) {
    if (!drag || drag.pointerId !== event.pointerId) return;
    viewport.scrollLeft = drag.left - (event.clientX - drag.x);
    viewport.scrollTop = drag.top - (event.clientY - drag.y);
  }

  function endDrag(event) {
    if (!drag || drag.pointerId !== event.pointerId) return;
    drag = null;
    viewport.classList.remove("image-viewer__viewport--dragging");
  }

  function prepareImages() {
    document.querySelectorAll(selector).forEach(function (image) {
      if (image.dataset.viewerReady) return;
      image.dataset.viewerReady = "true";
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", "Open full-size image: " + (image.alt || "manuscript image"));
      image.title = "Open full-size image";
    });
  }

  document.addEventListener("click", function (event) {
    var image = event.target.closest(selector);
    if (image) openViewer(image);
  });

  document.addEventListener("keydown", function (event) {
    var image = event.target.closest && event.target.closest(selector);
    if (!image || event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openViewer(image);
  });

  if (document.readyState !== "loading") prepareImages();
  else document.addEventListener("DOMContentLoaded", prepareImages);

})();

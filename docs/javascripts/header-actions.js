(function () {
  "use strict";

  var palette = document.querySelector('[data-md-component="palette"]');
  if (!palette || document.querySelector(".md-header__github")) return;

  var link = document.createElement("a");
  link.className = "md-header__button md-icon md-header__github";
  link.href = "https://github.com/BasHTR/bashtr-guidelines";
  link.target = "_blank";
  link.rel = "noopener";
  link.title = "BASHtr on GitHub";
  link.setAttribute("aria-label", "BASHtr on GitHub");
  link.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>';

  palette.insertAdjacentElement("beforebegin", link);
})();

(function () {
  "use strict";

  document.querySelectorAll(".md-content a[href]").forEach(function (link) {
    var url = new URL(link.href, window.location.href);

    if (url.origin === window.location.origin || link.hasAttribute("download")) return;

    link.target = "_blank";
    link.rel = "noopener";
  });
})();

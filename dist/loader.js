(function () {
    const cssUrl =
        "https://cdn.jsdelivr.net/gh/BryBTG/SinceThenGHLAgency@v1.0.3/dist/main.css";

    // Prevent duplicate loading
    if (document.querySelector('link[data-since-then-theme]')) {
        return;
    }

    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = cssUrl;
    link.dataset.sinceThenTheme = "true";

    document.head.appendChild(link);
})();

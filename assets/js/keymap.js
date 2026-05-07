/* StudyHub keyboard shortcuts — press ? for help */
(function(){
  if (typeof document === "undefined") return;
  let chord = null;
  let chordTimer = null;

  // Compute path back to the StudyHub root from any depth.
  // This relies on the navbar's existing relative anchors, which Quarto
  // computes correctly per page; we just read one to find the root prefix.
  function rootPrefix() {
    const homeLink = document.querySelector(".navbar a[href$='index.html'], .navbar a[href$='/']");
    if (!homeLink) return "./";
    const href = homeLink.getAttribute("href");
    return href.replace(/index\.html$/, "");
  }

  function go(href) {
    window.location.href = rootPrefix() + href;
  }

  const targets = {
    h: "index.html",
    t: "tonight.html",
    i: "ir362/final-run.html",
    f: "ir362/index.html",
    s: "ir362/sample-answers.html",
    c: "ir362/cram-sheet.html",
    a: "acct410x/cheat-sheet.html",
    e: "econ205/cram-sheet.html",
    m: "marketing/index.html",
    r: "reset.html"
  };

  function showHelp() {
    let overlay = document.getElementById("kbd-help-overlay");
    if (overlay) { overlay.remove(); return; }
    overlay = document.createElement("div");
    overlay.id = "kbd-help-overlay";
    overlay.innerHTML = `
      <div class="kbd-help-card">
        <button class="kbd-close" aria-label="Close">×</button>
        <h3>Keyboard shortcuts</h3>
        <table>
          <tr><td><kbd>g</kbd> <kbd>h</kbd></td><td>Home</td></tr>
          <tr><td><kbd>g</kbd> <kbd>t</kbd></td><td>🎯 Tonight</td></tr>
          <tr><td><kbd>g</kbd> <kbd>i</kbd></td><td>📘 IR Final Run</td></tr>
          <tr><td><kbd>g</kbd> <kbd>f</kbd></td><td>IR Framework</td></tr>
          <tr><td><kbd>g</kbd> <kbd>s</kbd></td><td>IR Sample Answers</td></tr>
          <tr><td><kbd>g</kbd> <kbd>c</kbd></td><td>IR Cram Sheet</td></tr>
          <tr><td><kbd>g</kbd> <kbd>a</kbd></td><td>📕 ACCT Cheat</td></tr>
          <tr><td><kbd>g</kbd> <kbd>e</kbd></td><td>📗 ECON Cram</td></tr>
          <tr><td><kbd>g</kbd> <kbd>m</kbd></td><td>🛍 Marketing</td></tr>
          <tr><td><kbd>g</kbd> <kbd>r</kbd></td><td>🌬 Reset</td></tr>
          <tr><td><kbd>?</kbd></td><td>Toggle this help</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close this help</td></tr>
        </table>
        <p class="kbd-hint">Tip: press <kbd>g</kbd>, then a letter within 1.5 seconds.</p>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector(".kbd-close").addEventListener("click", hideHelp);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) hideHelp(); });
  }

  function hideHelp() {
    document.getElementById("kbd-help-overlay")?.remove();
  }

  document.addEventListener("keydown", (e) => {
    const tag = (e.target?.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select" || e.target?.isContentEditable) return;

    if (e.key === "Escape") { hideHelp(); return; }
    if (e.key === "?" || (e.shiftKey && e.key === "/")) { e.preventDefault(); showHelp(); return; }

    if (chord === "g") {
      const k = e.key.toLowerCase();
      if (targets[k]) { e.preventDefault(); go(targets[k]); }
      chord = null;
      if (chordTimer) clearTimeout(chordTimer);
      return;
    }

    if (e.key.toLowerCase() === "g" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      chord = "g";
      if (chordTimer) clearTimeout(chordTimer);
      chordTimer = setTimeout(() => { chord = null; }, 1500);
    }
  });
})();

if (window.matchMedia) {
  var match = window.matchMedia('(prefers-color-scheme: dark)')
  toggleDarkMode(match.matches);
 
  match.addEventListener('change', e => {
      toggleDarkMode(match.matches);
  })
 
  function toggleDarkMode(state) {
      let simpleCastPlayer = new URL(document.querySelector("#simpleCastPlayeriFrame").src);
      simpleCastPlayer.searchParams.set("dark", state);
      document.querySelector("#simpleCastPlayeriFrame").src = simpleCastPlayer.href;
  }
}
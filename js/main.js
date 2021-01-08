! function handleNightMode() {
  document.querySelector('input[name="nightMode"]')
    .addEventListener('change', e => e.target.checked ? nightMode() : dayMode());

  function nightMode() {
    document.body.classList.add('night-mode');
  }

  function dayMode() {
    document.body.classList.remove('night-mode');
  }
} ();

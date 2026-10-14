(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  // Opens the visitor's email client with the enquiry pre-filled.
  // Replace RECIPIENT with your real address, or wire up a form service/backend.
  var RECIPIENT = 'info@example.com';
  var form = document.getElementById('contact-form');
  var note = form.querySelector('.form-note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (!d.get('name').trim() || !/^\S+@\S+\.\S+$/.test(d.get('email')) || !d.get('message').trim()) {
      note.className = 'form-note err';
      note.textContent = 'Please enter your name, a valid email and a message.';
      return;
    }
    var body = 'Name: ' + d.get('name') + '\nEmail: ' + d.get('email') + '\nCompany: ' + d.get('company') +
      '\nService: ' + d.get('service') + '\n\n' + d.get('message');
    window.location.href = 'mailto:' + RECIPIENT + '?subject=' + encodeURIComponent('Website enquiry: ' + d.get('service')) +
      '&body=' + encodeURIComponent(body);
    note.className = 'form-note';
    note.textContent = 'Thanks! Your email app should open to send the enquiry.';
  });
})();

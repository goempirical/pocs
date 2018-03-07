import api from './api.js';

window.onload = async function() {
  // TODO:: Do your initialization job

  // add eventListener for tizenhwkey
  document.addEventListener('tizenhwkey', function(e) {
    if (e.keyName == 'back')
      try {
        tizen.application.getCurrentApplication().exit();
      } catch (ignore) {}
  });

  // Sample code
  var textbox = document.querySelector('.contents');
  textbox.addEventListener('click', function() {
    var box = document.querySelector('#textbox');
    alert(box);
    box.innerHTML = box.innerHTML == 'Basic' ? 'Sample' : 'Basic';
  });

  let firstName = await api.getFirstName();
  console.log('This is : ' + firstName);
};

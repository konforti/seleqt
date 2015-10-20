'use strict';

var seleqt = [].slice.call(document.querySelectorAll('.seleqt'));
seleqt.forEach(function(el, idx, array) {
  var text = document.createElement('input');
  text.type = 'text';
  text.id = 'seleqt-text-field-' + idx;
  text.className = 'seleqt-text-field';
  text.style.paddingRight = '20px';

  var hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.id = 'seleqt-hidden-field-' + idx;
  hidden.className = 'seleqt-hidden-field';
  hidden.name = el.getAttribute('data-name');

  var arrow = document.createElement('span');
  arrow.className = 'seleqt-opener';
  arrow.innerText = '▾';
  arrow.style.marginLeft = '-20px';
  arrow.style.cursor = 'pointer';

  var ul = el.querySelector('ul');
  ul.style.display = 'none';
  ul.style.position = 'absolute';

  var li = [].slice.call(el.querySelectorAll('ul li'));
  li.forEach(function(el, idx, array) {
    el.style.cursor = 'pointer';
  });

  el.insertBefore(text, ul);
  el.insertBefore(hidden, ul);
  el.insertBefore(arrow, ul);
});

document.addEventListener('click', function(e) {
  var el = e.target;

  if (el.className === 'seleqt-opener') {
    var ul = el.parentElement.getElementsByTagName('ul')[0];
    ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
  }
  else {
    var uls = [].slice.call(document.querySelectorAll('.seleqt ul'));
    uls.forEach(function(ul) {
      ul.style.display = 'none';
    })
  }

  if (el.parentElement) {
    var wrp = el.parentElement.parentElement;
    if (wrp) {
      var text = wrp.querySelector('.seleqt-text-field');
      if (wrp.className === 'seleqt') {
        text.value = el.innerHTML;
        hidden.value = el.getAttribute('data-value') || el.innerHTML;
      }
    }
  }
});

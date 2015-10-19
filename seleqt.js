  'use strict';
  
  var seleqt = [].slice.call(document.querySelectorAll('.seleqt'));
  seleqt.forEach(function(el, idx, array) {
    var element = document.createElement('input');
    element.type = 'text';
    element.id = 'seleqt-text-element-' + idx;
    element.className = 'seleqt-text-element'
    element.style.paddingRight = '20px';

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

    el.insertBefore(element, ul);
    el.insertBefore(arrow, ul);
  });

  document.addEventListener('click', function(e) {
    var el = e.target
    switch (el.className) {
      case 'seleqt-opener':
        var ul = el.parentElement.getElementsByTagName('ul')[0];
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
        break;
    }

    var wrp = el.parentElement.parentElement;
    var element = wrp.querySelector('.seleqt-text-element')
    if (wrp.className === 'seleqt') {
      element.value = el.getAttribute('data-text') || el.innerHTML;
      element.setAttribute('data-val', el.getAttribute('data-val'));
      element.setAttribute('data-key', el.getAttribute('data-key'));
    }
  });

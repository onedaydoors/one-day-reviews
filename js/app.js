import 'babel-polyfill';

if (document.querySelector('.work-project-index') !== null) {
  document.addEventListener('DOMContentLoaded', function() {
    workIndexAnimation();
  }, false);
}

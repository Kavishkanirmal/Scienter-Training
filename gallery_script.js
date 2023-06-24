//Toggle the sidebar
document.addEventListener('DOMContentLoaded', function() {
  var sidebar = document.getElementById('sidebar');
  var showButton = document.getElementById('show-button');

  sidebar.addEventListener('click', function() {
    sidebar.classList.add('hide-sidebar');
  });

  showButton.addEventListener('click', function() {
    sidebar.classList.remove('hide-sidebar');
  });
});
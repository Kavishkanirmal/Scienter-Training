// //Toggle the sidebar
// document.addEventListener('DOMContentLoaded', function() {
//   var sidebar = document.getElementById('sidebar');
//   var showButton = document.getElementById('show-button');

//   sidebar.addEventListener('click', function() {
//     sidebar.classList.add('hide-sidebar');
//     showButton.style.display = 'block';
//   });

//   showButton.addEventListener('click', function() {
//     sidebar.classList.remove('hide-sidebar');
//     showButton.style.display = 'none';
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var sidebar = document.getElementById('sidebar');
//   var showButton = document.getElementById('show-button');

//   sidebar.addEventListener('click', function(event) {
//     var category = event.target.innerText.toLowerCase();

//     // Remove active class from all sidebar categories
//     var categories = sidebar.querySelectorAll('h4');
//     categories.forEach(function(cat) {
//       cat.classList.remove('active');
//     });

//     // Add active class to the clicked category
//     event.target.classList.add('active');

//     // Show only the gallery items matching the clicked category
//     var galleryItems = document.getElementsByClassName('gallery-item');
//     for (var i = 0; i < galleryItems.length; i++) {
//       var item = galleryItems[i];
//       var itemCategory = item.getElementsByTagName('img')[0].src.toLowerCase();
//       if (itemCategory.includes(category)) {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     }

//     sidebar.classList.add('hide-sidebar');
//     showButton.style.display = 'block';
//   });

//   showButton.addEventListener('click', function() {
//     sidebar.classList.remove('hide-sidebar');
//     showButton.style.display = 'none';

//     // Reset gallery items display to show all
//     var galleryItems = document.getElementsByClassName('gallery-item');
//     for (var i = 0; i < galleryItems.length; i++) {
//       galleryItems[i].style.display = 'block';
//     }

//     // Remove active class from all sidebar categories
//     var categories = sidebar.querySelectorAll('h4');
//     categories.forEach(function(cat) {
//       cat.classList.remove('active');
//     });
//   });
// });



document.addEventListener('DOMContentLoaded', function() {
  var sidebar = document.getElementById('sidebar');
  var showButton = document.getElementById('show-button');
  var galleryItems = document.getElementsByClassName('gallery-item');
  var categoryNameElement = document.getElementById('category-heading');

  // Add click event listener to each category in the sidebar
  var categories = sidebar.querySelectorAll('h4');
  categories.forEach(function(category) {
    category.addEventListener('click', function(event) {
      var clickedCategory = event.target.textContent.trim().toLowerCase();

      // Remove active class from all sidebar categories
      categories.forEach(function(cat) {
        cat.classList.remove('active');
      });

      // Add active class to the clicked category
      event.target.classList.add('active');

      // Show only the gallery items matching the clicked category
      for (var i = 0; i < galleryItems.length; i++) {
        var item = galleryItems[i];
        var itemCategory = item.querySelector('img').getAttribute('src').split('.')[0].toLowerCase();

        if (itemCategory.includes(clickedCategory) || clickedCategory === 'all') {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }

      categoryNameElement.textContent = clickedCategory.toUpperCase();

      sidebar.classList.add('hide-sidebar');
      showButton.style.display = 'block';
    });
  });

  showButton.addEventListener('click', function() {
    sidebar.classList.remove('hide-sidebar');
    showButton.style.display = 'none';

    // Remove active class from all sidebar categories
    categories.forEach(function(category) {
      category.classList.remove('active');


      
    });
  });
});

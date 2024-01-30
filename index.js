// document.addEventListener('DOMContentLoaded', function () {
//     const categoryList = document.querySelector('.category-list');
  
//     categoryList.addEventListener('mouseover', 
//     function (event) {
//       if (event.target.tagName === 'A') {
//         event.target.style.color = '#d32f2f';
  
//         const subMenu = event.target.nextElementSibling;
//         if (subMenu) {
//           subMenu.style.display = 'block';
//         }
//       }
//     });
  
//     categoryList.addEventListener('mouseout', function (event) {
//       if (event.target.tagName === 'A') {
//         event.target.style.color = '#333';
  
//         const subMenu = event.target.nextElementSibling;
//         if (subMenu) {
//           subMenu.style.display = 'none';
//         }
//       }
//     });
  

//     document.addEventListener('mouseover', function (event) {
//       const subMenu = event.target.closest('.nested-sub-menu');
//       if (!subMenu) {

//         const allSubMenus = document.querySelectorAll('.nested-sub-menu');
//         allSubMenus.forEach((menu) => {
//           menu.style.display = 'none';
//         });
//       }
//     });
//   });
  
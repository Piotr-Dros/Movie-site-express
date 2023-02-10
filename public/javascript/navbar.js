const popupMenuButton = document.querySelector('.menu-icon');
const popupMenu = document.querySelector('.popup-search');

popupMenuButton.addEventListener('click', function (e) {
    popupMenu.classList.toggle('dropped');
});

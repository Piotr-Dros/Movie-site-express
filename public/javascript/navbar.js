const popupMenuButton = document.querySelector('.menu-icon');
const popupMenu = document.querySelector('.popup_container');

popupMenuButton.addEventListener('click', function (e) {
    popupMenu.classList.toggle('dropped');
});

document.addEventListener('click', function (e) {
    if (popupMenu.contains(e.target)) return;
    if (popupMenuButton.contains(e.target)) return;

    popupMenu.classList.remove('dropped');
});

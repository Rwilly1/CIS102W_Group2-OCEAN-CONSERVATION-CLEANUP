const searchBar = document.querySelector('#search-bar');
const contentList = document.getElementById('content-list');
const listItems = contentList.getElementsByTagName('li');

searchBar.addEventListener('keyup', function() {
    const filter = searchBar.value.toLowerCase();

    for (let i = 0; i < listItems.length; i++) {
        const txtValue = listItems[i].textContent || listItems[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
        }
    }
});
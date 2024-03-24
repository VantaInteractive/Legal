function langDropdownBtn() {
    var dropdownMenu = document.getElementById('languageDropdownMenu');
    dropdownMenu.classList.toggle('flex');
}

document.addEventListener('click', function(event) {
    var dropdownButton = document.getElementById('languageDropdownButton');
    var dropdownMenu = document.getElementById('languageDropdownMenu');
    if (!dropdownButton.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

document.querySelectorAll('#languageDropdownMenu .dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        var lang = event.target.getAttribute('data-lang');
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace(/\/[a-z]{2}\//, '/' + lang + '/');
        window.location.href = newUrl;
    });
});

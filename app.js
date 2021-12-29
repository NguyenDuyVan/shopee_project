function openHeaderSearch() {
    searchIcon = document.querySelector('.header__mobile-search')
    headerSearch = document.querySelector('.header__search.hide-on-tablet-pc')

    searchIcon.onclick = (e) => {
        e.stopPropagation()
        headerSearch.classList.toggle('header__search--open-on-mobile')
        headerSearch.style.opacity = '1'
        headerSearch.onclick = (e) => {
            e.stopPropagation()
        }
        document.onclick = () => {
            headerSearch.classList.toggle('header__search--open-on-mobile')
        }
    }
}
openHeaderSearch()
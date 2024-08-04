let burguer = document.querySelector('.nav__dropdown--hamburger')
let dropdown = document.querySelector('.nav__dropdown__menu')
let menuItems = document.querySelectorAll('.nav-menu > li.menu__item')
let wrappers = document.querySelectorAll('.wrapper-90')


if (window.innerWidth > 800) {
    removeWrappers()
}

burguer.addEventListener('click', () => {
    burguer.classList.toggle('closed')
    if (burguer.classList.contains('closed')) {
        closeInnerMenus()
        dropdown.classList.add('closed')
    } else {
        dropdown.classList.remove('closed')
    }
})

menuItems.forEach( mi => {
        mi.addEventListener('click', () => {
            toggleInnerMenu(mi)
        })
    }
)

window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
        removeWrappers()
    } else {
        addWrappers()
    }
})

function removeWrappers() {
    wrappers.forEach( w => {
        w.classList.remove('wrapper-90')
    })
}

function addWrappers() {
    wrappers.forEach( w => {
        w.classList.add('wrapper-90')
    })
}

function toggleInnerMenu(menuItem) {
    let im = menuItem.querySelector('.inner-menu')
    closeInnerMenus(menuItem)
    if (im) {
        menuItem.classList.toggle('open')
        im.classList.toggle('closed')
    }
}

function closeInnerMenus(keepOpen) {
    menuItems.forEach( mi => {
            if (keepOpen && mi === keepOpen) {
                return
            }
            let im = mi.querySelector('.inner-menu')
            if (im) {
                mi.classList.remove('open')
                im.classList.add('closed')
            }
        }
    )
}
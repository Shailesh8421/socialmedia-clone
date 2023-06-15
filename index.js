const menuItems = document.querySelectorAll('.menu-item');

const messageNotification = document.querySelector('#messages');
const Messages = document.querySelector('.messages');
const Msgcount = messageNotification.querySelector('.notification-count');

const message = Messages.querySelectorAll('.message');
const messagesearch = document.querySelector('#message-search');


const theme = document.querySelector('#theme');
const thememodal = document.querySelector('.customize-theme');

const fontsizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
// <----------------SideBar---------------------------->
const changeActiveItem = () => {
    menuItems.forEach(items => {
        items.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// <-----------------------message---------------------------->
const searchMessage = () => {
    const val = messagesearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}

messagesearch.addEventListener('keyup', searchMessage);
messageNotification.addEventListener('click', () => {
    Messages.style.boxShadow = '0 0 1rem hsl(252,75%,60%)';
    Msgcount.style.display = 'none';
    setTimeout(() => {
        Messages.style.boxShadow = 'none'
    }, 2000);

})


// <------------------------customize-theme----------------------------->
// opens theme center
const openThememodes = () => {
    thememodal.style.display = 'grid';
}
// close theme center
const closeThememodes = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        thememodal.style.display = 'none';
    }
}

thememodal.addEventListener('click', closeThememodes);

theme.addEventListener('click', openThememodes);

// <-----------------Font sizes----------------------------->

const removeActive = () => {
    fontsizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontsizes.forEach(size => {

    size.addEventListener('click', () => {
        removeActive();
        let Fontsize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            Fontsize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            Fontsize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            Fontsize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            Fontsize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            Fontsize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
        document.querySelector('html').style.fontSize = Fontsize;
    })


})
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
var colorPalette=document.querySelectorAll('.choose-color span');

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

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
            document.querySelector('.notification-popup').style.display = 'none';
            
        
    })
})

document.querySelector('#notifications').addEventListener('click',()=>{
    document.querySelector('.notification-popup').style.display = 'block';
    document.querySelector('#notifications .notification-count').style.display = 'none';
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
    Messages.style.boxShadow = '0 0 1rem var(--color-primary)';
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


// -----------Profile-photo change Popup-------
document.querySelectorAll('#my-profile-picture').forEach(AllProfile=>{
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex';
    })
})
document.querySelectorAll('.close').forEach(closer=>{
    closer.addEventListener('click',()=>{
        document.querySelector('.popup').style.display='none';
        document.querySelector('.add-post-popup').style.display='none';
    })
})

document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllImg =>{
        AllImg.src=URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
})

window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none';
    document.querySelector('.add-post-popup').style.display='none';
})

// ------------------Add post Popup---------
document.querySelector('#crate-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex';
})

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postImg').src=URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
})

// -----------------Liked Button-----------

document.querySelectorAll('.action-buttons span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
})


// ------------------------------Friend Request----------------------------

let Accept=document.querySelectorAll('#accept');
let Decline=document.querySelectorAll('#delete');

Accept.forEach(a=>{
    a.addEventListener('click',()=>{
        a.parentElement.style.display='none';
        a.parentElement.parentElement.querySelector('.alert').style.display='block';
    })
})
Decline.forEach(a=>{
    a.addEventListener('click',()=>{
        a.parentElement.parentElement.style.display='none';
    })
})

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
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = Fontsize;
    })
})

// -----------Changing Primary Colors------------

const changeActiveColor=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primary;
        changeActiveColor();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2')){
             primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
             primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
             primaryHue=152;
        }
        else if(color.classList.contains('color-5')){
             primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--Hue',primaryHue);
    })
})

// ----------------changing BackGround colors--------------
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}
Bg1.addEventListener('click',()=>{
    darkColorLightness='17%';
    lightColorLightness='95%';
    whiteColorLightness='100%';
    
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    lightColorLightness='20%';
    whiteColorLightness='15%';
    
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    lightColorLightness='10%';
    whiteColorLightness='0%';
    
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})


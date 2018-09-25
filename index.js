const addEventListenerList = function(list, event, fn) {
    for(let i = 0; i < list.length; i++) {
        sidebarLink[i].addEventListener("click", fn);
    }
};


const sidebarLink = document.getElementsByClassName("sidebar__link");
const tgSidebar = function() {
     
};
addEventListenerList(sidebarLink, "click", tgSidebar);
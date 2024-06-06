const headerMenu = document.getElementById("headerMenu");
let headerActiveMenu = 0;

function clickMenuButton() {

    if (headerActiveMenu == 1){
        // headerMenu.style = `display: none;`
        headerActiveMenu = 0;

        setTimeout(() => {
            headerMenu.classList.add("close");
        }, 100)
    }
    else {
        // headerMenu.style = `display: flex;`
        headerActiveMenu = 1;

        setTimeout(() => {
            headerMenu.classList.remove("close");
        }, 100)
    }

}
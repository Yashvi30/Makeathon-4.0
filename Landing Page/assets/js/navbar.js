
var isOpen = false;

function openNav() {
    
    const width = document.width;
    if(width < 1024){
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
    }
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
}

function closeNav() {
    console.log("Hello")
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


// class Navbar{
//     constructor(){
//         this.isOpen = false;
//     }
//     open(){
//         document.getElementById("mySidebar").style.width = "250px";
//         document.getElementById("main").style.marginLeft = "250px";
//         this.isOpen = true;
//     }
//     close(){
//         document.getElementById("mySidebar").style.width = "0";
//         document.getElementById("main").style.marginLeft= "0";
//         this.isOpen = false;
//     }
// }

// const navbar = Navbar()

// function act(){
//     if(navbar.isOpen == true){
//         navbar.close();
//     }else{
//         navbar.open();
//     }
// }


// class Navbar{
//     constructor(){
//         this.isOpen = false;
//     }
//     open(){
//         document.getElementById("mySidebar").style.width = "250px";
//         document.getElementById("main").style.marginLeft = "250px";
//         this.isOpen = true;
//     }
//     close(){
//         document.getElementById("mySidebar").style.width = "0";
//         document.getElementById("main").style.marginLeft= "0";
//         this.isOpen = false;
//     }
// }
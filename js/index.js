function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
    document.getElementById("open").classList.add("s-hidden");
    document.getElementById("close").classList.remove("s-hidden");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";   
    document.getElementById("open").classList.remove("s-hidden");
    document.getElementById("close").classList.add("s-hidden"); 
}
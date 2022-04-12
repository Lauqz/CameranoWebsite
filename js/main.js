$(document).ready(function(){
    var x = window.matchMedia("(max-width: 1035px)");

    $(window).resize(function(){
        location.reload();
    });

    if (x.matches) {
        $(window).on('scroll', scroll1Function);
    }
    else{
        $(window).on('scroll', scrollFunction);
    }

    $('#arrow').on('click', function(){
        if (window.scrollY==0){
            document.getElementById("arrow1").style.width = "39px";
            document.getElementById("arrow1").style.top = "45px";
            document.getElementById("arrow1").style.right = "45px";
        } else {
            document.getElementById("arrow1").style.width = "24px";
            document.getElementById("arrow1").style.top = "20px";
            document.getElementById("arrow1").style.right = "20px";
        }
        document.getElementsByClassName("navcontainer")[0].style.height = "100%";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.height = "100%";
        document.getElementById("arrow").style.transition = "0s";
        document.getElementById("arrow").style.visibility = "hidden";
        document.getElementById("arrow1").style.visibility = "visible";
        document.getElementById("arrow1").style.transition = "0.4s";
        document.getElementsByClassName("navbar-nav")[0].style.visibility = "visible";
        document.getElementsByClassName("navbar-nav")[0].style.height = "70vh";
        document.getElementsByClassName("navbar-nav")[0].style.width = "100%";
        document.getElementsByClassName("navbar-nav")[0].style.top = "0";
        document.getElementsByClassName("navbar-nav")[0].style.left = "-3vh";
        document.getElementsByClassName("navbar-nav")[0].style.position = "absolute";
        document.getElementsByClassName("navbar-nav")[0].style.display = "flex";
        document.getElementsByClassName("navbar-nav")[0].style.flexDirection = "column";
        document.getElementsByClassName("navbar-nav")[0].style.justifyContent = "center";
        document.getElementsByClassName("navbar-nav")[0].style.alignItems = "center";
        document.getElementsByClassName("navbar-nav")[0].style.paddingTop = "15vh";
        document.getElementsByClassName("navbar")[0].style.float = "none";
        document.getElementsByClassName("navbar")[1].style.float = "none";
        document.getElementsByClassName("navbar")[2].style.float = "none";
        document.getElementsByClassName("navbar")[3].style.float = "none";
        document.getElementsByClassName("navbar")[0].style.margin = "auto";
        document.getElementsByClassName("navbar")[1].style.margin = "auto";
        document.getElementsByClassName("navbar")[2].style.margin = "auto";
        document.getElementsByClassName("navbar")[3].style.margin = "auto";
    });

    $('#arrow1').on('click', function(){
        document.getElementsByClassName("navbar-nav")[0].style.visibility = "hidden";
        document.getElementById("arrow1").style.transition = "0s";
        document.getElementById("arrow1").style.visibility = "hidden";
        document.getElementById("arrow").style.visibility = "visible";
        document.getElementsByTagName("body")[0].style.overflow = "";
        document.getElementsByTagName("body")[0].style.height = "";
        if (window.scrollY==0){
            document.getElementsByClassName("navcontainer")[0].style.height = "";
        } else {
            document.getElementsByClassName("navcontainer")[0].style.height = "70px";
        }
        document.getElementById("arrow").style.transition = "0.4s";
    });

    $('form').on('submit', function(){
        var topic = document.getElementById("topic").value;
        var text = document.getElementById("text").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (document.getElementById("topic").value == "Info grotte"){
            document.forms[0].action = "mailto:info@turismocamerano.it?subject=Info e prenotazioni: Grotte di Camerano&body=" + text + "%0D%0A%0D%0A Nome ed email: " + name + ", " + email +"%0D%0A Inviato da turismocamerano.it";
        } else {
            document.forms[0].action = "mailto:culturaturismo@comune.camerano.an.it?subject=Richiesta informazioni&body=" + text + "%0D%0A%0D%0A Nome ed email: " + name + ", " + email +"%0D%0A Inviato da turismocamerano.it";
        }
    });
})

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("navcontainer")[0].style.height = "70px";
        document.getElementsByClassName("logo")[0].style.width = "100px";
        document.getElementsByClassName("logo")[0].style.position="relative";
        document.getElementsByClassName("logo")[0].style.float = "left";
        document.getElementsByClassName("logo")[0].style.left = "28%";
        document.getElementsByClassName("navbar-nav")[0].style.padding = "5px";
        document.getElementsByClassName("navbar-nav")[0].style.width="60%";
        document.getElementsByClassName("navbar-nav")[0].style.float="right";
        document.getElementsByClassName("navbar-nav")[0].style.fontSize = "13px";
        document.getElementsByClassName("navbar")[3].style.width = "15%";
        document.getElementsByClassName("navbar")[2].style.width = "15%";
        document.getElementsByClassName("navbar")[1].style.width = "15%";
        document.getElementsByClassName("navbar")[0].style.width = "15%";
    } else {
        document.getElementsByClassName("navcontainer")[0].style.height = "";
        document.getElementsByClassName("logo")[0].style.width = "200px";
        document.getElementsByClassName("logo")[0].style.position="";
        document.getElementsByClassName("logo")[0].style.float = "";
        document.getElementsByClassName("logo")[0].style.left = "";
        document.getElementsByClassName("navbar-nav")[0].style.padding = "";
        document.getElementsByClassName("navbar-nav")[0].style.paddingBottom = "20px";
        document.getElementsByClassName("navbar-nav")[0].style.width="100%";
        document.getElementsByClassName("navbar-nav")[0].style.float="";
        document.getElementsByClassName("navbar-nav")[0].style.fontSize = "16px";
        document.getElementsByClassName("navbar")[3].style.width = "25%";
        document.getElementsByClassName("navbar")[2].style.width = "25%";
        document.getElementsByClassName("navbar")[1].style.width = "25%";
        document.getElementsByClassName("navbar")[0].style.width = "25%";
    }
}

function scroll1Function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("navcontainer")[0].style.height = "70px";
        document.getElementsByClassName("logo")[0].style.width = "95px";
        document.getElementsByClassName("logo")[0].style.position="relative";
        document.getElementsByClassName("logo")[0].style.float = "left";
        document.getElementsByClassName("logo")[0].style.left = "28%";
        document.getElementById("arrow").style.width = "24px";
        document.getElementById("arrow").style.top = "21px";
        document.getElementById("arrow").style.right = "30px";
    } else {
        document.getElementsByClassName("navcontainer")[0].style.height = "";
        document.getElementsByClassName("logo")[0].style.width = "145px";
        document.getElementsByClassName("logo")[0].style.position="";
        document.getElementsByClassName("logo")[0].style.float = "";
        document.getElementsByClassName("logo")[0].style.left = "";
        document.getElementById("arrow").style.width = "35px";
        document.getElementById("arrow").style.top = "30px";
        document.getElementById("arrow").style.right = "45px";
    }
}

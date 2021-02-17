window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    if(window.pageYOffset >= 1){
        document.getElementById("nav-menu").style.backgroundColor = "#000000D2";
        document.getElementById("nav-menu").style.padding = "0px 0px";
    }else{
        document.getElementById("nav-menu").style.backgroundColor = "#000000A2";
        document.getElementById("nav-menu").style.padding = "10px 0px"
    }
  }, false);
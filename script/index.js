let height = $(window).height();
let menu = $("*#menu");
var body = $('body');
var header = $('header');
var light = $('#light');
var dark = $('#dark');
var image = $('#profil');
var nom = $('*#nom');


window.onload = ()=>{
    changeLangue();
    scrollFenetre("rgba(0, 0, 0, 0.25))");
    
    dark.click(()=>{
        darkMode()
        scrollFenetre("rgba(255,255,255,0.25)");
    })
    light.click(()=>{
        lightMode();
        scrollFenetre("rgba(0,0,0,0.25)");

window.onload = ()=>{
    changeLangue();
    scrollFenetre("#000");
    
    dark.click(()=>{
        darkMode()
        scrollFenetre("rgba(255,255,255,0.1)");
    })
    light.click(()=>{
        lightMode()
        scrollFenetre("rgba(0,0,0,0)");
    })
    
}

function menu_classRemove(){
    $(menu[0]).removeClass("active");
    $(menu[1]).removeClass("active");
    $(menu[2]).removeClass("active");
    $(menu[3]).removeClass("active");
    $(menu[4]).removeClass("active");
    $(menu[5]).removeClass("active");
    $(menu[6]).removeClass("active");
    $(menu[7]).removeClass("active");
    $(menu[8]).removeClass("active");
    $(menu[9]).removeClass("active");
    $(menu[10]).removeClass("active");
    $(menu[11]).removeClass("active");
    $(menu[12]).removeClass("active");
    $(menu[13]).removeClass("active");
    $(menu[14]).removeClass("active");
    $(menu[15]).removeClass("active");
}

function changeLangue(){
    document.getElementById("langue").addEventListener("change", ()=>{
        let width = $(window).width();
        let langue = $("#langue option:selected").val();
        
        
        if(langue === "english"){
            $("*#fr").css("display", "none");
            $("*#en").css("display", "flex");
            $("*.mother_tools").css("flex-direction", "column");
        }
        if(langue === "french"){
            $("*#en").css("display", "none");
            $("*#fr").css("display", "flex");
            $("*.mother_tools").css("flex-direction", "column");
        }
        if(width <= 800){
            $(".menu").css("display", "none");
        }
        else{
            if(langue === "english"){
                $(".menu #fr").css("display", "none");
                $(".menu #en").css("display", "flex");
            }
            if(langue === "french"){
                $(".menu #en").css("display", "none");
                $(".menu #fr").css("display", "flex");
            }
        }
    });
}

function scrollFenetre(color){
    window.addEventListener('scroll', ()=>{
        let scroll = $(window).scrollTop();

        if(scroll <= 0){
            $("#header").css("box-shadow", "none");
            menu_classRemove();
            $(menu[0]).addClass("active");
            $(menu[4]).addClass("active");
            $(menu[8]).addClass("active");
            $(menu[12]).addClass("active");
        }
        else{
            $("#header").css("box-shadow", "0 0px 10px " + color);
            if(scroll >= (height/2)){
                menu_classRemove();
                if(scroll >= ((height*3)/2)){
                    menu_classRemove();
                    if(scroll >= (height*2)){
                        menu_classRemove();
                        if(scroll >= ((height*5)/2)){
                            menu_classRemove();
                            $(menu[3]).addClass("active"); 
                            $(menu[7]).addClass("active");
                            $(menu[11]).addClass("active"); 
                            $(menu[15]).addClass("active");
                        }
                        else{
                            $(menu[2]).addClass("active");
                            $(menu[6]).addClass("active");
                            $(menu[10]).addClass("active");
                            $(menu[14]).addClass("active");
                        }
                    }
                    else{
                        $(menu[2]).addClass("active");
                        $(menu[6]).addClass("active");
                        $(menu[10]).addClass("active");
                        $(menu[14]).addClass("active");
                    }
                }
                else{
                    $(menu[1]).addClass("active");
                    $(menu[5]).addClass("active");
                    $(menu[9]).addClass("active");
                    $(menu[13]).addClass("active");
                }
            }
        }
    });
}

function home(){
    $("html, body").animate({
        scrollTop: 0
    }, 800)
}
function skills(){
    $("html, body").animate({
        scrollTop: height
    }, 800)
}
function projects(){
    $("html, body").animate({
        scrollTop: height*2
    }, 800);
    menu_classRemove()
    }, 800)
}
function contact(){
    $("html, body").animate({
        scrollTop: height*3
    }, 800)
}

function darkMode(){
    body.css('background','#000');
    header.css('background','#000');
    light.css('display','block');
    dark.css('display','none');
    menu.css('color','#fff');
    nom.css('color','#45ADFF');
    image.attr('src', './img/imgDark.png');
    $("#img_menu").attr('src', './img/menuDark.png');
    $("*.descri").css("color", "#fff")
    $("select").css("color", "#fff");
    $("select").css("background", "#000");
    $("*.tools").css("color", "#45ADFF");
    $("*#txt").css("color", "#45ADFF");
    $("*.ligne").css("background", "#45ADFF");
    $("*#lien").css("background", "#45ADFF");
    $("#nomPrenom").hover(()=>{
        $("#nomPrenom").css("text-shadow", "0 10px 20px rgba(255, 255, 255, 0.25)");
    }, ()=>{
        
        $("#nomPrenom").css("text-shadow", "none");
    })
}
function lightMode(){
    body.css('background','#f8f8f8');
    header.css('background','#f8f8f8');
    light.css('display','none');
    dark.css('display','block');
    menu.css('color','#000');
    nom.css('color','#008FFF');
    image.attr('src','./img/imgLight.png');
    $("#img_menu").attr('src','./img/menuLight.png');
    $("*.descri").css("color", "#000")
    $("select").css("color", "#000");
    $("select").css("background", "#F8F8F8");
    $("*.tools").css("color", "#008FFF");
    $("*#txt").css("color", "#008FFF");
    $("*.ligne").css("background", "#008FFF");
    $("*#lien").css("background", "#008FFF");
    $("#nomPrenom").hover(()=>{
        $("#nomPrenom").css("text-shadow", "0 10px 20px rgba(0, 0, 0, 0.25)");
    }, ()=>{
        
        $("#nomPrenom").css("text-shadow", "none");
    })
}

function menu_open(){
    $(".flou").css("display", "block");
    $("#icon_menu").css("display", "none");
}
function menu_close(){
    $(".flou").css("display", "none");
    $("#icon_menu").css("display", "block");
}
}

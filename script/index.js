let height = $(window).height();
let menu = $("*#menu");
var body = $('body');
var header = $('header');
var light = $('#light');
var dark = $('#dark');
var image = $('#profil');
var nom = $('*#nom');
var carte = $('#carte');
var inputMail = $('#mail');
var boxMail = $('.mail');
var inputMotif = $('#motif');
var boxMotif = $('.motif');
var inputName = $('#name');
var boxName = $('.name');
var inputMessage = $('#message');
var boxMessage = $('.message');
var textContact = $('.textcontact')
var afterMail = $('.aftermail');
var afterMotif = $('.aftermotif');
var afterName = $('.aftername');
var submit = $('.submit input');
var next = $('#next');
var prev = $('#prev');
var projetEN = $('*#en .projet');
var projetFR = $('*#fr .projet');
var img_projet = $('#img_projet');
var projet_descri = $('*.projet_descri');
var link_projet = $('*#link_projet');


$(document).ready(function() {
    $(window).scrollTop(0);
});

window.onload = ()=>{
    changeLangue();
    lightMode();
    change_imgProjet();
    projetClick();

    dark.click(()=>{
        darkMode()
    })
    light.click(()=>{
        lightMode();
    })

    carte.hover(()=>{
        carte.css('transform', "rotateY(360deg) scale(1.2)");
        carte.css('transition', "1s transform");
        carte.attr('src', './img/1.png');
    }, ()=>{
        carte.css('transform', "rotateY(0deg) scale(1)");
        carte.css('transition', "1s transform");
        carte.attr('src', './img/2.png');
    })

    date = new Date()
    annee = date.getFullYear()
    // alert(annee);
    $("#footer").append(annee)
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
        change_imgProjet();
        
        
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
}
function contact(){
    $("html, body").animate({
        scrollTop: height*3
    }, 800)
}

function darkMode(){
    scrollFenetre("rgba(255,255,255,0.25)");
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
    carte.css('box-shadow', '0 0 10px rgba(255, 255, 255, 0.1)');
    textContact.css('color', '#fff');
    boxMail.css('border', '1px solid rgba(255, 255, 255, 0.25)');
    boxMotif.css('border', '1px solid rgba(255, 255, 255, 0.25)');
    boxName.css('border', '1px solid rgba(255, 255, 255, 0.25)');
    inputMessage.css('border', '1px solid rgba(255, 255, 255, 0.25)');
    inputMail.css('color', '#fff');
    inputMotif.css('color', '#fff');
    inputName.css('color', '#fff');
    inputMessage.css('color', '#fff');
    $("form").css("color", "#fff");
    afterMail.css('background-color', '#000');
    afterMotif.css('background-color', '#000');
    afterName.css('background-color', '#000');
    afterMail.css('color', 'rgba(255, 255, 255, 0.5)');
    afterMotif.css('color', 'rgba(255, 255, 255, 0.5)');
    afterName.css('color', 'rgba(255, 255, 255, 0.5)');
    submit.css("background", "#45ADFF");
    $('.submit input').hover(()=>{
        $('.submit input').css('box-shadow', '0 0 10px rgba(255, 255, 255, 0.25)');
    }, ()=>{
        $('.submit input').css('box-shadow', 'none');
    })
    $('select').hover(()=>{
        $('select').css('border', '1px solid rgba(255, 255, 255, 1)');
    }, ()=>{
        $('select').css('border', 'none');
    })
    $('h1').hover(()=>{
        $('h1').css('text-shadow', '0 10px 20px rgba(255, 255, 255, 0.25)');
    }, ()=>{
        $('h1').css('text-shadow', 'none');
    })
    image.hover(()=>{
        image.css('filter', 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))');
    }, ()=>{
        image.css('filter', 'none');
    })
    $(".fermer").attr('src', './img/fermerDark.svg');
    $('footer').css({
        'color': '#fff',
        'border-top': '1px #fff solid'
    });
    $("#skills_1").css('box-shadow', 'inset 0 0 10px rgba(255, 255, 255, 0.5)');
    $("#skills_2").css('box-shadow', 'inset 0 0 10px rgba(255, 255, 255, 0.5)');
    $("#skills_1 p").css('color', '#fff');
    $("#skills_2 p").css('color', '#fff');
    projetEN.each((index, element)=>{
        $(element).css('color', '#FFF');
    })
    projetFR.each((index, element)=>{
        $(element).css({
            'color': '#FFF',
            'background-color': 'transparent',
        });
    })
    projet_descri.each((index, element)=>{
        $(element).css('color', '#FFF');
    })
    $('.sary').attr('src', './img/flecheDark.png');
    $('#prev img').attr('src', './img/prevDark.png');
    $('#next img').attr('src', './img/nextDark.png');
    $('#detail').css('box-shadow', 'inset 0 0 10px rgba(255, 255, 255, 0.25)');
}
function lightMode(){
    scrollFenetre("rgba(0,0,0,0.75)");
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
    carte.css('box-shadow', '0 0 10px rgba(0, 0, 0, 0.25)');
    textContact.css('color', 'rgba(0, 0, 0, 0.75)');
    $("form").css("color", "#000");
    boxMail.css('border', '1px solid rgba(0, 0, 0, 0.25)');
    boxMotif.css('border', '1px solid rgba(0, 0, 0, 0.25)');
    boxName.css('border', '1px solid rgba(0, 0, 0, 0.25)');
    inputMessage.css('border', '1px solid rgba(0, 0, 0, 0.25)');
    inputMail.css('color', '#000');
    inputMotif.css('color', '#000');
    inputName.css('color', '#000');
    inputMessage.css('color', '#000');
    afterMail.css('background-color', '#f8f8f8');
    afterMotif.css('background-color', '#f8f8f8');
    afterName.css('background-color', '#f8f8f8');
    afterMail.css('color', 'rgba(0, 0, 0, 0.5)');
    afterMotif.css('color', 'rgba(0, 0, 0, 0.5)');
    afterName.css('color', 'rgba(0, 0, 0, 0.5)');
    submit.css("background", "#008FFF");
    $('.submit input').hover(()=>{
        $('.submit input').css('box-shadow', '0 0 10px rgba(0, 0, 0, 0.5)');
    }, ()=>{
        $('.submit input').css('box-shadow', 'none');
    })
    $('select').hover(()=>{
        $('select').css('border', '1px solid rgba(0, 0, 0, 1)');
    }, ()=>{
        $('select').css('border', 'none');
    })
    $('h1').hover(()=>{
        $('h1').css('text-shadow', '0 10px 20px rgba(0, 0, 0, 0.5)');
    }, ()=>{
        $('h1').css('text-shadow', 'none');
    })
    image.hover(()=>{
        image.css('filter', 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.5))');
    }, ()=>{
        image.css('filter', 'none');
    })
    $(".fermer").attr('src', './img/fermerLight.svg');
    $('footer').css({
        'color': '#000',
        'border-top': '1px #000 solid'
    });
    $("#skills_1").css('box-shadow', 'inset 0 0 10px rgba(0, 0, 0, 0.5)');
    $("#skills_2").css('box-shadow', 'inset 0 0 10px rgba(0, 0, 0, 0.5)');
    $("#skills_1 p").css('color', '#000');
    $("#skills_2 p").css('color', '#000');
    projetFR.each((index, element)=>{
        $(element).css({
            'color': '#000',
            'background-color': 'transparent',
        });
    })
    projetEN.each((index, element)=>{
        $(element).css({
            'color': '#000',
            'background-color': 'transparent',
        });
    })
    $('.sary').attr('src', './img/flecheLight.png');
    $('#prev img').attr('src', './img/prevLight.png');
    $('#next img').attr('src', './img/nextLight.png');
    projet_descri.each((index, element)=>{
        $(element).css('color', '#000');
    })
    $('#detail').css('box-shadow', 'inset 0 0 10px rgba(0, 0, 0, 0.25)');
}

function menu_open(){
    $(".flou").css("display", "block");
    $("#icon_menu").css("display", "none");
}
function menu_close(){
    $(".flou").css("display", "none");
    $("#icon_menu").css("display", "block");
}

function prevBtn(){
    projetEN.each(function(index, element) {
        if($(element).hasClass('izy')){
            i = (index - 1 + projetEN.length) % projetEN.length;
            $(projetEN[index]).removeClass('izy');
            $(projetEN[i]).addClass('izy');
            change_imgProjet();
            return false;
        }
    })
    projetFR.each(function(index, element) {
        if($(element).hasClass('izy')){
            i = (index - 1 + projetEN.length) % projetFR.length;
            $(projetFR[index]).removeClass('izy');
            $(projetFR[i]).addClass('izy');
            change_imgProjet();
            return false;
        }
    })
}


function nextBtn(){
    projetEN.each(function(index, element) {
        if($(element).hasClass('izy')){
            i = (index + 1 + projetEN.length) % projetEN.length;
            $(projetEN[index]).removeClass('izy');
            $(projetEN[i]).addClass('izy');
            change_imgProjet();
            return false;
        }
    })
    projetFR.each(function(index, element) {
        if($(element).hasClass('izy')){
            i = (index + 1 + projetEN.length) % projetFR.length;
            $(projetFR[index]).removeClass('izy');
            $(projetFR[i]).addClass('izy');
            change_imgProjet();
            return false; //sortir de la boucle each
        }
    })
}

function change_imgProjet(){
    projetEN.each(function(index, element) {
        if($(element).hasClass('izy')){
            switch (index) {
                case 0:
                    img_projet.attr('src', './img/1.png');
                    remove_itoClass();
                    $(projet_descri[0]).addClass('ito');
                    $(link_projet[0]).attr('href', 'google.com');
                    $(link_projet[1]).attr('href', 'google.com');
                    break;
                case 1:
                    img_projet.attr('src', './img/2.png');
                    remove_itoClass();
                    $(projet_descri[1]).addClass('ito');
                    $(link_projet[0]).attr('href', 'facebook.com');
                    $(link_projet[1]).attr('href', 'facebook.com');
                    break;
                case 2:
                    img_projet.attr('src', './img/HN.png');
                    remove_itoClass();
                    $(projet_descri[2]).addClass('ito');
                    $(link_projet[0]).attr('href', 'youtube.com');
                    $(link_projet[1]).attr('href', 'youtube.com');
                    break;
                default:
                    img_projet.attr('src', './img/c.svg');
                    remove_itoClass()
            }
        }
    })
}
function remove_itoClass(){
    projet_descri.each((index, element)=>{
        $(element).removeClass('ito');
    })
}

function remove_izyClass(){
    projetEN.each((index, element)=>{
        $(element).removeClass('izy');
    })
    projetFR.each((index, element)=>{
        $(element).removeClass('izy');
    })
}
function projetClick(){
    projetEN.each((index, element)=>{
        $(element).click(()=>{
            remove_izyClass();
            $(element).addClass('izy');
            change_imgProjet();
        })
    })
    projetFR.each((index, element)=>{
        $(element).click(()=>{
            remove_izyClass();
            $(element).addClass('izy');
            change_imgProjet();
        })
    })
}
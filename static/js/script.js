var limite = 200

function exibirMenu() {
    if ($("#linksSuperiores").is(":hidden")){
        $("#linksSuperiores").show();
    }else{
        $("#linksSuperiores").hide();
    }
}

function dispensarCookies() {
    $("#avisoCookies").hide();
}

function definirCSS() {
    //Valores para Desktop
    if ($(window).width() > 800) {
        $("#linksHamburguer").hide();
    }
    //Valores para Mobile
    if ($(window).width() <= 800) {
        $("#linksSuperiores").hide();
    }
}

function alterarCSS() {
    //Valores para Desktop
    if ($(window).width() > 800) {
        var marFix = 5;
        var marFlu = 10;
        var hp = 28;
        var hg = 36;
    }
    //Valores para Mobile
    if ($(window).width() <= 800) {
        var marFix = 1;
        var marFlu = 2;
        var hp = 14;
        var hg = 18;
    }

    //Ajustar barra superior (desktop apenas)
    if ($(window).scrollTop() > limite) {
        if ($(window).width() > 800) {
            $("#barraSuperior").css("padding-top","5px");
            $("#barraSuperior").css("padding-bottom","5px");
            $("#barraSuperior").children().children().children().each(function() {
                $(this).css("margin-right",marFlu + "%");
            });
            $("#barraSuperior").children().children().children().last().css("margin-right","0%");
        }else{
            $("#barraSuperior").css("top","-100px");
        }
    } else {
        if ($(window).width() > 800) {
            $("#barraSuperior").css("padding-top","30px");
            $("#barraSuperior").css("padding-bottom","30px");
            $("#barraSuperior").children().children().children().each(function() {
                $(this).css("margin-right",marFix + "%");
            });
            $("#barraSuperior").children().children().children().last().css("margin-right","0%");
        }else{
            $("#barraSuperior").css("top","0px");
        }
    }

    //Ajustar tamanho dos cabeçalhos
    $("nav h1").each(function() {
        if ($(this).position().top > ($(this).position().top - $(window).scrollTop() + 200)) {
            $(this).css("font-size",hg + "pt");
        }else{
            $(this).css("font-size",hp + "pt");
        }
    });
}

$(window).ready(definirCSS);
$(window).ready(alterarCSS);
$(window).scroll(alterarCSS);
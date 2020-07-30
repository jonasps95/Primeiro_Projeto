$(function(){
/*menuMobile*/
    $('.menuMobile').click(function(){
        $('.menuMobile').find('ul').slideToggle();
    })

    $('body').click(function(){
        $('.menuMobile').find('ul').fadeOut();
    })

    $('.menuMobile').click(function(e){
        e.stopPropagation();
    })

/*slides*/
    $('.prd').slick({
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        infinite:true,
        dots:false,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    centerMode:true,
                    slidesToShow:2,
                    infinite:true,
                }
            },
            {
                breakpoint:700,
                settings:{
                    centerMode:true,
                    slidesToShow:1,
                    infinite:true,
                }
            }
        ]
    });

/*formulario de contato*/

abrirJanela();
verificarCliqueFechar();

function abrirJanela(){
    $('.btnContato').click(function(e){
        e.stopPropagation();
        $('.bg').fadeIn();
    });
}

function verificarCliqueFechar(){
    var el = $('body,.closeBtn');

    el.click(function(){
        $('.bg').fadeOut();
    })

    $('.form').click(function(e){
        e.stopPropagation();
    })
}
//Eventos do formulario

$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
})

$('form#form1').submit(function(e){
    var nome = $('input[name=nome]').val();
    var telefone = $('input[name=telefone]').val();
    var email = $('input[name=email]').val();

    if(verificarNome(nome) == false){
        aplicarCampoInvalido($('input[name=nome]'));
        return false;
        }else if(verificarTelefone(telefone) == false){
        aplicarCampoInvalido($('input[name=telefone]'));
        return false;
        }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
        return false;
    }else{
            alert("formulario enviado");
        }
    //se chegou até o final está ok
})
//funçoes para estilizar o campo do formulario

function aplicarCampoInvalido(el){
    el.css('color', 'red');
    el.css('border', '2px solid red');
    el.val('Campo Inválido');
    //el.data('invalido','true');
}
function resetarCampoInvalido(el){
    el.css('color', '#ccc');
    el.css('border', '1px solid #ccc');
    el.val('');
}

//funcoes para verificar nossos campos

function verificarNome(nome){
    //contando a quantidade de espaços e os respectivos valores.
    if(nome == ''){
        return false;
    }
    var amount = nome.split(' ').length;    
    var splitStr = nome.split(' ');
    if(amount >= 2){
        for(var i = 0; i < amount; i++){
            if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
    
            }else{
                return false;
            }
        }
    }else{
        return false;
    }
    }
    
    function verificarTelefone(telefone){
        if(telefone == ''){
            return false;
        }
    }
    function verificarEmail(email){
        if(email == '')
            return false;
    }

    /*balão destaque */
    $('.produto-unidade').find('a').click(function() {
        $('.balao').addClass('tr');
      });
    setInterval(function(){
        $('.balao').removeClass('tr');
    },4000);
});

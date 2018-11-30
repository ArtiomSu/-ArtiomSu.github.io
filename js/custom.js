

$(document).ready(function(){

	$('ul.dropdown').superfish({
		autoArrows: true,
		animation: {height:'show'}
	});

    $(".animsition").animsition({
        inClass: 'flip-in-x',
        outClass: 'flip-out-x',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });

    $('.writeText').t({

        // typing speed in milliseconds
        speed:10,

        // enable 'human-like'
        speed_vary:true,

        // delays start
        delay:1,

        // mistyping
        mistype:true,

        // en or de
        locale:'en',

        // enable caret
        caret:false,

        // enable blink
        blink:false,

        // permanent caret blinking
        blink_perm:false,

        // wrapper tag
        tag:'span',

        // pauses/continues typing on click/tap
        pause_on_click:false,

        // infinite or N times
        repeat:false,

        // Callbacks
        init:function(elem){},
        typing:function(elem,chars_total,chars_left,char){},
        fin:function(elem){}

    });

    $('.writeText1').t({
        // typing speed in milliseconds
        speed:10,
        // enable 'human-like'
        speed_vary:true,
        // delays start
        delay:3,
        // mistyping
        mistype:true,
        // en or de
        locale:'en',
        caret:false,
        blink:false,
        blink_perm:false,
        tag:'span',
        pause_on_click:false,
        repeat:false,
        init:function(elem){},
        typing:function(elem,chars_total,chars_left,char){},
        fin:function(elem){}

    });

    $('.writeText2').t({
        // typing speed in milliseconds
        speed:10,
        // enable 'human-like'
        speed_vary:true,
        // delays start
        delay:5,
        // mistyping
        mistype:true,
        // en or de
        locale:'en',
        caret:false,
        blink:false,
        blink_perm:false,
        tag:'span',
        pause_on_click:false,
        repeat:false,
        init:function(elem){},
        typing:function(elem,chars_total,chars_left,char){},
        fin:function(elem){}

    });

    $('.shuffleEffect').chaffle({
        speed: 20,
    	time: 140
	});
    $('.shuffleEffect').trigger("mouseover");


    $('.shuffleEffectdelay').chaffle({
        speed: 20,
        time: 140
    });

    setTimeout(
        function()
        {
            $('.shuffleEffectdelay').trigger("mouseover");
        }, 2200);



    $(".fadeInAmate0").fadeInAmate({
        initialDelay: 10,
        fadeInSpeed: 600,
        animationDelay: 10,

        // enable the slide down animation
        bounce: true
    });


    $(".fadeInAmate").fadeInAmate({
        initialDelay: 350,
        fadeInSpeed: 1500,
        animationDelay: 300,

        // enable the slide down animation
        bounce: true
    });

    $(".fadeInAmate1").fadeInAmate({
        initialDelay: 3750,
        fadeInSpeed: 1500,
        animationDelay: 1300,

        // enable the slide down animation
        bounce: true
    });

    $(".fadeInAmate2").fadeInAmate({
        initialDelay: 31300,
        fadeInSpeed: 1500,
        animationDelay: 300,

        // enable the slide down animation
        bounce: true
    });

    $('.tltheaders').textillate({ initialDelay:1400 });
    $('.tltheaders1').textillate({ initialDelay:1100 });
    $('.tltheaders2').textillate({ initialDelay:800 });
    $('.tltheaders3').textillate({ initialDelay:500 });
    $('.tltheadersMain').textillate();



    $(".tltheaders").hover(
        function(){
            $(this).filter(':not(:animated)').animate({
                marginLeft:'19px',
                fontSize: "110%"
            },'slow');
        },
        function() {
            $(this).animate({
                marginLeft:'0px',
                fontSize: "100%"
            },'slow');
        });

    $(".tltheaders1").hover(
        function(){
            $(this).filter(':not(:animated)').animate({
                marginLeft:'19px',
                fontSize: "110%"
            },'slow');
        },
        function() {
            $(this).animate({
                marginLeft:'0px',
                fontSize: "100%"
            },'slow');
        });

    $(".tltheaders2").hover(
        function(){
            $(this).filter(':not(:animated)').animate({
                marginLeft:'19px',
                fontSize: "110%"
            },'slow');
        },
        function() {
            $(this).animate({
                marginLeft:'0px',
                fontSize: "100%"
            },'slow');
        });

    $(".tltheaders3").hover(
        function(){
            $(this).filter(':not(:animated)').animate({
                marginLeft:'19px',
                fontSize: "110%"
            },'slow');
        },
        function() {
            $(this).animate({
                marginLeft:'0px',
                fontSize: "100%"
            },'slow');
        });



    $(".tltheadersMain").hover(
        function(){
            $(this).filter(':not(:animated)').animate({
                marginLeft:'9px'
            },'slow');
        },
        function() {
            $(this).animate({
                marginLeft:'0px'
            },'slow');
        });

    $(".image").hover(
        function(){
            $(this).filter(':not(:animated)').animate({
                width:'90%'
            },3000);
        },
        function() {
            $(this).animate({
                width: '50%'
            },900);
        });



});
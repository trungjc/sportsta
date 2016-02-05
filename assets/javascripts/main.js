$( document ).ready(function() {

    $('.view-comment').on('click',function(event){        
        event.preventDefault();
        var comment = $(this).attr('data-target');
        $(comment).slideToggle();
    });

    $('.view-comment-detail').on('click', function(event) {               
           event.preventDefault();
           var target = $(this).attr('data-target');
           $(target).slideDown();
            $('html, body').animate({
                 scrollTop: $(target).offset().top
            }, 1000);
    });
    
    $('.navbar-toggle').on('click',function(){          
         if($(this).hasClass('collapsed')) {
           $('#header').addClass('toggle-mobile');
         }
         else {
            $('#header').removeClass('toggle-mobile');
         }
    });
});

//this is in a window.load as height was coming
//back incorrect before the page loads in chrome
$(window).load(function(){
    if ($(window).width() > 768){
        $('#sticky').stick_in_parent({"offset_top":10});
        $(document).resize(function(){
            $('#sticky').css('padding-bottom',$('#editor-pick').outerHeight(true));
        });
        $(document).trigger('resize');
    }
    /*
    var $head = $(".item iframe").contents().find("head");                
    $head.append($("<link/>", 
    { rel: "stylesheet", href: "asset/css/iframe.css", type: "text/css" }));
    insert style to inframe
    var $link_color = "#46cb7e";
    var $font_family_sans_serif = "Colfax, Helvetica, Arial, sans-serif";
    var $font_family_sans_bold =  "Colfax-Bold, Helvetica, Arial, sans-serif";
    $("iframe").contents().find('head').append('<style>.TweetAction-stat{color:#aab8c2;font-weight:700;}.dt-updated{color:#b6b5b5}.Tweet-text,.Tweet-authorName{color:#606060}.EmbeddedTweet,.EmbeddedTweet-tweet{border-radius:0!important;border: none!important}.EmbeddedTweet{border: 1px solid #ececec!important;}.Tweet-text a{color:' + $link_color + ' !important;} * {font-family:'+ $font_family_sans_serif +' !important;} h2,h3 {font-family:'+ $font_family_sans_bold +' !important;}</style>');
    */
});
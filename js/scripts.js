$(document).ready(function () {
  
//Function for hiding and showing Design Description  
    $("#DesignDescription").hide();
    $("#desIcon").attr('disabled', true);
    $("#desIcon").click(function () {
        $("#DesignDescription").hide();
        $("#desIcon").attr('disabled', true);
        $("#desIcon").attr('disabled', false);

    });
    $("#desIcon").click(function () {
        $("#DesignDescription").show();
        $("#desIcon").hide();        
        $("#desIcon").attr('disabled', false);
        $("#desIcon").attr('disabled', true);
    });

    $("#DesignDescription").click(function () {
        $("#desIcon").show();
        $("#DesignDescription").hide();
        $("#DesignDescription").attr('disabled', false);
        $("#DesignDescription").attr('disabled', true);
    });

//Function for hiding and showing Development Description  
    $("#DevelopmentDescription").hide();
    $("#devIcon").attr('disabled', true);
    $("#devIcon").click(function () {
        $("#DevelopmentDescription").hide();
        $("#devIcon").attr('disabled', true);
        $("#devIcon").attr('disabled', false);

    });
    $("#devIcon").click(function () {
        $("#DevelopmentDescription").show();
        $("#devIcon").hide();
        $("#devIcon").attr('disabled', false);
        $("#devIcon").attr('disabled', true);
    });

    $("#DevelopmentDescription").click(function () {
        $("#devIcon").show();
        $("#DevelopmentDescription").hide();
        $("#DevelopmentDescription").attr('disabled', false);
        $("#DevelopmentDescription").attr('disabled', true);
    });

//Function for hiding and showing Product Management Description  
    $("#ProductManagementDescription").hide();
    $("#prodIcon").attr('disabled', true);
    $("#prodIcon").click(function () {
        $("#ProductManagementDescription").hide();
        $("#prodIcon").attr('disabled', true);
        $("#prodIcon").attr('disabled', false);

    });
    $("#prodIcon").click(function () {
        $("#ProductManagementDescription").show();
        $("#prodIcon").hide();
        $("#prodIcon").attr('disabled', false);
        $("#prodIcon").attr('disabled', true);
    });

    $("#ProductManagementDescription").click(function () {
        $("#prodIcon").show();
        $("#ProductManagementDescription").hide();
        $("#ProductManagementDescription").attr('disabled', false);
        $("#ProductManagementDescription").attr('disabled', true);
    });

//Function for displaying text over image during hover

    //Work 1
    $('.work1text').hide();
    $("#work1Image").animate({
        opacity:1
        
    });

    $("#work1Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work1text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work1text').fadeOut();
    });

    //Work 2
    $('.work2text').hide();
        $("#work2Image").animate({
            opacity:1
            
    });
    
    $("#work2Image").hover(function() {
            $(this).stop().animate({opacity:.4},200);
            $('.work2text').fadeIn();
    
    }, function() {
            $(this).stop().animate({opacity:1},500)
            $('.work2text').fadeOut();
    });

    //Work 3
    $('.work3text').hide();
    $("#work3Image").animate({
        opacity:1
        
    });

    $("#work3Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work3text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work3text').fadeOut();
    });

    //Work 4
    $('.work4text').hide();
    $("#work2Image").animate({
        opacity:1
        
    });

    $("#work4Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work4text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work4text').fadeOut();
    });

    //Work 5
    $('.work5text').hide();
    $("#work5Image").animate({
        opacity:1
        
    });

    $("#work5Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work5text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work5text').fadeOut();
    });

    //Work 6
    $('.work6text').hide();
    $("#work6Image").animate({
        opacity:1
        
    });

    $("#work6Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work6text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work6text').fadeOut();
    });

    //Work 7
    $('.work7text').hide();
    $("#work7Image").animate({
        opacity:1
        
    });

    $("#work7Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work7text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work7text').fadeOut();
    });

    //Work 8
    $('.work8text').hide();
    $("#work8Image").animate({
        opacity:1
        
});

$("#work8Image").hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.work8text').fadeIn();

}, function() {
        $(this).stop().animate({opacity:1},500)
        $('.work8text').fadeOut();
});
    
    
});




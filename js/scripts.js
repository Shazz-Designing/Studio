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
    
});




/*
* Localization script
* Author: Rova Randrianantoanina
* Date: 06-26-2018
* */

jQuery(document).ready(function($) {

    $('#setFR').on('click', function() {
        $('.en').hide();
        $('.fr').removeClass('hide');
        $('.fr').show();
    });

    $('#setEN').on('click', function() {
        $('.fr').hide();
        $('.en').show();
    });


});
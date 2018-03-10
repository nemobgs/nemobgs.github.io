// FULL PAGE
jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        navigation: true,
        scrollOverflow: true,
        // responsiveWidth: 700,
        anchors: ['page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6', 'page_7', 'page_8'],
        // parallax: true,
        // menu: '#menu',
        loopTop: true,
        loopBottom: true
    });
})
//// SLICK
$('.slick').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear'
});
// ACCARDEON
$(function() {
    'use strict';
    $('.Page5_accardion_item').first().addClass('activeP5');
    $('.Page5_accardion-info').first().show().animate({ width: '40%' });
    $('.Page5_accardion_item').click(function() {
        $(this).addClass("activeP5").siblings('.Page5_accardion_item').removeClass('activeP5');
        $(this).next().show().animate({ width: '40%' }).siblings('.Page5_accardion-info').animate({ width: 0 }, function() {
            $(this).hide();
        });
    });
});
//// MODAL POP UP
$('.js-button-campaign').click(function() {
    $('.main').css('filter', 'blur(5px)');
    $('.js-overlay-camping').fadeIn();
    $('.js-overlay-camping').addClass('disabled');
});

$('.js-close-campaign').click(function() {
    $('.js-overlay-camping').fadeOut();
    $('main').css('filter', 'none');
});
$(document).mouseup(function(e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-camping').fadeOut();
        $('main').css('filter', 'none');
    }
});

//// FORM
$(function() {
    $('#clean').click(function() {
        var form = $(this).closest('form');
        form.find("input, textarea").val("");
        return false;
    })
})
$(document).ready(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php", /// В файле Mail.php нужно ввести адрес почты (Тестировал На локальном сервере все работает);
            data: $(this).serialize()
        }).done(function() {
            alert("СПАСИБО ЗА ЗАКАЗ!");
        });
        return false;
    });
});

/// Google Maps API 

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 10,
        center: { lat: 59.860853, lng: 30.319865 }
    };
    var myMap = new google.maps.Map(element, options);

    addMarker({lat: 59.859175, lng: 30.471515});    
    addMarker({lat: 59.860853, lng: 30.319865});    
    addMarker({lat: 59.962557, lng: 30.303595});    
    addMarker({lat: 59.938550, lng: 30.363024});    

    function addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: 'C:/Users/User/Desktop/Urich/MapPointer.png'
        });
    }
}
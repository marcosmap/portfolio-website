$(document).ready(function() {
  
  // scroll menu

  if($(window).width() > 991) {
    var portada = $('.presentacion').offset().top;
    var sobremi = $('.about-me').offset().top;
    var portafolio = $('.portafolio').offset().top;
    var contactame = $('.contactame').offset().top;

    $('#btn-inicio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portada - 75
      }, 500);
    });

    $('#btn-about-me').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: sobremi - 50 
      }, 500);
    });

    $('#btn-portafolio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portafolio - 90 
      }, 500);
    });

    $('#btn-contactame').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame - 90
      }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame - 90 
      }, 500);
    });

  }


  if($(window).width() > 767) {
    var portada = $('.presentacion').offset().top;
    var sobremi = $('.about-me').offset().top;
    var portafolio = $('.portafolio').offset().top;
    var contactame = $('.contactame').offset().top;

    $('#btn-inicio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portada - 75
      }, 500);
    });

    $('#btn-about-me').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: sobremi - 30
      }, 500);
    });

    $('#btn-portafolio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portafolio - 80
      }, 500);
    });

    $('#btn-contactame').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame
      }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame
      }, 500);
    });

  }

  if($(window).width() > 575) {
    var portada = $('.presentacion').offset().top;
    var sobremi = $('.about-me').offset().top;
    var portafolio = $('.portafolio').offset().top;
    var contactame = $('.contactame').offset().top;

    $('#btn-inicio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portada - 75
      }, 500);
    });

    $('#btn-about-me').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: sobremi - 30
      }, 500);
    });

    $('#btn-portafolio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portafolio - 80
      }, 500);
    });

    $('#btn-contactame').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame - 30
      }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame - 30
      }, 500);
    });
  }

  if($(window).width() > 0) {
    var portada = $('.presentacion').offset().top;
    var sobremi = $('.about-me').offset().top;
    var portafolio = $('.portafolio').offset().top;
    var contactame = $('.contactame').offset().top;

    $('#btn-inicio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portada - 75
      }, 500);
    });

    $('#btn-about-me').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: sobremi - 30
      }, 500);
    });

    $('#btn-portafolio').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: portafolio - 80
      }, 500);
    });

    $('#btn-contactame').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame - 30
      }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: contactame - 30
      }, 500);
    });
  }

});
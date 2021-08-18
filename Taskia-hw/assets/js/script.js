$(document).ready(function() {
    $('.header__validation__valid-text').hide();
    $('.header__validation__invalid-text').hide();
    $('.header__validation__no-email-text').hide();
    $('.footer__validation__valid-text').hide();
    $('.footer__validation__invalid-text').hide();
    $('.footer__validation__no-email-text').hide();
    $('.icon-no-email').hide();
    $('.icon-valid').hide();
    $('.icon-invalid').hide(); 
    $('.try-our-service__number').prop('Counter',0).animate({
      Counter: $('.try-our-service__number').text()
  }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
          if(now == '100000'){  
            $('.try-our-service__number').text('100 000');
          }else{
          $('.try-our-service__number').text(Math.ceil(now));
          }
        }
  
  });
  });
  
  function validateEmail(email) {
    const REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return REGEX.test(email);
  }
  
  function validate(mail) {
    const XHTTP = new XMLHttpRequest();
    const EMAIL = $(mail);
    const NOEMAIL = $('.header__validation__no-email-text');
    const VALID = $('.header__validation__valid-text');
    const INVALID = $('.header__validation__invalid-text');
    const ICONINVALID = $('.header-icon-invalid');
    const ICONVALID = $('.header-icon-valid');
    const ICONNOEMAIL = $('.header-icon-no-email');
    $('.header__validation__submit').off('click');
    EMAIL.off('keypress');
    if(!EMAIL.val()){
    INVALID.hide('slow');
    VALID.hide('slow');
    NOEMAIL.show('pop');
    EMAIL.css('border-color', 'wheat');
    ICONVALID.hide();
    ICONINVALID.hide(); 
    return ICONNOEMAIL.show(); 
    }
    if (validateEmail(EMAIL.val())) {
      XHTTP.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
      ICONVALID.show();
      ICONINVALID.hide();
      ICONNOEMAIL.hide();  
      EMAIL.css('border-color', 'green')
      // EMAIL.hide('slow');
      // $('.header__validation__submit').hide('slow');
      // $('.submit2').hide('slow');
      // $('.header__validation__email-form').hide('slow');
      // $('.email2').hide('slow');
      EMAIL.on('keypress', function(key){
        if(key.which == 13){
        $('.header__validation__submit').click();
        }
      })
      $('.header__validation__submit').on('click', function(){
      $('.header__validation__submit').hide('slow');
      $('.header__validation__email-form').hide('slow');
      $('.footer__validation__submit').hide('slow');
      $('.footer__validation__email-form').hide('slow');
      INVALID.hide('slow');
      NOEMAIL.hide('slow');
      $('.footer__validation__no-email-text').hide('slow');
      $('.footer__validation__valid-text').show('pop');
      $('.footer__validation__invalid-text').hide('slow');
      ICONNOEMAIL.hide('slow');
      ICONVALID.hide('slow');
      ICONINVALID.hide('slow');  
      })
      INVALID.hide('slow');
      VALID.show('pop');
      NOEMAIL.hide('slow');
    } else {
      $('.header__validation__submit').off('click')
      EMAIL.off('keypress');
      INVALID.show('pop');
      NOEMAIL.hide('slow');
      VALID.hide('slow');
      EMAIL.css('border-color', 'red');
      ICONNOEMAIL.hide();
      ICONVALID.hide();
      ICONINVALID.show(); 
    }
    return;
  }


  // validate email for footer

  function validateFooter(mail) {
    const XHTTP = new XMLHttpRequest();
    const EMAIL = $(mail);
    const NOEMAILFOOTER = $('.footer__validation__no-email-text');
    const VALIDFOOTER = $('.footer__validation__valid-text');
    const INVALIDFOOTER = $('.footer__validation__invalid-text');
    const ICONINVALIDFOOTER = $('.footer-icon-invalid');
    const ICONVALIDFOOTER = $('.footer-icon-valid');
    const ICONNOEMAILFOOTER = $('.footer-icon-no-email');
    console.log(EMAIL.val)
    $('.footer__validation__submit').off('click');
    EMAIL.off('keypress');
    if(!EMAIL.val()){
    INVALIDFOOTER.hide('slow');
    VALIDFOOTER.hide('slow');
    NOEMAILFOOTER.show('pop');
    $('.footer__validation__submit').css('border-color', 'wheat');
    ICONVALIDFOOTER.hide();
    ICONINVALIDFOOTER.hide(); 
    ICONNOEMAILFOOTER.show(); 
    return EMAIL.css('border-color', 'wheat');
    }
    if (validateEmail(EMAIL.val())) {
      XHTTP.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
      ICONVALIDFOOTER.show();
      ICONINVALIDFOOTER.hide();
      ICONNOEMAILFOOTER.hide();  
      EMAIL.css('border-color', 'green')
      // EMAIL.hide('slow');
      // $('.header__validation__submit').hide('slow');
      // $('.submit2').hide('slow');
      // $('.header__validation__email-form').hide('slow');
      // $('.email2').hide('slow');
      EMAIL.on('keypress', function(key){
        if(key.which == 13){
        $('.footer__validation__submit').click();
        }
      })
      $('.footer__validation__submit').on('click', function(){
      $('.footer__validation__submit').hide('slow');
      $('.footer__validation__email-form').hide('slow');
      $('.header__validation__submit').hide('slow');
      $('.header__validation__email-form').hide('slow');
      INVALIDFOOTER.hide('slow');
      NOEMAILFOOTER.hide('slow');
      $('.header__validation__no-email-text').hide('slow');
      $('.header__validation__invalid-text').hide('slow');
      $('.header__validation__valid-text').show('pop');
      $('.header-icon-invalid').hide('slow');
      $('.header-icon-valid').hide('slow');
      $('.header-icon-no-email').hide('slow');
      ICONNOEMAILFOOTER.hide('slow');
      ICONVALIDFOOTER.hide('slow');
      ICONINVALIDFOOTER.hide('slow');  
      })
      INVALIDFOOTER.hide('slow');
      VALIDFOOTER.show('pop');
      NOEMAILFOOTER.hide('slow');
    } else {
      INVALIDFOOTER.show('pop');
      VALIDFOOTER.hide('slow');
      NOEMAILFOOTER.hide('slow');
      $('.footer__validation__submit').off('click');
      EMAIL.off('keypress');
      EMAIL.css('border-color', 'red');
      ICONNOEMAILFOOTER.hide();
      ICONVALIDFOOTER.hide();
      ICONINVALIDFOOTER.show(); 
    }
    return;
  }

  let timeOut;

  function myFunction(x) {
    if (x.matches) { // If media query matches
      responsiveStyle();
    }else{
      return defaultStyle();
    }
  }
  let slideIndex = 0;   
  function responsiveStyle(){
    let img1 = document.getElementById('customer1');
    let img2 = document.getElementById('customer2');
    img1.src = '../Taskia-hw/assets/images/lady-customer-two.png';
    img2.src = '../Taskia-hw/assets/images/lady-customer-one.png'
    let i;
    let slides = document.getElementsByClassName("listing-card");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    timeOut = setTimeout(responsiveStyle, 4000);
  }
  let media = window.matchMedia("(max-width: 1250px)")
  myFunction(media) // Call listener function at run time
  media.addListener(myFunction) // Attach listener function on state changes

  function defaultStyle(){
    let img1 = document.getElementById('customer1');
    let img2 = document.getElementById('customer2');
    img2.src = '../Taskia-hw/assets/images/lady-customer-two.png';
    img1.src = '../Taskia-hw/assets/images/lady-customer-one.png'
    clearTimeout(timeOut)
    let i;
    let slides = document.getElementsByClassName("listing-card");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";  
      slides[i].style.marginLeft = '0px';
    }
  }

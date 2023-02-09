import $ from "jquery"
import Inputmask from "inputmask"

$(".form").submit(function(e) {
  e.preventDefault();
  let form = $(this);
  let form_data = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "send.php",
    data: form_data,
    success: function(response) {
      $(form).html(response);
    } 
  });
});

$('.form__checkbox-privacy').on('click', function(el){
  let checkbox = el.currentTarget;
  let form = el.currentTarget.form;
  let formBtn = $(form).find($('[type="submit"]'));
  if (!$(checkbox).is(':checked')) {
      $(formBtn).attr('disabled' , true);
  } else {
      $(formBtn).removeAttr('disabled');
  }
});

var im = new Inputmask("+7(999)-999-99-99");
im.mask(document.querySelectorAll('.phone'));

$('.popup__top-button').on('click', function() {
  let $this = $(this).parent();
  $('.form__input-product').attr('value', $('.popup__top-name', $this).text());
  if ($('.form__checkbox-input', $this).is(':checked')) {
    $('.form__input-gygrometer').attr('value', 'да');
  } else {
    $('.form__input-gygrometer').attr('value', 'нет');
  }
});
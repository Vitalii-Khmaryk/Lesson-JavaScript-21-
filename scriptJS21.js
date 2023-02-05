$(function () {
  $(".load").slideUp(20000, function () {
    $(this).slideDown(10000, function () {
      $(".load").html('<p class="fz">0</p><p>minute</p>');
    });
    $(this).html('<p class="fz">1</p><p>minute</p>');
  });
});

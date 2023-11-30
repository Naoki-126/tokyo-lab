/* alert
=========================== */
$('.c-btn').on('click', function () {
    alert("アラートの表示")
});

/* to-top
=========================== */
$(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-toTop").show();
  } else {
    jQuery("#js-toTop").hide();
  }
});

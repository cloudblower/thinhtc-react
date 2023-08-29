$(document).ready(function () {
  // Đăng kí Click event cho nav-item
  $('.bl_navBar_navItem').click(function () {
    $('.bl_navBar_navItem').removeClass('active');
    $(this).addClass('active');
  });
  // Đăng kí Click event cho .categories h2
  $('.bl_ourProducts_category_item').click(function () {
    $('.bl_ourProducts_category_item').removeClass('active');
    $(this).addClass('active');
  });
});

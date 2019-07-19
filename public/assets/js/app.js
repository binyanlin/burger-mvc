$(document).on('click', '.devour', function () {
  let id = $(this).val();
  console.log(id);
  $.ajax({
    url: `/update/${id}`,
    type: 'POST',
    success: function (result) {
      if (result) {window.location.href = '/select'};
    }
  });
});
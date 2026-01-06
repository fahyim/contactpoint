jQuery(document).ready(function ($) {
    $('#secureForm').on('submit', function (e) {
        e.preventDefault();

        $.post(ajaxurl, {
            action: 'secure_form_submit',
            nonce: secureData.nonce,
            name: $('#name').val()
        }).done(function (response) {
            alert(response.data.message);
        }).fail(function () {
            alert('Request failed');
        });
    });
});

/* Upon submitting their email, fire an async request to collect the email and provide feedback to the user. */
function contact() {

    // Should resolve to 'www.views.send_email'
    var emailEndpoint = "/contact";
    var modalId = "#contactModal";

    return sendEmailFromModal(emailEndpoint, modalId);
}

function sendEmailFromModal(emailEndpoint, modalId) {

    // Fastfail for empty emails.
    if (!$(modalId + " form input[name='email']").val()) {
        return false;
    }

    var spinner = $('<icon class="cta icon notched-circle spin white x15" id="cta-placeholder" style="margin-right: 5px"></icon>').hide();
    var showSpinner = function() {
        $(modalId + " #submit").prepend(spinner);
        spinner.show();
    }

    showSpinner();
    $.post(emailEndpoint, $(modalId + ' form').serialize(), function(data) {
        $(modalId).modal('hide');
        spinner.hide();
    });
    return false;
}

// Autoplays + autopauses Vimeo when the appropriate modal is opened.
$(function() {
    var iframe = $('#vimeoplayer')[0];
    var player = $f(iframe);

    $('#videoModal').on('hidden.bs.modal', function () {
        player.api('pause');
    })
    $('#videoModal').on('shown.bs.modal', function () {
        player.api('play');
    })
});
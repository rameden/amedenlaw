$(document).ready(function() {

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the phone field value
        var phone = $('#phone').val();
        //get the comments
        var message = $('#message').val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url:'https://formspree.io/gary@amedenlaw.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                 phone:phone,
                message:message,
                _subject:'Amedenlaw.com Form Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                $('#legend').hide();
                $('.uk-button-send').hide();
                $('#success-message').show();
                $('.uk-button-sent').show();
            }

        });

    });

});

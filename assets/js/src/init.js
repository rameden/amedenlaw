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
            url:'https://formspree.io/ryley@ameden.me',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                 email:email,
                 phone:phone,
                message:message,
                _subject:'My Form Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                $('#legend').hide();
                $('#success-message').show();
            }

        });

    });

});

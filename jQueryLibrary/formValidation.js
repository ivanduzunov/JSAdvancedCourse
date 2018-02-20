function validate() {

    $('#company').on('change', function () {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    });


    $('#submit').on('click', function (ev) {
        ev.preventDefault();
        let isValid = true

        let username = $("#username")
        let email = $("#email")
        let password = $("#password")
        let confPassword = $("#confirm-password")

        let regex = /^[a-zA-Z0-9]{3,20}$/
        if (!regex.test(username.val())) {
            username.css('border-color', 'red')
            isValid = false
        } else {
            username.css('border-color', '')
        }

        regex = /^(.+@.*\..*)$/
        //^\w+@[a-zA-Z_]+?\.[a-zA-Z\.]+$
        if (!regex.test(email.val())) {
            email.css('border-color', 'red')
            isValid = false
        } else {
            email.css('border-color', '')
        }

        regex = /^\w{5,15}$/
        if (password.val() !== confPassword.val()) {
            password.css('border-color', 'red')
            confPassword.css('border-color', 'red')
            isValid = false
        } else {
            if (regex.test(password.val())) {
                password.css('border-color', '')
            } else {
                password.css('border-color', 'red')
                isValid = false
            }

            if (regex.test(confPassword.val())) {
                confPassword.css('border-color', '')
            } else {
                confPassword.css('border-color', 'red')
                isValid = false
            }
        }


        let fieldSet = $('#companyInfo');
        let companyNumber = $('#companyNumber');
        if (fieldSet.css('display') === 'block') {

            let number = Number(companyNumber.val())

            if (number >= 1000 && number <= 9999) {
                companyNumber.css('border-color', '')
            } else {
                companyNumber.css('border-color', 'red')
                isValid = false
            }
        }

        if (isValid) {
            $('#valid').css('display', 'block')
        } else {
            $('#valid').css('display', 'none')
        }
    })
}


const validateFields = (form, fieldArray) => {
    fieldArray.forEach((field) => {
        field.removeClass("input-error");
        if(field.val().trim() == "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length  == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']")
    const phone = form.find("[name='phone']")
    const comment = form.find("[name='comment']")
    const to = form.find("[name='to']")

    const modal = $("#modal__form")
    const content = modal.find(".modal__wrapper-form")

    modal.removeClass("error-modal")

    const isValid = validateFields(form, [name,phone,comment,to]);

    if(isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "POST",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
            },
            success:data => {
                content.text(data.message)
                
                modal.style.display = "flex";
            },
            error: date => {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass("error-modal")

                modal.style.display = "flex";
            }
        })
    }

});

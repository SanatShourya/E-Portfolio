// template_s9d4pii
// service_li8ih0j
// 1YwFicqt4P8IYdWJN


function contact (event) {
    event.preventDefault(); // allows to not reload quickly
    const loading = document.querySelector('.form__loading--div'); 
    const success = document.querySelector('.form__success'); 
    loading.classList += " visible";  // as soon as the form is submitted, loading screen appears
    emailjs //then we are sending the info from the form to my email 
        .sendForm(
            'service_li8ih0j',
            'template_s9d4pii',
            event.target,
            '1YwFicqt4P8IYdWJN'
    ).then(() => {
        loading.classList.remove("visible");  // once the email is sent, we remove the loading screen and bring forward the success screen
        success.classList += " visible1";
    }).catch(() => {
        loading.classList.remove("visible");
        alert(
            "The email service is temporarily unavailable. Please contact me through my email directly at sanatshourya100@gmail.com"
        );
    })
}
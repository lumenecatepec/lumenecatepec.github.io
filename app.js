const shareButtons = document.querySelectorAll('.share-button, .tile-share-button')
console.log(shareButtons)

document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email');

    emailLink.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevenir la acción por defecto del enlace

        const email = 'impecatepec@lumen.com.mx';
        const subject = 'envio';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

        // Redirigir al enlace mailto
        window.location.href = mailtoLink;
    });
});

async function copyText(e){
    //prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("copíed the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))
const generateQR = () => {
    document.querySelector('#qr-image').style.display = 'block';
    let QRtext = document.querySelector('#text').value;
    if (!QRtext.trim()) {
        document.querySelector("#qr-image .error").innerHTML = 'Please enter text or url';
        document.querySelector("#img").innerHTML = "none";
    }
    else {

        document.querySelector("#img").style.display = 'block';
        document.querySelector('#qr-image .error').innerHTML = "";
        document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext;
        document.querySelector('#qr-image').style.margin = '6px auto 16px auto';
        document.querySelector('#qr-image').style.padding = '8px 1px';
    }
}
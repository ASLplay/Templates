const fileInput = document.querySelector('.fileInput');
const previewImage = document.querySelector('.preview');

fileInput.addEventListener('change', function(e) {

    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    
    reader.onload = e => previewImage.src = e.target.result;
    reader.readAsDataURL(file);
});
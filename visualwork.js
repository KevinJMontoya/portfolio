var currentImgId;

function enlargeImg(imgId) {
    var img = document.getElementById(imgId);

    if (currentImgId) {
        var currentImg= document.getElementById(currentImgId);
        currentImg.classList.remove("enlarged");
    }

    img.classList.add("enlarged");

    currentImgId = imgId;
}
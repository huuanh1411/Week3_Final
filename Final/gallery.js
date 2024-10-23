/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Get the div with id "image"
    var imageDiv = document.getElementById("image");

    // Change the background image URL to the source file of the preview image
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    
    // Change the text of the div to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;

    console.log("Image updated: " + previewPic.alt);
}

function unDo() {
    // Get the div with id "image"
    var imageDiv = document.getElementById("image");
    
    // Change the background image URL back to the original image
    imageDiv.style.backgroundImage = "url('original-image-url.jpg')";
    
    // Change the text of the div back to the original text
    imageDiv.innerHTML = "Hover over an image below to display here.";

    console.log("Image reset to original.");
}

function initializeGallery() {
    var previews = document.getElementsByClassName("preview");
    for (var i = 0; i < previews.length; i++) {
        previews[i].onmouseover = function() { upDate(this); };
        previews[i].onmouseleave = function() { unDo(); };
        previews[i].onfocus = function() { upDate(this); };
        previews[i].onblur = function() { unDo(); };
        previews[i].setAttribute("tabindex", "0");
    }
    console.log("Gallery initialized.");
}
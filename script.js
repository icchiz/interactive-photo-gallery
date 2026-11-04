
function upDate(previewPic) {
    
    console.log("Triggered: Mouseover event detected.");

  
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    
    let container = document.getElementById("image");
    
   
    container.innerHTML = previewPic.alt;

   
    container.style.backgroundImage = `url('${previewPic.src}')`;
}


function unDo() {
    let container = document.getElementById("image");

    
    container.style.backgroundImage = "url('')";

    
    container.innerHTML = "Hover over an image below to display here.";

    console.log("Triggered: Mouseout event detected, restored to original state.");
}

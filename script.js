
function upDate(previewPic) {
    console.log("Triggered: Mouseover event detected.");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    let container = document.getElementById("image");
    
   
    container.style.backgroundImage = `url('${previewPic.src}')`;

   
    container.innerHTML = `<span style="background-color: rgba(0, 0, 0, 0.75); color: #ffffff; width: 100%; padding: 14px; box-sizing: border-box; font-size: 1.1rem;">${previewPic.alt}</span>`;
}


function unDo() {
    let container = document.getElementById("image");

    
    container.style.backgroundImage = "url('')";
    container.innerHTML = "Hover over an image below to display here.";

    console.log("Triggered: Mouseout event detected, restored to original state.");
}

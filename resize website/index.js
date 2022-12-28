const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("img"),
fileInput = uploadBox.querySelector("input"),
widthInput =  document.querySelector("#Width"),
heightInput =  document.querySelector("#Height"),
ratioInput = document.querySelector(".column-ratios"),
downloadBtn = document.getElementById("btn");
let ogImageRatio;  
const loadFile = (e) => {
    const file = e.target.files[0]; //getting first user selected files
    if(!file) return;//return if user hasn't selected any file
    previewImg.src = URL.createObjectURL(file); // passing selected file url to preview img src
    previewImg.addEventListener("load", () =>{ //once img is loaded
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".wrap").classList.add("active"); //new things learns
    });
}
//remaining to add the quality download option...
  widthInput.addEventListener("Keyup", () => {
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value  = Math.floor(height);
  });
  heightInput.addEventListener("Keyup", () => {
    const width = ratioInput.checked ? heightInput.value / ogImageRatio : widthInput.value;
    widthInput.value  = Math.floor(width);
  });
const resizeAndDownload = () =>{
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d");
    //setting canvas height and width according to input value
    canvas.width = widthInput.value;
  
    canvas.height = heightInput.value;
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas)
}
downloadBtn.addEventListener("click", resizeAndDownload);
fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
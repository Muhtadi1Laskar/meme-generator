const input = document.getElementById("meme");
const image = document.getElementById("img");
const top_value = document.getElementById("top");
const bottom_value = document.getElementById("bottom");
const btn = document.getElementById("btn");



const fetch_image= () => {
    let image_value = input.value;
    image.src = `http://apimeme.com/meme?meme=${image_value}`
    
}

const fetch_meme = () => {
    let image_value = input.value;
    let top = top_value.value;
    let bottom = bottom_value.value;
    image.src = `http://apimeme.com/meme?meme=${image_value}&top=${top}&bottom=${bottom}&test=1`
}

document.addEventListener("change", fetch_image);
btn.addEventListener("click", fetch_meme);



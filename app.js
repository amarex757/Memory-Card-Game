document.addEventListener("DOMContentLoaded", function() {
    const memeGenerator = document.querySelector("#meme-creation");
    const imageGallery = document.querySelector(".gallery");
    memeGenerator.addEventListener("submit", function(e) {
        e.preventDefault();
        // create li element for img gallery
        const gallery = document.createElement("li");
        gallery.classList.add("meme-img");
        const heading = document.getElementById("heading-text");
        const dataUrl = document.getElementById("url-upload").value, src=dataUrl, image=document.createElement("img");
        image.src=src;
        // create top text div
        const headContentDiv = document.createElement("div");
        headContentDiv.classList.add("heading", "text");
        headContentDiv.innerText = document.getElementById("heading-text").value;
        // create bottom text div
        const footContentDiv = document.createElement("div");
        footContentDiv.classList.add("footing", "text");
        footContentDiv.innerText = document.getElementById("footing-text").value;
        // create delete element
        const deleteDiv = document.createElement("div");
        deleteDiv.classList.add("delete-mark");
        deleteDiv.innerText = "X";
        deleteDiv.style.color = "red";
        // append child elements
        imageGallery.appendChild(gallery);
        gallery.appendChild(image);
        gallery.appendChild(headContentDiv);
        gallery.appendChild(footContentDiv);
        gallery.appendChild(deleteDiv);
        memeGenerator.reset();
    })
function cancel(e) {
    e.target.parentNode.remove();
}
imageGallery.addEventListener("click", cancel, false);
});


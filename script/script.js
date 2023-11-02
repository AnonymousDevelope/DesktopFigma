window.addEventListener("DOMContentLoaded",()=>{
    var location=document.querySelector('.nav-link[data-type="location"] span')?.innerText;
    document.querySelector('.nav-link[data-type="location"] span').innerText= location.slice(0,21);
})
const images = document.querySelectorAll("img");


// interseaction observer 

const imageOptions = {};

// const observer = new IntersectionObserver(callback, options);
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const image = entry.target;
        console.log(image);
        const newUrl = image.getAttribute('data-src');
        image.src = newUrl;
    })
}, imageOptions);

images.forEach(image => {
    // const newUrl = image.getAttribute('data-src');
    // image.src = newUrl;
    imageObserver.observe(image)
});
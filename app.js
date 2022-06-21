const images = document.querySelectorAll("img");


// interseaction observer 
const imageOptions = {};

// const observer = new IntersectionObserver(callback, options);
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        image.src = image.src.replace("w=10", "w=2000")
        // const newUrl = image.getAttribute('data-src');
        // image.src = newUrl;
        // stop observer 
        observer.unobserve(image);
    })
}, imageOptions);

images.forEach(image => {
    // const newUrl = image.getAttribute('data-src');
    // image.src = newUrl;
    imageObserver.observe(image)
});

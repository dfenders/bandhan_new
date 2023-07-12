export let loadImages = _ => {
    const images = Array.from(document.querySelectorAll('.grid img, .new_grid img'));

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
    
                    image.src = image.dataset.src;
                    //image.onload = () => image.previousElementSibling.remove();
    
                    imageObserver.unobserve(image);
                }
            });
        });
    
        images.forEach(img => imageObserver.observe(img));
    }    
}
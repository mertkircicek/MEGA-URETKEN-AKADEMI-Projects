document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('imageGallery');

    function fetchImages() {
        for (let i = 0; i < 15; i++) { 
            const image = document.createElement('img');
            image.src = `https://source.unsplash.com/random/400x300?sig=${i + 1}`;
            gallery.appendChild(image);
        }
    }

    fetchImages();
});

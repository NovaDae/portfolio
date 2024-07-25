document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Sample Instagram reel data (replace with your own reel data)
    const instagramReels = [
        { title: 'Reel 1', thumbnailUrl: 'reel-cover1.jpg', link: 'https://www.instagram.com/reel/C35eV4JLsAx/?igsh=anV3YTIxNDFtNHMx' },
        { title: 'Reel 2', thumbnailUrl: 'reel-cover2.jpg', link: 'https://www.instagram.com/reel/C4_LjGOxjGy/?igsh=NW9handiMTFrZTN5' },
        { title: 'Reel 3', thumbnailUrl: 'reel-cover3.jpg', link: 'https://www.instagram.com/reel/C4_LjGOxjGy/?igsh=NW9handiMTFrZTN5' },
        { title: 'Reel 4', thumbnailUrl: 'reel-cover1.jpg', link: 'https://www.instagram.com/reel/C8FXAi5xug-/?igsh=MW05ZXZtb2s5dDdjNw==' },
        { title: 'Reel 5', thumbnailUrl: 'reel-cover2.jpg', link: 'https://www.instagram.com/tv/CD5fsxNB2EJ/?igsh=aTJuZ3Z4M3YyNjJ4' },
    ];

    // Sample YouTube video data (replace with your own video IDs)
    const youtubeVideos = [
        { title: 'Video 1', videoId: '9399lg0xmH4' },
        { title: 'Video 2', videoId: '6PYBCbTj-zs' },
        { title: 'Video 3', videoId: '21Cvuo1MWNA?si=B-LjBjtobhL4IrV1' },
        { title: 'Video 4', videoId: '2tbkE-9QNwM?si=MV75_NGlJkFwSK5S'}, 
    ];

    const reelContainer = document.querySelector('.reel-container');
    const youtubeContainer = document.querySelector('.youtube-container');

    // Populate Instagram reels
    instagramReels.forEach(reel => {
        const reelItem = document.createElement('div');
        reelItem.classList.add('reel-item');
        reelItem.innerHTML = `
            <h4>${reel.title}</h4>
            <img src="${reel.thumbnailUrl}" alt="${reel.title}" onclick="window.open('${reel.link}', '_blank')">
        `;
        reelContainer.appendChild(reelItem);
    });

    // Populate YouTube videos
    youtubeVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('youtube-item');
        videoItem.innerHTML = `
            <h4>${video.title}</h4>
            <iframe src="https://www.youtube.com/embed/${video.videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        youtubeContainer.appendChild(videoItem);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        if (response.ok) {
            alert('Message sent successfully! I will get back to you soon...');
            contactForm.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    });
});

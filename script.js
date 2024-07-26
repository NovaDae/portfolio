document.addEventListener('DOMContentLoaded', () => {
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

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });


    // Sample Instagram reel data (replace with your own reel data)
    const instagramReels = [
        { title: 'Reel 1', thumbnailUrl: 'reel-cover1.jpg', link: 'https://www.instagram.com/reel/C35eV4JLsAx/?igsh=anV3YTIxNDFtNHMx' },
        { title: 'Reel 2', thumbnailUrl: 'reel-cover2.jpg', link: 'https://www.instagram.com/reel/C4_LjGOxjGy/?igsh=NW9handiMTFrZTN5' },
        { title: 'Reel 3', thumbnailUrl: 'reel-cover3.jpg', link: 'https://www.instagram.com/reel/C8zykNJRsm7/?igsh=djN0cWdma3V6b3Nj' },
        { title: 'Reel 4', thumbnailUrl: 'reel-cover4.jpg', link: 'https://www.instagram.com/reel/C8FXAi5xug-/?igsh=MW05ZXZtb2s5dDdjNw=='},
        { title: 'Reel 5', thumbnailUrl: 'reel-cover5.jpg', link: 'https://www.instagram.com/tv/CD5fsxNB2EJ/?igsh=aTJuZ3Z4M3YyNjJ4' },
        { title: 'Reel 5', thumbnailUrl: 'reel-cover6.jpg', link: 'https://www.instagram.com/reel/C8zykNJRsm7/?igsh=djN0cWdma3V6b3Nj' }
    ];

    const reelContainer = document.querySelector('.reel-container');

    // Populate Instagram reels
    instagramReels.forEach(reel => {
        const reelItem = document.createElement('div');
        reelItem.classList.add('reel-item');
        reelItem.innerHTML = `
            <h4>${reel.title}</h4>
            <div class="media-wrapper">
                <img src="${reel.thumbnailUrl}" alt="${reel.title}" class="media-thumbnail">
                <div class="play-button"></div>
            </div>
        `;
        reelContainer.appendChild(reelItem);

        // Add click event to open Instagram reel
        const mediaWrapper = reelItem.querySelector('.media-wrapper');
        mediaWrapper.addEventListener('click', () => {
            window.open(reel.link, '_blank');
        });
    });


    // Handle form submission
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');
    const copyMessage = document.getElementById('copy-message');

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            copyMessage.classList.remove('hidden');
            setTimeout(() => {
                copyMessage.classList.add('hidden');
            }, 2000);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    }

    phoneElement.addEventListener('click', () => {
        const phoneNumber = phoneElement.querySelector('span').textContent;
        copyToClipboard(phoneNumber);
    });

    emailElement.addEventListener('click', () => {
        const emailAddress = emailElement.querySelector('span').textContent;
        copyToClipboard(emailAddress);
    });  
    });


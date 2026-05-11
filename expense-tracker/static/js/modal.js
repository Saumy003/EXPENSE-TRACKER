document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with data-modal-target
    const modals = 
document.querySelectorAll('[data-modal-target]');

    // Add click event listeners to each modal target element
    modals.forEach(modalTarget => {
        modalTarget.addEventListener('click', function(event) 
{
            event.preventDefault();
            const targetId = 
modalTarget.getAttribute('data-modal-target');
            const modal = document.getElementById(targetId);
            openModal(modal);
        });
    });

    // Function to open the modal
    function openModal(modal) {
        modal.style.display = 'block';
        playVideo(modal.querySelector('iframe'));
    }

    // Function to close the modal and stop playing video
    const closeModal = () => {
        const modals = 
document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.style.display = 'none';
            stopVideo(modal.querySelector('iframe'));
        });
    };

    // Event listener for clicking outside the modal to close 
it
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal-overlay')) 
{
            closeModal();
        }
    });

    // Function to play video inside the modal
    const playVideo = (video) => {
        const isPlaying = !video.paused;
        if (!isPlaying) {
            video.play();
        }
    };

    // Function to stop playing video
    const stopVideo = (video) => {
        if (video.readyState > 0) {
            video.pause();
            video.currentTime = 0;
        }
    };
});
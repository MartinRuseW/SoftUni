function notify(message) {
  
    const divNotification = document.getElementById('notification');
    divNotification.textContent = message;
    divNotification.style.display = 'block';

    divNotification.addEventListener('click', hideMessage);

    function hideMessage() {
        divNotification.style.display = 'none';
    }
}
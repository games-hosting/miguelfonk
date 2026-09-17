// Listen for the start command from the HTML page
self.addEventListener('message', (event) => {
    if (event.data && event.data.action === 'startLoop') {
        setupNextBackgroundNotification();
    }
});

function setupNextBackgroundNotification() {
    // Generate a random delay between 10 and 60 seconds
    const randomSeconds = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
    const delayInMilliseconds = randomSeconds * 1000;

    // Use a timeout inside the worker
    setTimeout(() => {
        triggerBackgroundNotification();
        
        // Loop again seamlessly in the background
        setupNextBackgroundNotification();
    }, delayInMilliseconds);
}

function triggerBackgroundNotification() {
    const title = "Screenshot taken";
    const options = {
        body: "Copied to clipboard (Sent from background task)",
        icon: "https://placeholder.com",
        tag: "persistent-alert" // Prevents the system from getting flooded with old alerts
    };

    // Service workers use self.registration to show notifications
    self.registration.showNotification(title, options);
}

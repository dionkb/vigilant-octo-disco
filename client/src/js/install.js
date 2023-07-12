const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Stops refreshing data once button is pressed
    window.deferredPrompt = event;

});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true); // Disables button once clicked to stop double-clicks
    butInstall.textContent = 'Successfully installed';
});

window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed', event);
    window.deferredPrompt = null;
});

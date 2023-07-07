const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Stops refreshing data once button is pressed
    butInstall.style.visibility = 'visible'; // Allows the button to be seen

});

butInstall.addEventListener('click', async () => {
    prompt(); // Pops up a prompt to download once button is clicked
    butInstall.setAttribute('disabled', true); // Disables button once clicked to stop double-clicks
    butInstall.textContent = 'Successfully installed';
});

window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed', event);
});

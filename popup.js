
chrome.storage.local.get({ '7PlusAdSkipOn': true }, (data) => {
    let toggle_button = document.getElementById('toggle');
    const adSkipOn =  data['7PlusAdSkipOn'];
    toggle_button.textContent = adSkipOn ? 'Turn Off' : 'Turn On';
});

document.getElementById('toggle').addEventListener('click', (e) => {
    // if clicked while 'turn off', it means its not on rn
    const adSkipOn = (e.target.textContent === 'Turn Off'); 
    chrome.storage.local.set({ '7PlusAdSkipOn': !adSkipOn}, () => {
        e.target.textContent = adSkipOn ? 'Turn On' : 'Turn Off';
        chrome.tabs.reload();
    });
});


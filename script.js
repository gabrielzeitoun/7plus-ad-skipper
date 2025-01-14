const observerOptions = { subtree: true, childList: true };

const observer = new MutationObserver(skipAds);

function startObserver() {
  observer.observe(document, observerOptions);
}

function skipAds() {
  const adTimer = document.querySelector('.adProgressCircleText§2nf00'); // timer for ads - only in DOM when ad is playing
  if (adTimer) {
    console.log('ad detected, skipping...');
    let adElement = document.querySelector('video[title="Advertisement"]');
    const adLength = adElement.duration;
    try {
      adElement.currentTime = adLength; // skipping thru ad by setting currentTime to length of ad
    } catch (err) {
      // error "The provided double value is non-finite" comes up but doesn't affect anything
    }
  }
}

chrome.storage.local.get({ '7PlusAdSkipOn': true }, (data) => {
  const adSkipOn = data['7PlusAdSkipOn'];
  if (adSkipOn) {
    console.log('7Plus ad skipper on, observing for ads...');
    startObserver();
  } else {
    console.log('7Plus ad skipper off, NOT observing for ads...');
  }
});

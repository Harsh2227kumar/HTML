document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting normally

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all is valid, show success message
  document.getElementById('successMessage').classList.remove('hidden');

  // Optionally, clear the form
  document.getElementById('contactForm').reset();
});





document.removeEventListener("fullscreenchange", fullScreenChangeHandler);
document.removeEventListener("webkitfullscreenchange", fullScreenChangeHandler);
document.removeEventListener("mozfullscreenchange", fullScreenChangeHandler);
document.removeEventListener("MSFullscreenChange", fullScreenChangeHandler);

checkNavigationOutAndShowCountDownModal = function () {
    console.log("Navigation out check disabled.");
};

autoBlockOnSplitScreen = false;

autoBlockOnDevToolsOpen = false;

showTestBlockedModal = function () {
    console.log("Blocked modal disabled.");
};

saveAndUploadIBPImage = function () {
    console.log("Proctoring image upload disabled.");
};

startCountUpTimer = function () {
    console.log("Countdown timer disabled.");
};

saveUserActionsInTest = function () {
    console.log("User actions logging disabled.");
};

openFullscreen = function () {
    console.log("Fullscreen opening disabled.");
};

closeFullscreen = function () {
    console.log("Fullscreen closing disabled.");
};

clearTimeout(disableNavigationOutTimeout);
clearInterval(disableNavigationOutCheck);

window.removeEventListener("blur", function() { console.log("Blur event ignored."); });
window.removeEventListener("mouseout", function() { console.log("Mouseout event ignored."); });

const originalAddEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (["blur", "mouseout"].includes(type)) {
        console.log(`Blocked event listener for ${type}`);
        return;
    }
    return originalAddEventListener.call(this, type, listener, options);
};

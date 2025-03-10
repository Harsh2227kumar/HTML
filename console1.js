(function() {
    console.log("%c[Bypass Started] Attempting to disable restrictions...", "color: blue; font-weight: bold;");
    const keys = Sw;

    // Remove Fullscreen Restrictions
    document.removeEventListener("fullscreenchange", fullScreenChangeHandler);
    document.removeEventListener("webkitfullscreenchange", fullScreenChangeHandler);
    document.removeEventListener("mozfullscreenchange", fullScreenChangeHandler);
    document.removeEventListener("MSFullscreenChange", fullScreenChangeHandler);

    // Disable Navigation and Event Restrictions
    clearTimeout(disableNavigationOutTimeout);
    clearInterval(disableNavigationOutCheck);
    disableNavigationOutCheck = true;

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

    // Enable Right-Click, Text Selection, and Clipboard
    document.oncontextmenu = null;
    document.onselectstart = null;
    document.onmousedown = null;
    document.onmouseup = null;
    document.body.oncopy = null;
    document.body.oncut = null;
    document.body.onpaste = null;
    
    let styles = document.createElement('style');
    styles.innerHTML = `* { user-select: auto !important; }`;
    document.head.appendChild(styles);

    document.addEventListener("copy", function(event) {
        event.stopPropagation();
    }, true);

    // Disable Proctoring and Test Restrictions
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

    // Final Status Messages
    console.log("%c[After] Right-Click: " + (document.oncontextmenu === null ? "Enabled" : "Disabled"), "color: green;");
    console.log("%c[After] Text Selection: " + (document.onselectstart === null ? "Enabled" : "Disabled"), "color: green;");
    console.log("%c[After] Copy-Paste: " + (document.body.oncopy === null ? "Enabled" : "Disabled"), "color: green;");
    console.log("%c[Bypass Completed] If you see green messages, the restrictions have been removed!", "color: blue; font-weight: bold;");
})();

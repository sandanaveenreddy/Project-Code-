// scripts.js

// Action for 'Report Anonymously'
function reportAnonymously() {
    alert("Redirecting to anonymous report page...");
    // Replace the URL below with the actual page link
    window.location.href = "anonymous-report.html";
}

// Action for 'Register & Track'
function registerAndTrack() {
    alert("Redirecting to register and track page...");
    // Replace the URL below with the actual page link
    window.location.href = "register-track.html";
}

// Action for 'Register a Complaint'
function registerComplaint(type) {
    if (type === "financial") {
        alert("Redirecting to financial fraud complaint page...");
        // Replace the URL below with the actual page link
        window.location.href = "financial-fraud.html";
    } else if (type === "cyber") {
        alert("Redirecting to cyber crime complaint page...");
        // Replace the URL below with the actual page link
        window.location.href = "cyber-crime.html";
    }
}

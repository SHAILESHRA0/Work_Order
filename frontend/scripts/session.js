// Session timeout management
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
let sessionTimer;

function resetSessionTimer() {
    clearTimeout(sessionTimer);
    sessionTimer = setTimeout(logout, SESSION_TIMEOUT);
}

function logout() {
    window.location.href = '../backend/logout.php';
}

// Reset timer on user activity
document.addEventListener('mousemove', resetSessionTimer);
document.addEventListener('keypress', resetSessionTimer);

// Initial session timer start
resetSessionTimer();

// Check session status periodically
setInterval(async () => {
    try {
        const response = await fetch('../backend/check_session.php');
        const data = await response.json();
        if (!data.valid) {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Session check failed:', error);
    }
}, 60000); // Check every minute

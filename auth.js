const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// DOM elements
const loginButton = document.getElementById('login-button');
const loginGoogleButton = document.getElementById('login-google-button');
const loginError = document.getElementById('login-error');

// Log In function
loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            // User logged in successfully
            window.location.href = 'home.html'; // Redirect to your home page or dashboard
        })
        .catch(error => {
            // Handle Errors here
            const errorMessage = formatErrorMessage(error.code);
            loginError.innerText = errorMessage;
            loginError.style.display = 'block';
        });
});

// Google Log-In function
loginGoogleButton.addEventListener('click', () => {
    firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            // User logged in with Google successfully
            window.location.href = 'home.html'; // Redirect to your home page or dashboard
        })
        .catch(error => {
            // Handle Errors here
            const errorMessage = formatErrorMessage(error.code);
            loginError.innerText = errorMessage;
            loginError.style.display = 'block';
        });
});

// Function to format error messages based on error code
function formatErrorMessage(errorCode) {
    
            return 'An error occurred. Please try again.';
    
}

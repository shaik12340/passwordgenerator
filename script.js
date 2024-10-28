// JavaScript Code (script.js)
function generatePassword() {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    // Get user preferences and length
    const passwordLength = document.getElementById("length").value;
    const allCharacters = lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    document.getElementById("password").value = password;
}
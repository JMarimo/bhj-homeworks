const text = document.querySelector('#editor');

function saveTextFromLocalStorage() {
    localStorage.setItem('text', text.value);
    };

function restoreTextFromLocalStorage () {
    const storedText = localStorage.getIten('text');
    document.querySelector('#editor').value = storedText;
};

document.addEventListener('keyup', saveTextFromLocalStorage);

restoreTextFromLocalStorage();
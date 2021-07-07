const {hash} = window.location;
const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#message-input');
    const messageBox = document.querySelector('#message');
    const linkBox = document.querySelector('#link');
    linkBox.classList.remove('hide');
    messageBox.classList.add('hide');
    const baseMessage = btoa(input.value);
    const resInput = document.querySelector('#link-input');
    resInput.value = `${window.location}#${baseMessage}`;
})

document.querySelector('#copyBtn').addEventListener('click', (event) => {
    event.preventDefault();
    const resInput = document.querySelector('#link-input');
    resInput.focus();
    resInput.select();
    try {
        const copyCommand = document.execCommand('copy');
        const msg = copyCommand ? 'Copy to clipboard' : 'Failed to copy';
    } catch(error) {
        console.log(error);
    }
})


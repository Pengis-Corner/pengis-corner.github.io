const checkbox = document.getElementById('checkbox');
const body = document.body;

checkbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    checkbox.checked = true; 
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Text copied to clipboard: " + text);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}
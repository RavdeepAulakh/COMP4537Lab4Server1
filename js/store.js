document.getElementById('storeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('word').value.trim();
    const definition = document.getElementById('definition').value.trim();
    const validInputRegex = /^[^\d\s]+$/;
    if (word === '' || definition === '' || !validInputRegex.test(word) || !validInputRegex.test(definition)) {
      document.getElementById('feedback').textContent = valid;
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://comp-4537-lab4-server2-tau.vercel.app/api/definitions');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const message = response.message;
        const entry = response.entry;
        const words = response.words;
        document.getElementById('feedback').textContent = `${message}\n\n${entry.word} : ${entry.definition} ${words}`;
      } else {
        const response = JSON.parse(xhr.responseText);
        document.getElementById('feedback').textContent = Error + response.error;
      }
    };
    xhr.send(JSON.stringify({ word, definition }));
  });
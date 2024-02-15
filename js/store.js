document.getElementById('storeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('word').value.trim();
    const definition = document.getElementById('definition').value.trim();
    if (word === '' || definition === '') {
      document.getElementById('feedback').textContent = EnterMessage;
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://comp-4537-lab4-server2-tau.vercel.app/api/definitions');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        document.getElementById('feedback').textContent = xhr.responseText;
      } else {
        document.getElementById('feedback').textContent = Error + xhr.statusText;
      }
    };
    xhr.send(JSON.stringify({ word, definition }));
  });
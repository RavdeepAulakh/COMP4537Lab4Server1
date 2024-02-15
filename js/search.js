document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value.trim();
    const validInputRegex = /^[^\d\s]+$/;
    if (searchTerm === '' || !validInputRegex.test(searchTerm)) {
      document.getElementById('response').textContent = valid;
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://comp-4537-lab4-server2-tau.vercel.app/api/definitions?word=${encodeURIComponent(searchTerm)}`);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById('response').textContent = response.message;
      } else {
        const response = JSON.parse(xhr.responseText);
        document.getElementById('response').textContent = Error + response.error;
      }
    };
    xhr.send();
  });
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value.trim();
    if (searchTerm === '') {
      document.getElementById('response').textContent = SearchTerm;
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://comp-4537-lab4-server2-tau.vercel.app/api/definitions?word=${encodeURIComponent(searchTerm)}`);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById('response').textContent = response.message;
      } else {
        document.getElementById('response').textContent = Error + xhr.statusText;
      }
    };
    xhr.send();
  });
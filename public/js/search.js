const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchForm = document.getElementById('searchForm');

let debounceTimer;

if (searchInput && searchResults && searchForm) {
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = searchInput.value.trim();

    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    debounceTimer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          if (data.results.length === 0) {
            searchResults.innerHTML = `<div>No results found</div>`;
            return;
          }

          searchResults.innerHTML = data.results.map(item => `
            <div><a href="/listings/${item._id}">${item.title}</a></div>
          `).join('');
        })
        .catch(err => console.error('Search error:', err));
    }, 300);
  });

  searchForm.addEventListener('submit', (e) => {
    const query = searchInput.value.trim();
    if (!query) return;
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
    e.preventDefault();
  });

  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target)) {
      searchResults.innerHTML = '';
    }
  });
}


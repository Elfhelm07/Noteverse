// Fetch OPDS catalog
fetch('http://cops-demo.slucas.fr/feed.php')
  .then(response => response.text())
  .then(xmlString => {
    // Parse OPDS XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    // Extract publication data
    const publications = xmlDoc.querySelectorAll('entry');
    
    // Generate HTML elements
    const catalogContainer = document.getElementById('catalog-container');
    publications.forEach(publication => {
      const title = publication.querySelector('title').textContent;
      const author = publication.querySelector('author > name').textContent;
      const thumbnail = publication.querySelector('link[type="image/jpeg"]').getAttribute('href');
      const cardHTML = `
        <div class="card">
          <img src="${thumbnail}" alt="Thumbnail">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">By ${author}</p>
          </div>
        </div>
      `;
      catalogContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
  })
  .catch(error => console.error('Error fetching or parsing OPDS catalog:', error));

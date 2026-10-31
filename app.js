(function(){
  const container=document.querySelector('#book-list');
  if(!container)return;
  const category=document.body.dataset.category;
  const search=document.querySelector('#search-books');
  const count=document.querySelector('#book-count');
  const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    const q=(search?.value||'').trim().toLocaleLowerCase('es');
    const items=LIBROS.filter(b=>b.categoria===category&&[b.titulo,b.autores,b.descripcion].join(' ').toLocaleLowerCase('es').includes(q));
    count.textContent=`${items.length} ${items.length===1?'libro':'libros'}`;
    if(!items.length){container.innerHTML='<div class="empty">'+(q?'No se encontraron libros con esa búsqueda.':'Todavía no se han agregado libros a esta categoría.')+'</div>';return;}
    container.innerHTML=items.map(b=>{
      const cover=b.portada?`<img class="book-cover" src="${escapeHTML(b.portada)}" alt="Portada de ${escapeHTML(b.titulo)}" loading="lazy">`:'<div class="book-placeholder" aria-label="Portada pendiente">LIBRO<br>ACADÉMICO</div>';
      const pdf=b.pdf?`<a class="button" href="${escapeHTML(b.pdf)}" target="_blank" rel="noopener noreferrer">Leer libro (PDF)</a>`:'<p class="notice">PDF pendiente de publicación</p>';
      return `<article class="book-card">${cover}<div><h2>${escapeHTML(b.titulo)}</h2><p class="author">${escapeHTML(b.autores||'Autor por confirmar')}</p><p>${escapeHTML(b.descripcion||'')}</p>${pdf}</div></article>`;
    }).join('');
  }
  search?.addEventListener('input',render);
  render();
})();

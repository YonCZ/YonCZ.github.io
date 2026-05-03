/**
 * Helper to generate the image source path based on project ID
 */
function getImageSrc(projectId) {
  const num = String(projectId).padStart(2, '0');
  return `img/projects/${num}.jpg`;
}

/**
 * Creates HTML template for a single project card
 */
function createProjectCard(project) {
  const imageSrc = getImageSrc(project.id);
  const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
  const displayNum = 100 - project.id;

  return `
    <article class="project-card" role="listitem" tabindex="0"
      data-project-id="${project.id}">
      <div class="project-preview" aria-hidden="true">
        <img src="${imageSrc}" alt="${project.title}" />
        <span>${displayNum}</span>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3> <!-- Třída project-title odstraněna -->
        <div class="project-tags">${tagsHTML}</div>
        <span class="project-year">${project.year}</span>
        <p class="project-desc">${project.description}</p>
      </div>
    </article>
  `;
}

/**
 * Renders all projects from the data array into the grid
 */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(createProjectCard).join('');

  document.querySelectorAll('.project-preview').forEach(preview => {
    const img = preview.querySelector('img');
    if (!img) return;

    img.addEventListener('load', () => preview.classList.add('image-loaded'));
    img.addEventListener('error', () => preview.classList.remove('image-loaded'));
    if (img.complete) preview.classList.add('image-loaded');
  });

  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.projectId)));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(parseInt(card.dataset.projectId));
      }
    });
  });
}

/**
 * Populates and displays the modal window with project details
 */
function openModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  if (!project || !modal) return;

  const imageSrc = getImageSrc(project.id);
  const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
  const downloadHTML = project.downloadFile
    ? `<a href="${project.downloadFile}" class="btn-download" download>Download ${project.download}</a>`
    : '';

  modalBody.innerHTML = `
    <img class="modal-banner" src="${imageSrc}" />
    <div class="modal-content">
        <h2 id="modal-title">${project.title}</h2> <!-- Třída modal-title odstraněna -->
        <div class="modal-meta">
             <div>${tagsHTML}</div>
             <span>Year: ${project.year}</span>
        </div>
        <div class="modal-divider"></div>
        <p class="modal-desc-label">About the project</p>
        <p class="modal-desc-text">${project.details}</p>
        ${downloadHTML}
    </div>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

/**
 * Closes the modal window and restores scrolling
 */
function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

document.addEventListener('DOMContentLoaded', renderProjects);
document.getElementById('modal-close')?.addEventListener('click', closeModal);
document.getElementById('modal-backdrop')?.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
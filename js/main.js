document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderEducation();
  renderProjects();
  highlightNav();
});

// ===== EXPERIENCE =====

function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCES.map(exp => {
    const period = exp.end === null
      ? `${escHtml(exp.start)} –<br>Atualmente`
      : `${escHtml(exp.start)} –<br>${escHtml(exp.end)}`;

    const currentBadge = exp.end === null
      ? `<span class="timeline-current">● Atual</span>`
      : '';

    const bullets = exp.description.map(d => `<li>${escHtml(d)}</li>`).join('');
    const tags = exp.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('');

    return `
      <div class="timeline-item">
        <div class="timeline-meta">
          <span class="timeline-date">${period}</span>
          ${currentBadge}
        </div>
        <div class="timeline-body">
          <p class="timeline-role">${escHtml(exp.role)}</p>
          <p class="timeline-company">${escHtml(exp.company)}</p>
          <div class="timeline-desc"><ul>${bullets}</ul></div>
          <div class="tag-list">${tags}</div>
        </div>
      </div>`;
  }).join('');
}

// ===== EDUCATION =====

function renderEducation() {
  const grid = document.getElementById('education-grid');
  if (!grid) return;

  grid.innerHTML = EDUCATION.map(edu => {
    const period = edu.period
      ? `<p class="edu-period">${escHtml(edu.period)}</p>`
      : '';

    return `
      <div class="edu-card">
        <p class="edu-degree">${escHtml(edu.degree)}</p>
        <p class="edu-institution">${escHtml(edu.institution)}</p>
        <p class="edu-type">${escHtml(edu.type)}</p>
        ${period}
      </div>`;
  }).join('');
}

// ===== PROJECTS =====

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (!PROJECTS || PROJECTS.length === 0) {
    grid.innerHTML = `
      <div class="projects-empty">
        Em breve — projetos serão adicionados aqui em breve.
      </div>`;
    return;
  }

  grid.innerHTML = PROJECTS.map(project => {
    const isExternal = project.linkType === 'external';
    const externalAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
    const linkLabel = project.linkLabel || 'Ver projeto';
    const arrowIcon = isExternal ? '↗' : '→';

    const cover = project.cover
      ? `<img class="project-cover" src="${escHtml(project.cover)}" alt="${escHtml(project.coverAlt || project.title)}" loading="lazy">`
      : '';

    return `
      <article class="project-card">
        ${cover}
        <div class="project-card-content">
          <div class="project-card-header">
            <span class="project-icon">${project.icon || '💻'}</span>
            <span class="project-link-icon">${isExternal ? '↗' : '⬡'}</span>
          </div>
          <h3 class="project-title">${escHtml(project.title)}</h3>
          <p class="project-summary">${escHtml(project.summary)}</p>
          <div class="project-footer">
            <div class="project-tags">
              ${(project.tags || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
            </div>
            <a class="project-btn" href="${escHtml(project.link)}" ${externalAttr}>
              ${escHtml(linkLabel)} <span>${arrowIcon}</span>
            </a>
          </div>
        </div>
      </article>`;
  }).join('');
}

// ===== UTILS =====

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--text)'
            : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

(function () {
  const LANG_COLORS = {
    JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5',
    Java: '#b07219', 'C++': '#f34b7d', C: '#555555', 'C#': '#178600',
    PHP: '#4F5D95', Ruby: '#701516', Go: '#00ADD8', Rust: '#dea584',
    Swift: '#F05138', Kotlin: '#A97BFF', HTML: '#e34c26', CSS: '#563d7c',
    Shell: '#89e051', Vue: '#41b883', Dart: '#00B4AB'
  };
  const FALLBACK_COLOR = '#8b93a1';

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function renderStatus(container, message) {
    container.innerHTML = `<div class="gh-card"><div class="gh-card__status">${escapeHtml(message)}</div></div>`;
  }

  async function renderGitHubCard(username, containerId) {
    const container = document.getElementById(containerId);
    renderStatus(container, `$ fetching @${username}...`);

    let profile, repos;
    try {
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      if (profileRes.status === 404) return renderStatus(container, `user "${username}" not found`);
      if (!profileRes.ok) return renderStatus(container, `GitHub API error (${profileRes.status}) — likely rate limited, try again shortly`);
      profile = await profileRes.json();

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`);
      repos = reposRes.ok ? await reposRes.json() : [];
    } catch (err) {
      return renderStatus(container, 'network error — could not reach GitHub');
    }

    const ownRepos = repos.filter(r => !r.fork);
    const totalStars = ownRepos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const langCounts = {};
    ownRepos.forEach(r => {
      if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    });
    const totalLangCount = Object.values(langCounts).reduce((a, b) => a + b, 0);
    const topLangs = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([name, count]) => ({
        name,
        pct: totalLangCount ? Math.round((count / totalLangCount) * 100) : 0,
        color: LANG_COLORS[name] || FALLBACK_COLOR
      }));

    const langBar = topLangs.map(l =>
      `<div style="width:${l.pct}%; background:${l.color};"></div>`
    ).join('');

    const langLegend = topLangs.map(l => `
      <div class="gh-card__lang-item">
        <span class="gh-card__lang-swatch" style="background:${l.color}"></span>
        ${escapeHtml(l.name)} · ${l.pct}%
      </div>
    `).join('');

    container.innerHTML = `
      <div class="gh-card">
        <div class="gh-card__titlebar">
          <span class="gh-card__dot gh-card__dot--red"></span>
          <span class="gh-card__dot gh-card__dot--amber"></span>
          <span class="gh-card__dot gh-card__dot--green"></span>
          <span class="gh-card__path">~/${escapeHtml(username)}/profile</span>
        </div>
        <div class="gh-card__body">
          <div class="gh-card__profile">
            <img class="gh-card__avatar" src="${profile.avatar_url}" alt="${escapeHtml(profile.login)}">
            <div>
              <p class="gh-card__name">${escapeHtml(profile.name || profile.login)}</p>
              <p class="gh-card__handle">@${escapeHtml(profile.login)}</p>
            </div>
          </div>
          ${profile.bio ? `<p class="gh-card__bio">${escapeHtml(profile.bio)}</p>` : ''}

          <div class="gh-card__stats">
            <div class="gh-card__stat">
              <div class="gh-card__stat-value">${profile.public_repos}</div>
              <div class="gh-card__stat-label">Repositories</div>
            </div>
            <div class="gh-card__stat">
              <div class="gh-card__stat-value">${totalStars}</div>
              <div class="gh-card__stat-label">Stars</div>
            </div>
            <div class="gh-card__stat">
              <div class="gh-card__stat-value">${profile.followers}</div>
              <div class="gh-card__stat-label">Followers</div>
            </div>
            <div class="gh-card__stat">
              <div class="gh-card__stat-value">${profile.following}</div>
              <div class="gh-card__stat-label">Following</div>
            </div>
          </div>

          ${topLangs.length ? `
            <div class="gh-card__lang-bar">${langBar}</div>
            <div class="gh-card__lang-legend">${langLegend}</div>
          ` : ''}

          <a class="gh-card__link" href="${profile.html_url}" target="_blank" rel="noopener">
            view full profile on github
          </a>
        </div>
      </div>
    `;
  }

  // ---- CHANGE THIS ----
  const USERNAME = 'Omkekan';
  // ----------------------

  renderGitHubCard(USERNAME, 'github-card');
})();

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

(function () {
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function renderStatus(container, message) {
    container.innerHTML = `<div class="yt-card"><div class="yt-card__status">${escapeHtml(message)}</div></div>`;
  }

  async function renderYouTubeCard(channelId, containerId) {
    const container = document.getElementById(containerId);
    renderStatus(container, '$ fetching latest uploads...');

    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    let data;
    try {
      const res = await fetch(apiUrl);
      data = await res.json();
      if (data.status !== 'ok') return renderStatus(container, 'channel not found — double check the channel ID');
    } catch (err) {
      return renderStatus(container, 'network error — could not reach YouTube');
    }

    const videos = (data.items || []).slice(0, 3).map(item => `
      <a class="yt-card__video" href="${item.link}" target="_blank" rel="noopener">
        <img class="yt-card__thumb" src="${item.thumbnail}" alt="${escapeHtml(item.title)}" onerror="this.style.visibility='hidden'">
        <div>
          <p class="yt-card__video-title">${escapeHtml(item.title)}</p>
          <span class="yt-card__video-date">${formatDate(item.pubDate)}</span>
        </div>
      </a>
    `).join('');

    container.innerHTML = `
      <div class="yt-card">
        <div class="yt-card__titlebar">
          <span class="yt-card__dot yt-card__dot--red"></span>
          <span class="yt-card__dot yt-card__dot--amber"></span>
          <span class="yt-card__dot yt-card__dot--green"></span>
          <span class="yt-card__path">~/youtube/channel</span>
        </div>
        <div class="yt-card__body">
          <div class="yt-card__header">
            <div class="yt-card__logo">&#9654;</div>
            <div>
              <p class="yt-card__title">${escapeHtml(data.feed.title || 'YouTube Channel')}</p>
              <p class="yt-card__subtitle">Latest uploads</p>
            </div>
          </div>
          <div class="yt-card__videos">${videos || '<div class="yt-card__status">no videos found</div>'}</div>
          <a class="yt-card__link" href="https://www.youtube.com/channel/${channelId}" target="_blank" rel="noopener">
            subscribe on youtube
          </a>
        </div>
      </div>
    `;
  }

  // ---- CHANGE THIS ----
  const YOUTUBE_CHANNEL_ID = 'UCfkuZ9_zDbchAktew_QkDdA';
  // ----------------------

  renderYouTubeCard(YOUTUBE_CHANNEL_ID, 'youtube-card');
})();

(function () {
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function renderStatus(container, message) {
    container.innerHTML = `<div class="md-card"><div class="md-card__status">${escapeHtml(message)}</div></div>`;
  }

  async function renderMediumCard(username, containerId) {
    const container = document.getElementById(containerId);
    renderStatus(container, `$ fetching @${username}...`);

    const feedUrl = `https://medium.com/feed/@${username}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

    let data;
    try {
      const res = await fetch(apiUrl);
      data = await res.json();
      if (data.status !== 'ok') return renderStatus(container, `couldn't load @${username}'s Medium feed`);
    } catch (err) {
      return renderStatus(container, 'network error — could not reach Medium');
    }

    const posts = (data.items || []).slice(0, 4).map(item => `
      <a class="md-card__post" href="${item.link}" target="_blank" rel="noopener">
        <p class="md-card__post-title">${escapeHtml(item.title)}</p>
        <span class="md-card__post-date">${formatDate(item.pubDate)}</span>
      </a>
    `).join('');

    container.innerHTML = `
      <div class="md-card">
        <div class="md-card__titlebar">
          <span class="md-card__dot md-card__dot--red"></span>
          <span class="md-card__dot md-card__dot--amber"></span>
          <span class="md-card__dot md-card__dot--green"></span>
          <span class="md-card__path">~/${escapeHtml(username)}/medium</span>
        </div>
        <div class="md-card__body">
          <div class="md-card__header">
            <div class="md-card__logo">M</div>
            <div>
              <p class="md-card__title">${escapeHtml(data.feed.title || username)}</p>
              <p class="md-card__subtitle">Latest articles</p>
            </div>
          </div>
          <div class="md-card__posts">${posts || '<div class="md-card__status">no posts found</div>'}</div>
          <a class="md-card__link" href="https://medium.com/@${username}" target="_blank" rel="noopener">
            read more on medium
          </a>
        </div>
      </div>
    `;
  }

  // ---- CHANGE THIS ----
  const MEDIUM_USERNAME = 'omkekan27'; // no @ symbol
  // ----------------------

  renderMediumCard(MEDIUM_USERNAME, 'medium-card');
})();

(function () {
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function renderLinkedInCard(data, containerId) {
    const container = document.getElementById(containerId);
    const facts = data.facts.map(f => `
      <div class="li-card__fact">
        <span class="li-card__fact-label">${escapeHtml(f.label)}</span>
        <span class="li-card__fact-value">${escapeHtml(f.value)}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="li-card">
        <div class="li-card__titlebar">
          <span class="li-card__dot li-card__dot--red"></span>
          <span class="li-card__dot li-card__dot--amber"></span>
          <span class="li-card__dot li-card__dot--green"></span>
          <span class="li-card__path">~/linkedin/profile</span>
        </div>
        <div class="li-card__body">
          <div class="li-card__profile">
            <img class="li-card__avatar" src="${data.avatar}" alt="${escapeHtml(data.name)}">
            <div>
              <p class="li-card__name">${escapeHtml(data.name)}</p>
              <p class="li-card__headline">${escapeHtml(data.headline)}</p>
            </div>
          </div>
          <p class="li-card__bio">${escapeHtml(data.bio)}</p>
          <div class="li-card__facts">${facts}</div>
          <a class="li-card__link" href="${data.profileUrl}" target="_blank" rel="noopener">
            connect on linkedin
          </a>
        </div>
      </div>
    `;
  }

  // ---- EDIT THIS: LinkedIn has no public API, so fill these in by hand ----
  const LINKEDIN_DATA = {
    name: 'Om Kekan',
    headline: 'AI/ML Engineer · Generative AI & LLM Systems',
    avatar: 'Assets/Profile Picture.jpeg',
    bio: 'Building evaluation-driven ML systems — from RAG pipelines to production backend services. Open to full-time AI/ML roles.',
    facts: [
      { label: 'Location', value: 'Chhatrapati Sambhajinagar, IN' },
      { label: 'Focus', value: 'LLMs · RAG · GenAI' },
      { label: 'Status', value: 'Open to work' }
    ],
    profileUrl: 'https://linkedin.com/in/omkekan'
  };
  // ---------------------------------------------------------------------

  renderLinkedInCard(LINKEDIN_DATA, 'linkedin-card');
})();


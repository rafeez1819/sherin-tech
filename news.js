const locations = {
  london: {
    name: 'London',
    summary: 'Global markets, policy updates, and city-level developments shaping the day.',
    stories: [
      {
        category: 'Business',
        title: 'London markets steady as investors eye inflation signals',
        snippet: 'The UK capital remains focused on rate expectations and energy costs as traders reposition ahead of the next policy update.'
      },
      {
        category: 'World',
        title: 'City leaders expand clean-transport funding across the capital',
        snippet: 'New transit and cycling investments aim to reduce congestion while improving air quality across major boroughs.'
      },
      {
        category: 'Culture',
        title: 'West End venues report strong weekend attendance after festival season',
        snippet: 'Theater and music districts are seeing renewed demand as local audiences return to live events.'
      }
    ]
  },
  'new-york': {
    name: 'New York',
    summary: 'A fast-moving mix of finance, climate policy, and city infrastructure updates.',
    stories: [
      {
        category: 'Finance',
        title: 'Wall Street opens mixed as traders await fresh data',
        snippet: 'Banking stocks and industrial names are trading cautiously while analysts monitor the latest inflation trend.'
      },
      {
        category: 'Policy',
        title: 'City officials outline revised flood-prevention plan',
        snippet: 'A new resilience framework is designed to mitigate storm risks and improve waterfront infrastructure.'
      },
      {
        category: 'City',
        title: 'Major transit schedule changes expand commuter options',
        snippet: 'The MTA is adjusting service patterns in key corridors to reduce delays and better match ridership demand.'
      }
    ]
  },
  dubai: {
    name: 'Dubai',
    summary: 'Business, innovation, and regional investment momentum continue to drive headlines.',
    stories: [
      {
        category: 'Economy',
        title: 'Regional trade corridors expand as logistics investment accelerates',
        snippet: 'Port and warehousing upgrades support growing cross-border demand across the Gulf and South Asia.'
      },
      {
        category: 'Tech',
        title: 'AI and startup clusters attract fresh capital across the region',
        snippet: 'New accelerator programs are helping founders test products and scale faster in high-growth sectors.'
      },
      {
        category: 'Urban',
        title: 'Smart-city partnerships expand digital mobility services',
        snippet: 'City officials are moving ahead with connected transport systems and digital public services.'
      }
    ]
  },
  tokyo: {
    name: 'Tokyo',
    summary: 'A blend of innovation, mobility updates, and economic resilience across Asia.',
    stories: [
      {
        category: 'Innovation',
        title: 'Japanese chip and robotics firms expand production capacity',
        snippet: 'Manufacturers are investing in advanced automation to support growing demand in global supply chains.'
      },
      {
        category: 'Transport',
        title: 'Transit agencies launch new commuter-friendly measures',
        snippet: 'Improvements in rail reliability and digital ticketing aim to reduce friction for daily travelers.'
      },
      {
        category: 'Culture',
        title: 'City arts districts see a strong wave of local and international visitors',
        snippet: 'Seasonal programming and creative events are strengthening the capital’s cultural economy.'
      }
    ]
  },
  sydney: {
    name: 'Sydney',
    summary: 'Climate, housing, and coastal resilience continue to define the local agenda.',
    stories: [
      {
        category: 'Climate',
        title: 'Metro planners scale up coastal resilience budget',
        snippet: 'Authorities are preparing for extreme weather by expanding drainage, shoreline protection, and emergency planning.'
      },
      {
        category: 'Housing',
        title: 'Developers push new density plans near transport hubs',
        snippet: 'Policy changes are encouraging mixed-use projects designed to ease pressure on urban housing demand.'
      },
      {
        category: 'Health',
        title: 'Public clinics expand digital services to ease appointment pressure',
        snippet: 'Fast-track digital assessment pathways are reducing wait times and improving access for residents.'
      }
    ]
  },
  lagos: {
    name: 'Lagos',
    summary: 'Infrastructure, entrepreneurial energy, and urban innovation drive the local conversation.',
    stories: [
      {
        category: 'Infrastructure',
        title: 'New mobility corridors aim to reduce urban congestion',
        snippet: 'Public-private partnerships are accelerating road and transit projects across major city corridors.'
      },
      {
        category: 'Business',
        title: 'Startups attract new funding as digital adoption accelerates',
        snippet: 'Growth in fintech and commerce services is helping new ventures scale into more formal sectors.'
      },
      {
        category: 'Energy',
        title: 'Power reliability projects focus on industrial and residential stability',
        snippet: 'Local utilities are expanding capacity and maintenance schedules to improve service continuity.'
      }
    ]
  },
  brazil: {
    name: 'Brazil',
    summary: 'A broad mix of agribusiness, energy, and public spending remains at the center of attention.',
    stories: [
      {
        category: 'Agriculture',
        title: 'Farm output remains resilient despite variable rainfall patterns',
        snippet: 'Producers are adapting to uneven weather with stronger logistics and crop planning strategies.'
      },
      {
        category: 'Energy',
        title: 'New investment targets cleaner power and grid reliability',
        snippet: 'Public and private capital are expanding renewable generation while upgrading transmission capacity.'
      },
      {
        category: 'City',
        title: 'Urban mobility programs expand bus and rail access in major hubs',
        snippet: 'Transit officials are prioritizing faster commute times and safer access across expanding metro regions.'
      }
    ]
  },
  delhi: {
    name: 'Delhi',
    summary: 'Urban planning, air quality, and public services shape much of the current debate.',
    stories: [
      {
        category: 'Environment',
        title: 'Officials expand pollution-control measures during high-risk periods',
        snippet: 'Air-quality action plans are being widened to better cover transport, dust, and industrial sources.'
      },
      {
        category: 'Public Services',
        title: 'Healthcare expansions improve access in underserved districts',
        snippet: 'New clinics and shift models aim to ease pressure on overcrowded facilities and strengthen care delivery.'
      },
      {
        category: 'Transport',
        title: 'Priority routes and digital transit tools improve commute planning',
        snippet: 'Digital scheduling and route optimization are helping commuters navigate busy city corridors faster.'
      }
    ]
  }
};

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationName = document.getElementById('locationName');
const locationSummary = document.getElementById('locationSummary');
const newsList = document.getElementById('newsList');
const globe = document.getElementById('globe');

function renderStories(locationKey) {
  const data = locations[locationKey];
  if (!data) return;

  locationName.textContent = data.name;
  locationSummary.textContent = data.summary;

  newsList.innerHTML = data.stories
    .map(
      (story) => `
        <li class="news-item">
          <span class="category">${story.category}</span>
          <h3>${story.title}</h3>
          <p>${story.snippet}</p>
        </li>
      `
    )
    .join('');

  locationInput.value = data.name;
}

function resolveLocation(value) {
  const key = value.trim().toLowerCase();
  const match = Object.entries(locations).find(([id, city]) => {
    return id === key || city.name.toLowerCase() === key || city.name.toLowerCase().includes(key);
  });

  if (match) {
    renderStories(match[0]);
    return;
  }

  const fallback = Object.keys(locations)[0];
  renderStories(fallback);
}

searchButton.addEventListener('click', () => resolveLocation(locationInput.value));
locationInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    resolveLocation(locationInput.value);
  }
});

document.querySelectorAll('.location-dot').forEach((dot) => {
  dot.addEventListener('click', () => {
    const key = dot.dataset.location;
    renderStories(key);
  });
});

globe.addEventListener('click', (event) => {
  const rect = globe.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const distance = Math.hypot(clickX - centerX, clickY - centerY);

  if (distance > rect.width * 0.46) return;

  const candidates = Object.entries(locations);
  let best = candidates[0];
  let bestDistance = Number.POSITIVE_INFINITY;

  candidates.forEach(([id, loc]) => {
    const dot = document.querySelector(`.location-dot[data-location="${id}"]`);
    if (!dot) return;

    const x = Number.parseFloat(dot.style.getPropertyValue('--x')) / 100 * rect.width;
    const y = Number.parseFloat(dot.style.getPropertyValue('--y')) / 100 * rect.height;
    const d = Math.hypot(clickX - x, clickY - y);
    if (d < bestDistance) {
      bestDistance = d;
      best = [id, loc];
    }
  });

  renderStories(best[0]);
});

renderStories('london');

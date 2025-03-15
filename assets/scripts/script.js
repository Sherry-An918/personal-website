document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

  initializeVisitorCount();
});

async function fetchVisitorCount() {
  try {
    const response = await fetch('https://api.nisirui.com/visitor-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      throw new Error('Failed to fetch visitor count');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return null;
  }
}

function updateVisitorCount(visitorCount) {
  const visitorCountElement = document.getElementById('visitor-count');
  visitorCountElement.textContent = visitorCount;
}

async function initializeVisitorCount() {
  const data = await fetchVisitorCount();
  if (data) {
    updateVisitorCount(data.visitorCount);
  } else {
    document.getElementById('visitor-count').textContent = "Error loading count";
  }
}

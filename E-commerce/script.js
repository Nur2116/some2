const products = [
  {
    name: 'Velora Silk Scarf',
    price: '$140',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight silk with hand-stitched edging and a radiant sheen.',
    badge: 'Bestseller'
  },
  {
    name: 'Marble Accent Lamp',
    price: '$260',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    description: 'A sculptural piece that adds warmth and glow to any interior.',
    badge: 'New Arrival'
  },
  {
    name: 'Studio Leather Journal',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    description: 'Premium leather-bound journal for elegant planning and reflection.',
    badge: 'Limited'
  },
  {
    name: 'Solstice Earrings',
    price: '$175',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    description: 'Polished gold tones finished with a luminous crystal setting.',
    badge: 'Editor’s Pick'
  },
  {
    name: 'Sculpted Velvet Chair',
    price: '$690',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Plush comfort and tailored form designed to stand out.',
    badge: 'Signature'
  },
  {
    name: 'Maison Candle',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80',
    description: 'A refined candle inspired by citrus, cedarwood, and sunset air.',
    badge: 'Giftable'
  }
];

const productGrid = document.getElementById('productGrid');
const toast = document.getElementById('toast');
const year = document.getElementById('year');

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm product-card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}" />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <p class="small text-uppercase text-muted mb-1">${product.badge}</p>
                  <h5 class="card-title">${product.name}</h5>
                </div>
                <span class="fw-bold">${product.price}</span>
              </div>
              <p class="card-text text-muted mt-3">${product.description}</p>
              <button class="btn btn-sm btn-outline-dark btn-add" data-name="${product.name}">Add to Bag</button>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-add')) {
    showToast(`${event.target.dataset.name} added to your bag.`);
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}

renderProducts();

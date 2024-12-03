// Функция для получения данных и отображения товаров
async function getProducts() {
  // Загрузка данных через fetch
  let response = await fetch('../data/shop.json');
  let content = await response.json(); // Парсим ответ как JSON

  console.log("Loaded content:", content);


  allProducts = content;

  // Отображаем товары
  displayProducts(allProducts);  
}


// Функция для отображения карточек товаров
function displayProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Очистить список перед рендером

  // Для каждого товара создаём карточку
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p class="price">${product.price}₽</p>
      <div class="order">
        <label for="amount-${product.id}">Количество:</label>
        <input type="number" id="amount-${product.id}" name="amount" value="0" min="0">
        <button onclick="addToCart(${product.id})">Заказать</button>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

// Функция фильтрации товаров по поисковому запросу
function searchProducts(query, products) {
  return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Функция сортировки товаров
function sortProducts(products, sortBy) {
  if (sortBy === 'price-asc') {
    return products.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    return products.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    return products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    return products.sort((a, b) => b.name.localeCompare(a.name));
  }
  return products;
}

// Обработчик событий для поиска и сортировки
let allProducts = [];
document.getElementById('search').addEventListener('input', (e) => {
  const query = e.target.value;
  const filteredProducts = searchProducts(query, allProducts);
  const sortBy = document.getElementById('sort').value;
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  displayProducts(sortedProducts);
});

document.getElementById('sort').addEventListener('change', (e) => {
  const sortBy = e.target.value;
  const filteredProducts = searchProducts(document.getElementById('search').value, allProducts);
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  displayProducts(sortedProducts);
});

// Инициализация
getProducts();

// Список товаров
const products = [
    { id: 1, name: 'Сумка кожаная', category: 'Сумки', price: 5000, image: '../images/bag1.jpg' },
    { id: 2, name: 'Рюкзак спортивный', category: 'Сумки', price: 3000, image: '../images/bag2.jpg' },
    { id: 3, name: 'Куртка зимняя', category: 'Одежда', price: 7000, image: '../images/jacket1.jpg' },
    { id: 4, name: 'Шарф вязаный', category: 'Аксессуары', price: 1500, image: '../images/scarf1.jpg' },
    { id: 5, name: 'Кошелек кожаный', category: 'Аксессуары', price: 2500, image: '../images/wallet1.jpg' },
    { id: 6, name: 'Пальто тренч', category: 'Одежда', price: 10000, image: '../images/coat1.jpg' },
    { id: 7, name: 'Сумка с цепочкой', category: 'Сумки', price: 4500, image: '../images/bag3.jpg' },
    { id: 8, name: 'Кеды белые', category: 'Одежда', price: 3500, image: '../images/shoes1.jpg' },
    { id: 9, name: 'Браслет золотой', category: 'Аксессуары', price: 3000, image: '../images/bracelet1.jpg' },
    { id: 10, name: 'Платок шелковый', category: 'Аксессуары', price: 4000, image: '../images/scarf2.jpg' }
  ];
  
  // Функция для отображения карточек
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очистить список перед рендером

    console.log("MY NAME IS POLINA");
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p class="price">${product.price}₽</p>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Функция фильтрации товаров по поисковому запросу
  function searchProducts(query) {
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
  document.getElementById('search').addEventListener('input', (e) => {
    console.log("1");
    const query = e.target.value;
    const filteredProducts = searchProducts(query);
    const sortBy = document.getElementById('sort').value;
    const sortedProducts = sortProducts(filteredProducts, sortBy);
    displayProducts(sortedProducts);
  });
  
  document.getElementById('sort').addEventListener('change', (e) => {
    console.log("2");
    const sortBy = e.target.value;
    const filteredProducts = searchProducts(document.getElementById('search').value);
    const sortedProducts = sortProducts(filteredProducts, sortBy);
    displayProducts(sortedProducts);
  });
  
  // Инициализация
  displayProducts(products);
  
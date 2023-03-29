

// Obtener referencias a los elementos en la página
const categorySelect = document.querySelector('#category');
const priceRange = document.querySelector('#price');
const filteredProductsContainer = document.querySelector('#filtered-products');

// Crear una matriz de objetos que representan los productos
const products = [
  { name: 'Auriculares Gaming Rojo', category: 'auriculares', price: 70 },
  { name: 'Teclado Gaming', category: 'teclados', price: 40 },
  { name: 'Ratón', category: 'ratones', price: 30 },
  { name: 'Monitor 4K', category: 'monitores', price: 400 },
  { name: 'Ratón blanco', category: 'ratones', price: 30 },
  { name: 'Monitor LG', category: 'monitores', price: 200 }
];

// Función para filtrar y mostrar los productos
function filterProducts() {
  // Obtener los valores seleccionados en el menú desplegable y el control deslizante
  const selectedCategory = categorySelect.value;
  const maxPrice = priceRange.value;

  // Filtrar los productos por categoría y precio
  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'all' || product.category === selectedCategory) && product.price <= maxPrice;
  });

  // Generar el HTML para mostrar los productos filtrados
  let html = '';
  for (const product of filteredProducts) {
    html += `<div class="product-card ${product.category} price-${product.price}">
      <h3>${product.name}</h3>
      <p>Precio: ${product.price}€</p>
    </div>`;
  }
  
  // Mostrar los productos filtrados en la página
  filteredProductsContainer.innerHTML = html;
}

// Llamar a la función filterProducts cuando cambie el valor del menú desplegable o del control deslizante
categorySelect.addEventListener('change', filterProducts);
priceRange.addEventListener('input', filterProducts);

// Llamar a la función filterProducts al cargar la página para mostrar todos los productos
filterProducts();









// para el carrito //

const cartItemsContainer = document.querySelector("#cart-items");
const totalContainer = document.querySelector("#total");
const checkoutButton = document.querySelector("#checkout");

let cartItems = [];
let total = 0;

// Función para agregar un item al carrito
function addItemToCart(item) {
  // Buscamos si el item ya existe en el carrito
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    // Si el item ya existe en el carrito, incrementamos su cantidad
    cartItems[existingItemIndex
			  
			  


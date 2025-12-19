/* Datos de productos. */
/* en producción, estos datos vendrían de una base de datos o API */
const products = [
  {
    id: "p1",
    name: "Plátanos",
    category: "Fruta",
    price: 1.29,        
    image: "images/platano.png",
    description: "Plátanos maduros, dulces y ricos en potasio.",
    stock: 12,
    rating: 4.6
  },
  {
    id: "p2",
    name: "Pan de Masa Madre",
    category: "Panadería",
    price: 1.50,
    image: "images/pan.jpg",
    description: "Pan artesanal con corteza crujiente y miga suave.",
    stock: 5,
    rating: 4.8
  },
  {
    id: "p3",
    name: "Baguette",
    category: "Panadería",
    price: 0.75,
    image: "images/baguette.jpg",
    description: "Barra de pan baguette crujiente recién horneada.",
    stock: 22,
    rating: 4.7
  },
  {
    id: "p4",
    name: "Manzanas",
    category: "Fruta",
    price: 2.99,
    image: "images/manzana.jpg",
    description: "Manzanas crujientes y jugosas, perfectas para comer.",
    stock: 19,
    rating: 4.4
  },
  {
    id: "p5",
    name: "Aguacate",
    category: "Verdura",
    price: 3.80,
    image: "images/aguacate.jpg",
    description: "Aguacates cremosos ideales para tostadas y ensaladas.",
    stock: 20,
    rating: 4.7
  },
  {
    id: "p6",
    name: "Calabacín",
    category: "Verdura",
    price: 1.30,
    image: "images/calabacin.jpg",
    description: "Calabacín fresco para tus recetas.",
    stock: 24,
    rating: 4.6
  },
  {
    id: "p7",
    name: "Boniato",
    category: "Verdura",
    price: 2.50,
    image: "images/boniato.jpg",
    description: "Boniatos dulces y nutritivos de temporada.",
    stock: 16,
    rating: 4.7
  },
  {
    id: "p8",
    name: "Fresas",
    category: "Fruta",
    price: 4.99,
    image: "images/fresa.png",
    description: "Fresas de temporada dulces y jugosas.",
    stock: 8,
    rating: 4.5
  },
  {
    id: "p9",
    name: "Empanadas argentinas",
    category: "Panadería",
    price: 1.20,
    image: "images/empanadas.jpg",
    description: "Empanadas caseras hechas a diario.",
    stock: 18,
    rating: 4.8
  },
  {
    id: "p10",
    name: "Filetes de ternera",
    category: "Carne",
    price: 4.50,
    image: "images/filete-ternera.jpg",
    description: "Filetes de ternera fresca y tierna de primera calidad.",
    stock: 10,
    rating: 4.2  
  },
  {
    id: "p11",
    name: "Solomillo de cerdo",
    category: "Carne",
    price: 3.80,
    image: "images/solomillo-cerdo.jpg",
    description: "Solomilo de cerdo jugoso y sabroso.",
    stock: 14,
    rating: 4.4
  },
  {
    id: "p12",
    name: "Hamburguesas de pollo",
    category: "Carne",
    price: 3.50,
    image: "images/hamburguesa-pollo.jpg",
    description: "Hamburguesa de pollo 100% natural.",
    stock: 16,
    rating: 5.0
  },
  {
    id: "p13",
    name: "Filetes de merluza",
    category: "Pescado",
    price: 4.50,
    image: "images/filetes-merluza.jpg",
    description: "Filetes de merluza fresca del Atlántico.",
    stock: 11,
    rating: 4.8
  },
  {
    id: "p14",
    name: "Cola de rape",
    category: "Pescado",
    price: 7.50,
    image: "images/cola-rape.jpg",
    description: "Cola de rape fresca. Ideal para guisos y arroces.",
    stock: 6,
    rating: 4.4
  },
  {
    id: "p15",
    name: "Sardinas",
    category: "Pescado",
    price: 4.00,
    image: "images/sardinas.jpg",
    description: "Sardinas frescas del Cantábrico ricas en omega-3.",
    stock: 30,
    rating: 4.9
  },
];

/* Productos destacados por ID para poder cambiarlos cuando queramos */
const idsDestacadas = ["p1", "p2"];

/* Muestra número en formato € con 2 decimales. Intl.NumberFormat representa monedas con la configuración regional adecuada. */
function formatEuro(num) {

  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(num);
}

/* Render en index.html (landing page) */
function index() {
  /* Muestra año actual en el footer */
  const actualYear = document.getElementById('year');
  if (actualYear) actualYear.textContent = new Date().getFullYear();

  /* Renderizar las tarjetas destacadas */
  const izquierda = document.getElementById('destacada-izquierda');
  const derecha = document.getElementById('destacada-derecha');
  if (izquierda && derecha) {
    const f1 = products.find(p => p.id === idsDestacadas[0]);
    const f2 = products.find(p => p.id === idsDestacadas[1]);
    /* innerHTML para insertar el contenido de las tarjetas de forma dinámica */
    izquierda.innerHTML = `
      <img src="${f1.image}" alt="${f1.name}" style="width:100%; height:250px; object-fit:cover; border-radius:8px;">
      <h3>${f1.name}</h3>
      <p class="price">${formatEuro(f1.price)}</p>
      <p>${f1.description}</p>
      <a class="btn" href="product.html?id=${f1.id}">Ver producto</a>
    `;
    derecha.innerHTML = `
      <img src="${f2.image}" alt="${f2.name}" style="width:100%; height:250px; object-fit:cover; border-radius:8px;">
      <h3>${f2.name}</h3>
      <p class="price">${formatEuro(f2.price)}</p>
      <p>${f2.description}</p>
      <a class="btn" href="product.html?id=${f2.id}">Ver producto</a>
    `;
  }

  /* Agrupo productos por categoría. */
  /* Comprueba si la categoría existe en el objeto y si no, la crea como un array vacío. 
  Después, añade el producto al array correspondiente con push. */
  const categoriaP = {};
  products.forEach(p => {
    if (!categoriaP[p.category]) categoriaP[p.category] = [];
    categoriaP[p.category].push(p);
  });

  /* Busca categories en el html y si no existe, sale de la función */
  const categoriesContainer = document.getElementById('categories');
  if (!categoriesContainer) return;

  /* Genera HTML para cada categoría y sus productos */
  /* Object.entries() convierte el objeto en pares (clave, valor) para que el for recorra cada categoría y sus productos */
  for (const [cat, items] of Object.entries(categoriaP)) {
    /* crea un nuevo div en memoria para cada categoría (aún no está en el HTML) */
    const catDiv = document.createElement('div');
    catDiv.className = 'categoria';

    /* creo una variable para recorrer los productos de cada categoría y añadir su HTML */
    let tarjetasHtml = '<div class="product-grid">';
    items.forEach(item => {
      tarjetasHtml += `
        <div class="tarjeta">
          <img src="${item.image}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p class="price">${formatEuro(item.price)}</p>
          <p>${item.description}</p>
          <a class="btn" href="product.html?id=${item.id}">Ver producto</a>
        </div>
      `;
    });
    tarjetasHtml += '</div>'; /* += para ir añadiendo cada tarjeta a la variable */

    /* el div creado en memoria ahora se rellena con el HTML de la categoría y sus productos */
    catDiv.innerHTML = `<h3>${cat}</h3>${tarjetasHtml}`;
    categoriesContainer.appendChild(catDiv);
  }
}

/* Detalles de producto en product.html */
function detallesProducto() {

  /* URLSearchParams para leer parámetros de la URL, obtenemos el id del producto para que se muestre
  al hacer click en "Ver producto" */
  const params = new URLSearchParams(location.search);  
  const id = params.get('id');
  if (!id) return;

  /* Busca el producto por ID en el array products y si no existe, muestra mensaje de error */
  const product = products.find(p => p.id === id);
  if (!product) {
    document.getElementById('detallesProductoInfo').innerHTML = '<p>Producto no encontrado.</p>';
    return;
  }

  /* Inserta toda la información del producto en el contenedor del html */
  const container = document.getElementById('detallesProductoInfo');
  container.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="detail-info">
      <h2>${product.name}</h2>
      <p class="price">${formatEuro(product.price)} / kg</p>
      <p>${product.description}</p>
      <p class="disponible">${product.stock > 0 ? 'En stock: ' + product.stock : 'Agotado'}</p>
      <p class="rating">Valoración: ${product.rating} ★</p>

      <div style="margin-top:1rem;">
        <label for="cantidad">Cantidad:</label>
        <input id="cantidad" type="number" value="1" min="1" max="${Math.max(1, product.stock)}" style="width:70px; margin-left:.5rem;">
        <button id="addCarrito" style="margin-left: .5rem; padding:.4rem .6rem; border-radius:6px; border:none; background:var(--verde); color:#fff;">Añadir al carrito</button>
      </div>
    </div>
  `;

  /* añado botón "Añadir al carrito" como ejemplo, no funcional */
  const botonCarrito = document.getElementById('addCarrito');
  if (botonCarrito) {
    botonCarrito.addEventListener('click', () => {
      /* Obtengo la cantidad seleccionada en el input y valido que haya stock suficiente. Se muestra un alert como confirmación */
      const cantidad = Number(document.getElementById('cantidad').value || 1);      
      alert(`Has añadido ${cantidad} x ${product.name} al carrito.`);
    });
  }
}

/* Este fragmento de código se encarga de detectar qué página se está cargando y llamar a la función de renderizado adecuada. 
De esta manera solo usamos un archivo JS para ambas páginas. 
DOMContentLoaded espera a que el HTML esté totalmente cargado. */
document.addEventListener('DOMContentLoaded', () => {
  
  /* Comprueba si existe categories (index.html) o detallesProductoInfo (product.html) y llama a la función correspondiente */
  if (document.getElementById('categories')) {
    index();
  }
  if (document.getElementById('detallesProductoInfo')) {
    detallesProducto();
  }
});



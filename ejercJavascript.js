// Cada producto que vende el super es creado con esta clase
class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    categoria;      // Categoría a la que pertenece este producto
    precio;         // Su precio
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;

        // Si no me definen stock, pongo 10 por default
        if (stock) {
            this.stock = stock;
        } else {
            this.stock = 10;
        }
    }

}


// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

// Genero un listado de productos. Simulando base de datos
const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];


// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vació
    constructor() {
        this.precioTotal = 0;
        this.productos = [];
        this.categorias = [];
    }

    /**
     * función que agrega @{cantidad} de productos con @{sku} al carrito
     */
    async agregarProducto(sku, cantidad) {
        console.log(`Agregando ${cantidad} ${sku}`);

        // Busco el producto en la "base de datos"
        const producto = await findProductBySku(sku);

        console.log("Producto encontrado", producto);

        // Creo un producto nuevo
        const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
        this.productos.push(nuevoProducto);
        this.precioTotal = this.precioTotal + (producto.precio * cantidad);
        this.categorias.push(producto.categoria);
    }
    async eliminProducto(sku, cantidad){
       if(ProductoEnCarrito.sku===sku){
        if(ProductoEnCarrito.cantidad>cantidad){
            this.cantidad=ProductoEnCarrito.cantidad-cantidad;
        }if(cantidad>=ProductoEnCarrito.cantidad){
            for (let i = 0; i < productosDelSuper.length; i++) {
                if (productosDelSuper[i].sku === sku) {
                  productosDelSuper.splice(i, 1);
                  break;
                }
        }
       }
    }
    
}
}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

}

// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
                console.log("El producto se encontró");
            } else {
                reject(`Product ${sku} not found`);
            }
        }, 1500);
    });
}

//const carrito = new Carrito();
//carrito.agregarProducto('WE328NJ', 2);

//Función que elimina un producto en la base de datos
function elimProduct(productosDelSuper, sku) {
    for (let i = 0; i < productosDelSuper.length; i++) {
      if (productosDelSuper[i].sku === sku) {
        productosDelSuper.splice(i, 1);
        break;
      }
    }
    console.log(productosDelSuper);
  }
//Agregar productos en la base de datos
function agregProducto(sku,nombre, categoria, precio, stock){
    const nuevoProducto = new Producto(sku,nombre, categoria, precio, stock);
    productosDelSuper.push(nuevoProducto);
    console.log(productosDelSuper);
}
agregProducto('WE328NJ', 'Jabon', 4, 'higiene', 3);


/*function eliminarProducto(sku, cantidad){
    findProductBySku(sku)
    //Si la cantidad es menor a la cantidad de ese producto en el carrito, se debe restar esa cantidad al producto
    .then((cantidad)=>{
        const restarCantidad = (productosDelSuper.find(product => product.stock))-cantidad;
        console.log("La cantidad es: "+restarCantidad);
    })
    .catch((error)=>{
        console.log('Hay un error');
    });

}

function eliminarProduct(sku, cantidad) {
    // Create a promise that will be resolved when the product is removed.
    let promise = new Promise((resolve, reject) => {
      // Remove the product from the database.
      productosDelSuper.removeProduct(sku, resolve, reject);
    });
  
    // Handle the success and failure cases.
    promise.then((cantidad) => {
      console.log('El producto fue removido satisfactoriamente.');
      const restarCantidad = (productosDelSuper.find(product => product.stock))-cantidad;
        console.log("La cantidad es: "+restarCantidad);
    }).catch(error => {
      console.log('Un error ocurrió mientras se intentaba eliminar el producto.');
    });
  
    // Return the promise.
    return promise;
  }*/


















  // funcion n° 2
 /* function eliminarProducto(sku, cantidad){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        const foundProductCarrito = productosDelSuper.find(product => product.sku === sku);
            if(foundProductCarrito) {
                resolve(foundProductCarrito);
            } else {
                reject(`Producto con ${sku} no existe en el carrito`);
            }
    }, 1500);
})
.then((foundProductCarrito) => {
    if(foundProductCarrito.cantidad > cantidad){
        foundProductCarrito.cantidad -= cantidad;
    } else {
        const nuevoCarrito = ProductoEnCarrito.filter(product => product.sku !== foundProductCarrito.sku);
        Carrito = {...nuevoCarrito}
    }
})
.catch(error);
}*/


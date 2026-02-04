const producto = {
    nombre: "Notebook",
    precio: 750000,
    stock: 10,

    mostrarInfo: function () {
        return `Producto: ${this.nombre} - Precio: $${this.precio}`;
    },

    hayStock: function () {
        return this.stock > 0;
    }
};

const productos = [
  { nombre: "Mouse", precio: 15000 },
  { nombre: "Teclado", precio: 25000 },
  { nombre: "Monitor", precio: 180000 }
];

productos.forEach(function (producto) {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

const nombresProductos = productos.map(function (producto) {
  return producto.nombre;
});

console.log(nombresProductos);


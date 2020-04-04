const articulos = [
    { nombre: "Bici", precio: 800 },
    { nombre: "Tv", precio: 1500 },
    { nombre: "Radio", precio: 350 },
    { nombre: "Movil", precio: 325 },
    { nombre: "PC", precio: 1225 },
    { nombre: "Mouse", precio: 36 },
];

let filtrarArticulos = articulos.filter(function (articulo) {
    return articulo.precio < 500;
});
console.log(filtrarArticulos);

let nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});
console.log('nombreArticulos: ' + nombreArticulos);

let encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'PC'
});
console.log(encontrarArticulo.nombre);

console.log(`Articulos comprados: ${nombreArticulos}, Nº de articulos de precio menor a 500€: ${filtrarArticulos.length}.`);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

let preciosMenores = articulos.some(function(articulo){
    return articulo.precio <= 500;
})
console.log(preciosMenores);





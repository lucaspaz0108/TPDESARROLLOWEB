let tienda = document.getElementById("tienda");

let dataitems = [{
    id: "producto1",
    name: "Data Science",
    price: 30000,
    desc: "Curso introductorio a Data Science",
    img: "../imagenes/datascience.jpg"
},
{
    id: "producto2",
    name: "Data analytics",
    price: 25000,
    desc: "Curso introductorio a Data Analytics",
    img: "../imagenes/dataanalytics.jpg"
},
{
    id: "producto3",
    name: "Programacion web full stack",
    price: 90000,
    desc: "Curso avanzado de Programación web full stack",
    img: "../imagenes/programacionwebfullstack.jpg"
},
{
    id: "producto4",
    name: "Programacion web front end",
    price: 70000,
    desc: "Curso avanzado de Programación web front end",
    img: "../imagenes/programacionfrontend.jpg"  
},
{
    id: "producto5",
    name: "Programacion web back end",
    price: 80000,
    desc: "Curso avanzado de Programación web back end",
    img: "../imagenes/programacionbackend.jpg"   
},
{
    id: "producto6",
    name: "Diseño UX-UI",
    price: 75000,
    desc: "Curso introductorio a Diseño UX-UI",
    img: "../imagenes/diseño.jpg"   
}
];

let generateTienda = () => {
    tienda.innerHTML = dataitems.map((item) => {
        return `
            <div class="card text-center " style="width: 18rem; margin-bottom:40px">
                <img src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="detalle">
                    <div class="card-body">
                        <p class="card-text">${item.name}</p>
                        <p>${item.desc}</p>
                    </div>
                    <div class="cantidadyprecio">
                        <h2>$${item.price}</h2>
                        <div class="botones">
                            <i class="bi bi-dash-lg"></i>
                            <div class="cantidad">0</div>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

generateTienda();

console.log
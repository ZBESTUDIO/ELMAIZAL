const productos = [
  {
    "cat": "canasticas",
    "name": "Trio de Canasticas",
    "desc": "Conchitas de Plátano verde con guacamole, queso mozarella y hogao.",
    "price": "$11.100",
    "img": "trio-canasticas.webp",
    "note": "Acompaña tus canasticas con la adición de tu preferencia."
  },
  {
    "cat": "canasticas",
    "name": "Trio de Canasticas + Topins",
    "desc": "Conchitas de Plátano verde con guacamole, queso mozzarella y hogao.",
    "price": "$11.100 + Precio Adición",
    "img": "trio-canastas-topins.webp",
    "note": "Acompaña tus canasticas con la adición de tu preferencia."
  },
  {
    "cat": "adiciones",
    "name": "Carne desmechada",
    "desc": "",
    "price": "$6.200",
    "img": "carne-desmechada.webp"
  },
  {
    "cat": "adiciones",
    "name": "Pollo desmechado",
    "desc": "",
    "price": "$6.200",
    "img": "pollo-desmechado.webp"
  },
  {
    "cat": "adiciones",
    "name": "Chorizo",
    "desc": "",
    "price": "$10.400",
    "img": "chorizo.webp"
  },
  {
    "cat": "adiciones",
    "name": "Salchicha",
    "desc": "",
    "price": "$3.700",
    "img": "salchicha.webp"
  },
  {
    "cat": "adiciones",
    "name": "Maduritos",
    "desc": "",
    "price": "$3.100",
    "img": "maduritos.webp"
  },
  {
    "cat": "adiciones",
    "name": "Chicharrón",
    "desc": "",
    "price": "$8.100",
    "img": "chicharron.webp"
  },
  {
    "cat": "maduros",
    "name": "Maduro Paisa",
    "desc": "Maduro Asado con frijol, chicharrón carnudo, salchicha y maicitos",
    "price": "$27.000",
    "img": "maduro-paisa.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "maduros",
    "name": "Maduro Oriental",
    "desc": "Maduro Asado con trozos de pierna de cerdo, vegetales salteados, queso mozzarella y maicitos",
    "price": "$25.800",
    "img": "maduro-oriental.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "maduros",
    "name": "Maduro Pollo",
    "desc": "Maduro Asado con pollo desmechado con trocitos de tocineta, queso mozzarella y maicitos",
    "price": "$25.800",
    "img": "maduro-pollo.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "maduros",
    "name": "Maduro Carne",
    "desc": "Maduro Asado con carne desmechada, queso mozzarella y maicitos",
    "price": "$27.000",
    "img": "maduro-carne.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "maduros",
    "name": "Maduro Tradicion",
    "desc": "Maduro Asado con queso campesino, queso mozzarella y dulce de guayaba artesanal",
    "price": "$19.500",
    "img": "maduro-tradicion.webp"
  },
  {
    "cat": "maduros",
    "name": "Maduro Mixto",
    "desc": "Maduro Asado con carne desmechada, pollo desmechado con trocitos de tocineta, queso mozzarella y maicitos",
    "price": "$26.500",
    "img": "maduro-mixto.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "patacones",
    "name": "Patacon Paisa",
    "desc": "Patacón Verde con frijol, chicharrón carnudo, salchicha y maicitos",
    "price": "$27.000",
    "img": "patacon-paisa.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "patacones",
    "name": "Patacon Oriental",
    "desc": "Patacón Verde con trozos de pierna de cerdo, vegetales salteados, queso mozzarella y maicitos",
    "price": "$25.800",
    "img": "patacon-oriental.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "patacones",
    "name": "Patacon Pollo",
    "desc": "Patacón Verde con pollo desmechado con trocitos de tocineta, queso mozzarella y maicitos",
    "price": "$25.800",
    "img": "patacon-pollo.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "patacones",
    "name": "Patacon Mixto",
    "desc": "Patacón verde con carne desmechada, pollo desmechado con trocitos de tocineta, queso mozzarella y maicitos",
    "price": "$26.500",
    "img": "patacon-mixto.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "patacones",
    "name": "Patacon Carne",
    "desc": "Patacón Verde con carne desmechada, queso mozzarella y maicitos",
    "price": "$27.000",
    "img": "patacon-carne.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "arepas",
    "name": "Arepa con Huevo",
    "desc": "Arepa de maíz rellena de huevos revueltos solos o con hogao",
    "price": "$9.000",
    "img": "arepa-con-huevo.webp"
  },
  {
    "cat": "arepas",
    "name": "Arepa Queso Mozarella",
    "desc": "Arepa de maíz rellena de queso mozzarella, acompañada de leche condensada o dulce de guayaba artesanal",
    "price": "$12.000",
    "img": "arepa-queso-mozzarella.webp"
  },
  {
    "cat": "arepas",
    "name": "Arepa Paisa",
    "desc": "Arepa de maíz rellena de chicharrón carnudo, frijol, salchicha y maicitos",
    "price": "$25.500",
    "img": "arepa-paisa.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "arepas",
    "name": "Arepa Carne",
    "desc": "Arepa de maíz rellena de carne desmechada, maduritos, queso mozzarella y maicitos",
    "price": "$25.000",
    "img": "arepa-carne.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "arepas",
    "name": "Arepa Pollo",
    "desc": "Arepa de maíz rellena de pollo desmechado con trocitos de tocineta, queso mozzarella y maicitos",
    "price": "$24.000",
    "img": "arepa-pollo.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "arepas",
    "name": "Arepa de Chocolo",
    "desc": "Arepa artesanal de chócolo rellena de quesito.",
    "price": "$13.500",
    "img": "arepa-chocolo.webp"
  },
  {
    "cat": "arepas",
    "name": "Arepa Mixta",
    "desc": "Arepa de maíz rellena de pollo desmechado con trocitos de tocineta, carne desmechada, queso mozzarella y maicitos",
    "price": "$24.500",
    "img": "arepa-mixta.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "arepas",
    "name": "Arepa Hawaiana",
    "desc": "Arepa de maíz rellena de jamón, piña calada, queso mozzarella y maicitos",
    "price": "$23.000",
    "img": "arepa-hawaiana.webp"
  },
  {
    "cat": "arepas",
    "name": "Arepa Oriental",
    "desc": "Arepa de maíz rellena de trozos de pierna de cerdo, vegetales salteados, queso mozzarella y maicitos",
    "price": "$23.000",
    "img": "arepa-oriental.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "arepas",
    "name": "Chori Arepa",
    "desc": "Arepa de maíz rellena de chorizo artesanal, queso mozzarella y maicitos",
    "price": "$23.000",
    "img": "chori-arepa.webp",
    "note": "Acompañado de guacamole y hogao."
  },
  {
    "cat": "frio",
    "name": "Aguapanela",
    "desc": "",
    "price": "$5.600",
    "img": "aguapanela.webp"
  },
  {
    "cat": "frio",
    "name": "Aguapanela con leche",
    "desc": "",
    "price": "$6.600",
    "img": "aguapanela.webp"
  },
  {
    "cat": "frio",
    "name": "Chocolate",
    "desc": "",
    "price": "$6.100",
    "img": "chocolate.webp"
  },
  {
    "cat": "frio",
    "name": "Chocolate con leche",
    "desc": "",
    "price": "$7.100",
    "img": "chocolate.webp"
  },
  {
    "cat": "frio",
    "name": "Adición de Quesillo",
    "desc": "",
    "price": "$3.300",
    "img": "aguapanela.webp",
    "note": "Adición."
  },
  {
    "cat": "calor",
    "name": "Limonadas",
    "desc": "",
    "price": "$9.100",
    "img": "limonada-hierbabuena.webp",
    "note": "Pregunta por la fruta de temporada."
  },
  {
    "cat": "calor",
    "name": "Jugos en agua",
    "desc": "",
    "price": "$8.000",
    "img": "limonada-sandia.webp",
    "note": "Pregunta por la fruta de temporada."
  },
  {
    "cat": "calor",
    "name": "Jugos en leche",
    "desc": "",
    "price": "$9.500",
    "img": "limonada-sandia.webp",
    "note": "Pregunta por la fruta de temporada."
  },
  {
    "cat": "otras",
    "name": "Cocacola normal",
    "desc": "",
    "price": "$5.500",
    "img": "otras-bebidas.webp"
  },
  {
    "cat": "otras",
    "name": "Cocacola zero",
    "desc": "",
    "price": "$5.100",
    "img": "otras-bebidas.webp"
  },
  {
    "cat": "otras",
    "name": "Bretaña",
    "desc": "",
    "price": "$4.900",
    "img": "otras-bebidas.webp"
  },
  {
    "cat": "otras",
    "name": "Botella de Agua",
    "desc": "",
    "price": "$2.700",
    "img": "otras-bebidas.webp"
  }
];

const categoriasProductos = [
  { id: "todos", label: "Todos" },
  { id: "arepas", label: "Arepas" },
  { id: "maduros", label: "Maduros" },
  { id: "patacones", label: "Patacones" },
  { id: "canasticas", label: "Canasticas" },
  { id: "adiciones", label: "Adiciones" },
  { id: "frio", label: "Pa'l frío" },
  { id: "calor", label: "Pa'l calor" },
  { id: "otras", label: "Otras bebidas" }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector("#productos-grid");
  const filtros = document.querySelector("#productos-filtros");

  if (!contenedor || !filtros) return;

  function mostrarProductos(categoria = "todos") {
    const productosFiltrados =
      categoria === "todos"
        ? productos
        : productos.filter(producto => producto.cat === categoria);

    contenedor.innerHTML = "";

    productosFiltrados.forEach(producto => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "producto-card";

      tarjeta.innerHTML = `
        <img
          src="images/productos/${producto.img}"
          alt="${producto.name}"
          loading="lazy"
        >

        <div class="producto-card-body">
          <h3>${producto.name}</h3>

          ${
            producto.desc
              ? `<p class="producto-desc">${producto.desc}</p>`
              : ""
          }

          ${
            producto.note
              ? `<p class="producto-nota">${producto.note}</p>`
              : ""
          }

          <p class="producto-precio">${producto.price}</p>
        </div>
      `;

      contenedor.appendChild(tarjeta);
    });
  }

  categoriasProductos.forEach(categoria => {
    const boton = document.createElement("button");

    boton.className = "producto-filtro";
    boton.textContent = categoria.label;
    boton.type = "button";

    if (categoria.id === "todos") {
      boton.classList.add("is-active");
    }

    boton.addEventListener("click", () => {
      document
        .querySelectorAll(".producto-filtro")
        .forEach(btn => btn.classList.remove("is-active"));

      boton.classList.add("is-active");
      mostrarProductos(categoria.id);
    });

    filtros.appendChild(boton);
  });

  mostrarProductos();
});

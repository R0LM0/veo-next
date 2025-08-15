import zanahoria from "../public/zanahoria1.jpeg";
import curcuma from "../public/curcuma1.jpg";

const productos = [
    {
        id: 1,
        nombre: "Jabón de Zanahoria",
        precio: "C$213.32",
        imagen: zanahoria, // ahora usa la imagen importada
        descripcion: "Jabón artesanal elaborado con zanahoria, miel de abeja y vitamina E, ideal para piel seca o sensible.",
        ingredientes: [
            "Extracto natural de zanahoria",
            "Miel de abeja pura",
            "Vitamina E",
            "Aceite de coco",
            "Glicerina Melt & Pour",
            "Colorante",
            "Aromatizante"
        ],
        beneficios: [
            "Hidrata profundamente la piel",
            "Nutre & revitaliza la piel",
            "Suaviza y ayuda a equilibrar la piel seca o sensible",
            "Libre de químicos agresivos",
        ],
        proceso:
            "Elaborado mediante el método manual, curado durante 3 días para obtener la máxima suavidad y durabilidad.",
        slug: "zanahoria"
    },
    {
        id: 2,
        nombre: "Jabón de Cúrcuma",
        precio: "C$213.32",
        imagen: curcuma, // ahora usa la imagen i   mportada
        descripcion: "Jabón artesanal de cúrcuma, esencia de rosa y aceite de coco. Ayuda a unificar el tono de la piel, aporta hidratación y ideal para pieles con manchas.",
        ingredientes: [
            "Cúrcuma en polvo",
            "Aceite de coco",
            "Esencia de rosa",
            "Glicerina Melt & Pour"
        ],
        beneficios: [
            "Ayuda a unificar el tono de la piel",
            "Aporta hidratación",
            "Ideal para pieles con manchas",
            "Libre de químicos agresivos",
        ],
        proceso:
            "Elaborado mediante el método manual, curado durante 3 días para obtener la máxima suavidad y durabilidad.",
        slug: "curcuma"
    }
];

export default productos; 
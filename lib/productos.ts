const productos = [
    {
        id: 1,
        nombre: "Jabón de Zanahoria",
        precio: "C$00.00",
        imagen: "/placeholder.svg?height=300&width=300",
        descripcion: "Jabón artesanal elaborado con zanahoria, miel de abeja y vitamina E, ideal para piel seca o sensible.",
        ingredientes: [
            "Extracto natural de zanahoria",
            "Miel de abeja pura",
            "Vitamina E natural",
            "Aceite de coco virgen",
            "Manteca de karité",
            "Glicerina vegetal"
        ],
        beneficios: [
            "Hidrata profundamente la piel",
            "Nutre & revitaliza la piel",
            "Suaviza y ayuda a equilibrar la piel seca o sensible",
            "Libre de químicos agresivos",
        ],
        proceso:
            "Elaborado mediante el método de saponificación en frío, curado durante 6 semanas para obtener la máxima suavidad y durabilidad.",
        slug: "zanahoria"
    },
    {
        id: 2,
        nombre: "Jabón de Flor de Jamaica",
        precio: "C$00.00",
        imagen: "/placeholder.svg?height=300&width=300",
        descripcion: "Jabón artesanal con flor de jamaica, aceite de coco y esencia de rosa. Exfolia suavemente, hidrata y equilibra la piel.",
        ingredientes: [
            "Flor de jamaica seca",
            "Aceite de coco virgen",
            "Esencia de rosa natural",
            "Glicerina vegetal",
            "Manteca de karité"
        ],
        beneficios: [
            "Exfolia e hidrata suavemente el rostro",
            "Mejora la textura de la piel",
            "Aporta luminosidad natural",
            "Calma y equilibra la piel",
            "Deja una sensación fresca y suave"
        ],
        proceso:
            "Elaborado mediante saponificación en frío, infusionado con flor de jamaica y curado durante 5-6 semanas para preservar sus propiedades naturales.",
        slug: "jamaica"
    }
];

export default productos; 
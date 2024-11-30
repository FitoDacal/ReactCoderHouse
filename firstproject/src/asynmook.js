const products = [
    {
        id: 1,
        name: "T-shirt white I",
        price: "25.000",
        category: "T-shirts",
        img: "/img/t-shirtwhite1.webp",
        stock: 5,
        description: "Remera Oversize\nAlgodón peinado 24/1\n80% Algodón 20% Poliester\nEstampa en Serigrafía"
    },
    {
        id: 2,
        name: "T-shirt white II",
        price: "25.000",
        category: "T-shirts",
        img: "/img/t-shirtwhite2.webp",
        stock: 5,
        description: "Remera Oversize\nAlgodón peinado 24/1\n80% Algodón 20% Poliester\nEstampa en Serigrafía"
    },
    {
        id: 3,
        name: "T-shirt black",
        price: "25.000",
        category: "T-shirts",
        img: "/img/t-shirtblack.webp",
        stock: 5,
        description: "Remera Oversize\nAlgodón peinado 24/1\n80% Algodón 20% Poliester\nEstampa en Serigrafía"
    },
    {
        id: 4,
        name: "Hoodie black I",
        price: "55.000",
        category: "Hoodies",
        img: "/img/hoodieblack1.webp",
        stock: 5,
        description:"Hoodie Oversize\nAlgodón Frizado\nEstampa en Serigrafía"
    },
    {
        id: 5,
        name: "Hoodie black II",
        price: "55.000",
        category: "Hoodies",
        img: "/img/hoodieblack2.webp",
        stock: 5,
        description:"Hoodie Oversize\nAlgodón Frizado\nEstampa en Serigrafía"
    },
    {
        id: 6,
        name: "Hoodie black III",
        price: "55.000",
        category: "Hoodies",
        img: "/img/hoodieblack3.webp",
        stock: 5,
        description:"Hoodie Oversize\nAlgodón Frizado\nEstampa en Serigrafía"
    },
    {
        id: 7,
        name: "Pant blue",
        price: "40.000",
        category: "Pants",
        img: "/img/pantblue.webp",
        stock: 5,
        description:"Fabricado en algodón duradero y resistente.\nAmplios bolsillos para mayor practicidad."
    },
    {
        id: 8,
        name: "Pant beige",
        price: "40.000",
        category: "Pants",
        img: "/img/pantbeige.webp",
        stock: 5,
        description:"Fabricado en algodón duradero y resistente.\nAmplios bolsillos para mayor practicidad."
    },
    {
        id: 9,
        name: "Pant black",
        price: "40.000",
        category: "Pants",
        img: "/img/pantblack.webp",
        stock: 5,
        description:"Fabricado en algodón duradero y resistente.\nAmplios bolsillos para mayor practicidad."
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

// Obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

// Obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
};


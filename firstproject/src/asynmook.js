const products = [
    {
        id: 1,
        name: "T-shirt white I",
        price: "25.000",
        category: "T-shirts",
        img: "/img/t-shirtwhite1.webp",
        stock: 5,
        description: "Oversize T-shirt\n24/1 combed cotton\n80% Cotton 20% Polyester\nScreen printing"
    },
    {
        id: 2,
        name: "T-shirt white II",
        price: "25.000",
        category: "T-shirts",
        img: "/img/t-shirtwhite2.webp",
        stock: 5,
        description: "Oversize T-shirt - 24/1 combed cotton - 80% Cotton 20% Polyester - Screen printing"
    },
    {
        id: 3,
        name: "T-shirt black",
        price: "25.000",
        category: "T-shirts",
        img: "/img/t-shirtblack.webp",
        stock: 5,
        description: "Oversize T-shirt\n24/1 combed cotton\n80% Cotton 20% Polyester\nScreen printing"
    },
    {
        id: 4,
        name: "Hoodie black I",
        price: "55.000",
        category: "Hoodies",
        img: "/img/hoodieblack1.webp",
        stock: 5,
        description:"Oversize Hoodie - Fried Cotton - Screen Printed"
    },
    {
        id: 5,
        name: "Hoodie black II",
        price: "55.000",
        category: "Hoodies",
        img: "/img/hoodieblack2.webp",
        stock: 5,
        description:"Oversize Hoodie\nFried Cotton\nScreen Printed"
    },
    {
        id: 6,
        name: "Hoodie black III",
        price: "55.000",
        category: "Hoodies",
        img: "/img/hoodieblack3.webp",
        stock: 5,
        description:"Oversize Hoodie\nFried Cotton\nScreen Printed"
    },
    {
        id: 7,
        name: "Pant blue",
        price: "40.000",
        category: "Pants",
        img: "/img/pantblue.webp",
        stock: 5,
        description:"Made of durable and resistant cotton - Large pockets for greater practicality"
    },
    {
        id: 8,
        name: "Pant beige",
        price: "$39,00",
        category: "Pants",
        img: "/img/pantbeige.webp",
        stock: 5,
        description:"Made of durable and resistant cotton.\nLarge pockets for greater practicality"
    },
    {
        id: 9,
        name: "Pant black",
        price: "$39,99",
        category: "Pants",
        img: "/img/pantblack.webp",
        stock: 5,
        description:"Made of durable and resistant cotton.\nLarge pockets for greater practicality"
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
            resolve(products.filter((prod) => prod.category.toLowerCase() === categoryId.toLowerCase()));
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


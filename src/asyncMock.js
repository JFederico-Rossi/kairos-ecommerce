const products = [
    { 
        id: '1', 
        name: 'Yoga Mats', 
        price: 15, 
        category: 'Yoga props', 
        img:'../src/assets/0yoga mat 1.png', 
        stock: 25, 
        description:'Elevate your yoga practice with our premium yoga mats. Crafted from high-quality, eco-friendly materials, these mats provide a comfortable and non-slip surface for your asanas. With optimal thickness for joint support and durability, our yoga mats are suitable for practitioners of all levels. Choose from a variety of colors and patterns to enhance your personal style on the mat.'
    },
    { 
        id: '2', 
        name: 'Meditation bench', 
        price: 70, 
        category: 'Meditation', 
        img:'../src/assets/meditation_bench.jpg', 
        stock: 14, 
        description:'Find comfort and focus during meditation with our wooden meditation bench. Designed for optimal spinal alignment, this bench provides a comfortable and stable seating platform for extended meditation sessions. Crafted from sustainable wood, its elegant and ergonomic design encourages proper posture while supporting your meditation practice. Portable and easy to store, our meditation bench is the perfect companion for your mindfulness journey.'
    },
    { 
        id: '3', 
        name: 'Buddha figure', 
        price: 100, 
        category: 'Home', 
        img:'../src/assets/0buddhaat 1.png', 
        stock: 9, 
        description:'Bring a sense of tranquility and mindfulness to your space with our exquisite Buddha figure. Carefully crafted from high-quality materials, this serene and meditative statue adds a touch of spiritual elegance to any room. The intricate detailing captures the essence of peace and enlightenment, making it a perfect centerpiece for your meditation or yoga space.'
    },
    { 
        id: '4', 
        name: 'Yoga Blocks', 
        price: 10, 
        category: 'Yoga props', 
        img:'../src/assets/0yoga blocks.png', 
        stock: 12, 
        description:'Enhance your flexibility and stability during yoga sessions with our yoga blocks. Made from lightweight and sturdy foam, these blocks provide the perfect support for challenging poses. Their non-slip surface ensures stability, and their ergonomic design makes them easy to grip. Whether you are a beginner or an advanced practitioner, our yoga blocks are essential for refining your practice.'
    },
    { 
        id: '5', 
        name: 'Tibetan Bowl', 
        price: 50, 
        category: 'Meditation', 
        img:'../src/assets/0tibetan bowl.png', 
        stock: 1, 
        description:'Elevate your meditation practice with the soothing sounds of our Tibetan bowls. Meticulously crafted by skilled artisans, these bowls produce resonant tones that promote relaxation and inner peace. Each bowl is unique, featuring intricate designs and traditional craftsmanship. Embrace the ancient tradition of sound therapy and add a touch of mindfulness to your daily routine with our Tibetan bowls.'
    },
    { 
        id: '6', 
        name: 'Gong', 
        price: 100, 
        category: 'Meditation', 
        img:'../src/assets/0gong.png', 
        stock: 4, 
        description:'Immerse yourself in the harmonious vibrations of our gong. Handcrafted with precision, our gong produces rich and resonant tones that create a calming and meditative atmosphere. Whether used for sound healing, meditation, or as a unique addition to your home decor, this gong is a timeless instrument that transcends cultural boundaries, promoting a sense of peace and balance.'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },700)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },700)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },700)
    })
}
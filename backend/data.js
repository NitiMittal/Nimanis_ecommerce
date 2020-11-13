// import d3 from "./images/d3.webp";
// import d1 from "./images/d1.webp";
// import d2 from "./images/d2.webp";
// import d4 from "./images/d4.webp"; 


export default {
     products:[
    {
        _id:1,
        name:'Slim Shirt',
        category: "Shirts",
        brand:'Nike',
        price:400,
        rating:4.5,
        numReviews:10,
        countInStock:5,
        image:"data:image/jpeg;base64,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"
    },

    {
        _id:2,
        name:'Slim Fit Shirt',
        category:'Shirts',
        brand:'Nautica',
        price:500,
        rating:4.5,
        numReviews:10,
        countInStock:8,
       image:"data:image/jpeg;base64,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"
    },
    {
        _id:3,
        name:'Slim Fit Formal Shirt',
        category:'Shirts',
        brand:'HighLander',
        price:450,
        rating:4.5,
        numReviews:10,
        countInStock:5,
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRnbbJV9adeY6BYZsYRfXPkwcO2bHli5FHjA&usqp=CAU"
    },
    {
        _id:4,
        name:'Slim Fit Checked Casual Shirt',
        category:'Shirts',
        brand:'WROGN',
        price:700,
        rating:4.5,
        numReviews:10,
        countInStock:2,
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP8ZyaBbXaVP2dhI_2pdolXO7u2v17w91t8w&usqp=CAU"
    },

]}


let shop ={
    owner: 'Alia',
    address: {
        steeet: 'kochukhet vooter goli', 
        city: 'ranbir', 
        country: 'BD'
    },
    products: ['laptob', 'mic', 'monitor', 'keyboard'],
    revenue: 455110,
    isOpen: true,
    isNew: false

};
// console.log(shop.products[0]);
const shopJson = JSON.stringify(shop); // এটা JSON এ convert করে 
const showShopJson=JSON.parse(shopJson)// এটা JSON কে object এ convert করে 
console.log(showShopJson);
const data = [
    {
        "id" : 1,
        "title" : "Fjallraven - Foldsack No. 1 Backpack",
        "description" : "Fjallraven - Foldsack No. 1 Backpack",
        "price" : 15621.21,
        "image" : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        "id" : 2,
        "title" : "Mens Casual Premium Slim Fit T-Shirts",
        "description" : "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing",
        "price" : 22621.21,
        "image" : "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        "id" : 3,
        "title" : "Mens Cotton Jacket",
        "description" : "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors",
        "price" : 10621.21,
        "image" : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
        "id" : 4,
        "title" : "Mens Casual Slim Fit",
        "description" : "The color could be slightly different between on the screen and in practice. /",
        "price" : 17621.21,
        "image" : "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    },
    {
        "id" : 5,
        "title" : "John Hardy Women's Legends Naga Gold & Silver Dragon",
        "description" : "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
        "price" : 5621.21,
        "image" : "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "id" : 6,
        "title" : "Solid Gold Petite Micropave",
        "description" : "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States",
        "price" : 7621.21,
        "image" : "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "id" : 7,
        "title" : "White Gold Plated Princess",
        "description" : "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her",
        "price" : 10621.21,
        "image" : "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "id" : 8,
        "title" : "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "description" : "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "price" : 9621.21,
        "image" : "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "id" : 9,
        "title" : "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        "description" : "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity;",
        "price" : 5621.21,
        "image" : "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
    },
    {
        "id" : 10,
        "title" : "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "description" : "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive",
        "price" : 7621.21,
        "image" : "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    }
]

export function getProducts(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(data), 2000);
    });
}

export function getProduct(idProduct){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(data.filter(d=> d.id == idProduct)), 2000);
    });
}

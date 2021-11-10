let popular_brand_photo = document.getElementById("popular_brand_photo");

let popular_brand_photo_data = [ 
{
    photo: "PHOTO/SHO1.jpeg",
    url:'#',
},
{
    photo: "PHOTO/SHO7.jpeg", 
    url:'#',
},
{
    photo: "PHOTO/SHO3.jpeg", 
    url:'#',
},
{
    photo: "PHOTO/SHO4.jpeg", 
    url:'#',
}
];


function render_popular_brand_photo(){
    for (let i=0;i<popular_brand_photo_data.length;i=i+1) {
    popular_brand_photo.innerHTML +=  `
    
    <div class="photo_1">
    <a href = "`+ popular_brand_photo_data[i].url +`">
        <img src= "`+ popular_brand_photo_data[i].photo +`">
    </a> 
    </div>`
}
}

render_popular_brand_photo()

let master_data = [ 
    { name:'Nike Air Force 1 Low Supreme White', id: 15, type: 'Giày', price: 4000000, photo:'PHOTO/SHO1.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 16, type: 'Giày', price: 3900000, photo:'PHOTO/SHO2.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low White', id: 17, type: 'Giày', price: 3000000, photo:'PHOTO/SHO3.jpeg', url: '#', rating: 2, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 18, type: 'Giày', price: 2900000, photo:'PHOTO/SHO4.jpeg', url: '#', rating: 1, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Retro High OG', id: 19, type: 'Giày', price: 2900000, photo:'PHOTO/SHO5.jpeg', url: '#', rating: 3, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Mid Chicago', id: 1, type: 'Áo', price: 10000000, photo:'PHOTO/JK1.jpeg', url: '#', rating: 3, stock: 200, madein: 'Trung Quốc', year: 2015},
    { name:'adidas Yeezy Boost 350 V2', id: 2, type: 'Áo', price: 20000000, photo:'PHOTO/JK2.jpeg', url: '#', rating: 2, stock: 100, madein: 'Trung Quốc', year: 2021},
    { name:'Jordan 3 Retro Pine Green', id: 3, type: 'Áo', price: 4500000, photo:'PHOTO/JK3.jpeg', url: '#', rating: 5, stock: 1000, madein: 'Trung Quốc', year: 2021},
    { name:'Yeezy x Gap Hoodie Blue', id: 4, type: 'Áo', price: 2300000, photo:'PHOTO/JK4.jpeg', url: '#', rating: 1, stock: 800, madein: 'Việt Nam', year: 2021},
    { name:'Yeezy x Gap Hoodie Brown', id: 5, type: 'Áo', price: 2400000, photo:'PHOTO/JK5.jpeg', url: '#', rating: 2, stock: 700, madein: 'Trung Quốc', year: 2019},
    { name:'Túi Michale Kors', id: 26, type: 'BAG2.jpeg', price: 1700000, photo:'PHOTO/SHO12.jpeg', url: '#', rating: 3, stock: 1466, madein: 'Lào', year: 2020},
    { name:'Túi Guccii', id: 27, type: 'BAG3.jpeg', price: 1900000, photo:'PHOTO/SHO13.jpeg', url: '#', rating: 1, stock: 1220, madein: 'Việt Nam', year: 2019},
    { name:'Túi Charles Keith', id: 28, type: 'BAG4.jpeg', price: 2000000, photo:'PHOTO/SHO14.jpeg', url: '#', rating: 1, stock: 1474, madein: 'Việt Nam', year: 2019},
    { name:'Túi Guccii Fall Collection', id: 29, type: 'BAG5.jpeg', price: 1850000, photo:'PHOTO/SHO1.jpeg', url: '#', rating: 2, stock: 535, madein: 'Việt Nam', year: 2021},
    { name:'Túi LV', id: 30, type: 'BAG1.jpeg', price: 1750000, photo:'PHOTO/SHO2.jpeg', url: '#', rating: 1, stock: 1654, madein: 'Bangladesh', year: 2021},
    { name:'G-Stock New Edition', id: 21, type: 'Đồng hồ', price: 2900000, photo:'PHOTO/GS1.jpeg', url: '#', rating: 1, stock: 350, madein: 'Trung Quốc', year: 2016},
    { name:'G-Stock 2019 Breakthough', id: 22, type: 'Đồng hồ', price: 2000000, photo:'PHOTO/GS2.jpeg', url: '#', rating: 1, stock: 1462, madein: 'Việt Nam', year: 2020},
    { name:'G-Stock Air', id: 23, type: 'Đồng hồ', price: 3000000, photo:'PHOTO/GS3.jpeg', url: '#', rating: 4, stock: 322, madein: 'Trung Quốc', year: 2021},
    { name:'G-Stock Fall Collection', id: 24, type: 'Đồng hồ', price: 2000000, photo:'PHOTO/GS4.jpeg', url: '#', rating: 5, stock: 269, madein: 'Trung Quốc', year: 2020},
    { name:'G-Stock 2000', id: 25, type: 'Đồng hồ', price: 1500000, photo:'PHOTO/GS5.jpeg', url: '#', rating: 5, stock: 1583, madein: 'Việt Nam', year: 2020},
    { name:'Adidas Harden Vol. 4', id: 33, type: 'Giày', price: 1900000, photo:'PHOTO/SHO5.jpeg', url: '#', rating: 5, stock: 445, madein: 'Campuchia', year: 2020},
    { name:'Adidas OZWEEGO TR', id: 34, type: 'Giày', price: 2000000, photo:'PHOTO/SHO6.jpeg', url: '#', rating: 5, stock: 496, madein: 'Campuchia', year: 2020},
    { name:'Adidas Energyfalcon', id: 35, type: 'Giày', price: 1850000, photo:'PHOTO/SHO7.jpeg', url: '#', rating: 1, stock: 1096, madein: 'Lào', year: 2021},
    { name:'Adidas Kaptir', id: 36, type: 'Giày', price: 1750000, photo:'PHOTO/SHO8.jpeg', url: '#', rating: 5, stock: 42, madein: 'Bangladesh', year: 2019},
    { name:'Adidas Continental 80', id: 37, type: 'Giày', price: 1650000, photo:'PHOTO/SHO9.jpeg', url: '#', rating: 4, stock: 1081, madein: 'Việt Nam', year: 2019},
    { name:'Adidas AlphaEdge 4D', id: 38, type: 'Giày', price: 1350000, photo:'PHOTO/SHO10.jpeg', url: '#', rating: 2, stock: 860, madein: 'Việt Nam', year: 2019}
];

let most_popular_sneaker_photo = document.getElementById("most_popular_sneaker");

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })

function render_most_popular_sneaker_photo(){
    for (let j=0;j<=4;j=j+1) {
    most_popular_sneaker_photo.innerHTML +=  `
    <a href = "`+ master_data[j].url +`">
        <div class="photo_2">
            <img src= "`+ master_data[j].photo +`">
            <Br>
            <div class="product_name">`+master_data[j].name+`
            </div>
            <div class="price_info">
                <span class="lowest_ask">Lowest Ask</span><br>
                <span class="stock">Stock `+ master_data[j].stock+`</span><br>
                <span class="product_price">`+ 
                formatter.format(master_data[j].price);+`
            </div>
        </div>
    </a> `
}
}
render_most_popular_sneaker_photo()

let trending_apparels = document.getElementById("trending_apparels");

function render_trending_apparels_photo(){
    for (let m=5;m<=9;m=m+1) {
    trending_apparels.innerHTML +=  `
    <a href = "`+ master_data[m].url +`">
        <div class="photo_2">
            <img src= "`+ master_data[m].photo +`">
            <Br>
            <div class="product_name">`+master_data[m].name+`
            </div>
            <div class="price_info">
                <span class="lowest_ask">Lowest Ask</span><br>
                <span class="stock">Stock `+ master_data[m].stock+`</span><br>
                <span class="product_price">`+ 
                formatter.format(master_data[m].price);+`
            </div>
        </div>
    </a> `
}
}
render_trending_apparels_photo()

let bag = document.getElementById("bag");

function render_bag_photo(){
    for (let n=9;n<=14;n=+1) {
    bag.innerHTML +=  `
    <a href = "`+ master_data[n].url +`">
        <div class="photo_2">
            <img src= "`+ master_data[n].photo +`">
            <Br>
            <div class="product_name">`+master_data[n].name+`
            </div>
            <div class="price_info">
                <span class="lowest_ask">Lowest Ask</span><br>
                <span class="stock">Stock `+ master_data[n].stock+`</span><br>
                <span class="product_price">`+ 
                formatter.format(master_data[n].price);+`
            </div>
        </div>
    </a> `
}
}
render_bag_photo()

let body = document.getElementById("body")

body.innerHTML += `
    <div id="main_theme"> 
        <div class="slogan">
            <span id="slogan_2"> WHAT's NOW & NEXT</span>
        </div>
    </div>
    <div id="main_data"> 
        <div id="main_data_left">
        </div>

        <div id="main_data_mid">
            <div class="main_title">
                <span class="Title">Popular Brands</span>
                <span class="see_all" style="float:right;color:rgb(0, 63, 0);font-size:18px;">See All <i class="fa fa-arrow-circle-right"></i>
                </span>
            </div>

            <div id="popular_brand_photo">
            </div>  
    
            <div class="main_title">
                <span class="Title">Most popular Sneakers <i class="fa fa-question-circle"></i></span>
                <span class="see_all" style="float:right;color:rgb(0, 63, 0);font-size:18px;">See All <i class="fa fa-arrow-circle-right"></i> </span>

            </div>
            <div class="main_data" id="most_popular_sneaker">
            </div>   

            <div class="main_title">
                <span class="Title">Trending Apparels <i class="fa fa-question-circle"></i></span>
                <span class="see_all" style="float:right;color:rgb(0, 63, 0);font-size:18px;">See All <i class="fa fa-arrow-circle-right"></i> </span>
            </div>
            <div class="main_data" id="trending_apparels">
            </div> 
            <div class="main_title">
                <span class="Title">Most Viewed Bags <i class="fa fa-question-circle"></i></span>
                <span class="see_all" style="float:right;color:rgb(0, 63, 0);font-size:18px;">See All <i class="fa fa-arrow-circle-right"></i> </span>
            </div>
            <div class="main_data" id="bag">  
            </div> 
            <div class="main_title">
                <span class="Title">Top Trading Watches <i class="fa fa-question-circle"></i></span>
                <span class="see_all" style="float:right;color:rgb(0, 63, 0);font-size:18px;">See All <i class="fa fa-arrow-circle-right"></i> </span>
            </div>
            <div class="main_data" id="watch">
            </div> 
            <div id="news_area">  
            </div>
        </div>
    </div>
`

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
    { name:'Túi Michale Kors', id: 26, type: 'Túi', price: 1700000, photo:'PHOTO/BAG2.jpeg', url: '#', rating: 1, stock: 1466, madein: 'Lào', year: 2020},
    { name:'Túi Guccii', id: 27, type: 'Túi', price: 1900000, photo:'PHOTO/BAG3.jpeg', url: '#', rating: 3, stock: 1220, madein: 'Việt Nam', year: 2019},
    { name:'Túi Charles Keith', id: 28, type: 'Túi', price: 2000000, photo:'PHOTO/BAG4.jpeg', url: '#', rating: 1, stock: 1474, madein: 'Việt Nam', year: 2019},
    { name:'Túi Guccii Fall Collection', id: 29, type: 'Túi', price: 1850000, photo:'PHOTO/BAG5.jpeg', url: '#', rating: 1, stock: 535, madein: 'Việt Nam', year: 2021},
    { name:'Túi LV', id: 30, type: 'Túi', price: 1750000, photo:'PHOTO/BAG1.jpeg', url: '#', rating: 1, stock: 1654, madein: 'Bangladesh', year: 2021},
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
    for (let n=10;n<=14;n=n+1) {
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

let watch = document.getElementById("watch");
function render_watch_photo(){
    for (let o=15;o<=19;o=o+1) {
    watch.innerHTML +=  `
    <a href = "`+ master_data[o].url +`">
        <div class="photo_2">
            <img src= "`+ master_data[o].photo +`">
            <Br>
            <div class="product_name">`+master_data[o].name+`
            </div>
            <div class="price_info">
                <span class="lowest_ask">Lowest Ask</span><br>
                <span class="stock">Stock `+ master_data[o].stock+`</span><br>
                <span class="product_price">`+ 
                formatter.format(master_data[o].price);+`
            </div>
        </div>
    </a> `
}
}
render_watch_photo()

let news_data=[
    {news:"Supreme Rocker T-shirt: Supreme Pick of the Week", url: "#",writer:"Nick Matthies - 10/09/2021"},
    {news:"Unlisted Leaf Pokémon Celebrations BreakX", url: "#", writer:"StockX - 10/06/2021"},
    {news:"No Curator | FAILE", url: "#", writer:"Kevin Kosanovich - 10/06/2021"},
    {news:"The Rip 10/04/2021", url: "#", writer:"Ian Semivan - 10/05/2021"},
    {news:"The Drop List 10/04/21 ", url: "#", writer:"Morgan Baylis - 10/05/2021"},
    {news:"Yeezy x GAP Hoodie: StockX Pick of the Week ", url: "#", writer:"Nick Matthies - 10/04/2021"},
]
let news=document.getElementById("news_area")

    news.innerHTML+= `
    <div id="news_area_left">
    <Span class="Title">Latest news</Span>
    <Span class="see_all" style="float:right; color:darkgreen">See All <i class="fa fa-arrow-circle-right"></i></Span> 
    </div>`


let news_area_left=document.getElementById("news_area_left")
function render_news_area_left(){
    for (let l in news_data){
    news_area_left.innerHTML +=`
    <a style="text-decoration:none;color:black" href="`+news_data[l].url+`">
        <div class="news">`+ news_data[l].news+`
            <br>`+
            news_data[l].writer+`
        </div>
    </a>`
    }
}
render_news_area_left()


    news.innerHTML+= `
    <div id="news_area_right">
    <Span style="font-size: 20px;">Release Calendar</Span>
    <Span class="see_all" style="float:right; color:darkgreen">See All <i class="fa fa-arrow-circle-right"></i></Span><br><br>`

let news_area_right=document.getElementById("news_area_right")
function render_news_area_right(){
    for (let p=20;p<=25;p=p+1){
    news_area_right.innerHTML +=`
    <a href="`+master_data[p].url+`">
        <div class="photo_3">
            <img src="`+ master_data[p].photo+ `">
            <span class="Shoe_info">`+master_data[p].name+`<br>
            Stock: `+master_data[p].stock+`<br>
            ASK: `+formatter.format(master_data[p].price);+`+ 
            </span>
        </div>
    </a>`
    }
}

render_news_area_right()

  
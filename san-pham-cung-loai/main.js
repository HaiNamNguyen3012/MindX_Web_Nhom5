let data = [
    { name:'Nike Air Force 1 Low Supreme White', id: 15, type: 'Giày', price: 4000000, photo:'../image/tải xuống.jfif', url: '../information/information.html', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 16, type: 'Giày', price: 3900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO2.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low White', id: 17, type: 'Giày', price: 3000000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO3.jpeg', url: '#', rating: 2, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 18, type: 'Giày', price: 2900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO4.jpeg', url: '#', rating: 1, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Retro High OG', id: 19, type: 'Giày', price: 2900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO5.jpeg', url: '#', rating: 3, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Adidas Harden Vol. 4', id: 33, type: 'Giày', price: 1900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO5.jpeg', url: '#', rating: 5, stock: 445, madein: 'Campuchia', year: 2020},
    { name:'Adidas OZWEEGO TR', id: 34, type: 'Giày', price: 2000000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO6.jpeg', url: '#', rating: 5, stock: 496, madein: 'Campuchia', year: 2020},
    { name:'Adidas Energyfalcon', id: 35, type: 'Giày', price: 1850000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO7.jpeg', url: '#', rating: 1, stock: 1096, madein: 'Lào', year: 2021},
    { name:'Adidas Kaptir', id: 36, type: 'Giày', price: 1750000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO8.jpeg', url: '#', rating: 5, stock: 42, madein: 'Bangladesh', year: 2019},
    { name:'Adidas Continental 80', id: 37, type: 'Giày', price: 1650000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO9.jpeg', url: '#', rating: 4, stock: 1081, madein: 'Việt Nam', year: 2019},
    { name:'Adidas AlphaEdge 4D', id: 38, type: 'Giày', price: 1350000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO10.jpeg', url: '#', rating: 2, stock: 860, madein: 'Việt Nam', year: 2019},
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
    { name:'G-Stock 2000', id: 25, type: 'Đồng hồ', price: 1500000, photo:'PHOTO/GS5.jpeg', url: '#', rating: 5, stock: 1583, madein: 'Việt Nam', year: 2020}
]

const main = document.querySelector('.main');
const pageEls = document.querySelectorAll('.list-navbar');
function render_type(){
    main.innerHTML += `
        <div class="type">
            <div class="text-for-type">
                    <h1>Sneaker</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia! Corrupti sunt, consectetur porro voluptatibus obcaecati doloremque ipsam deserunt repellendus iste aliquid perferendis a molestiae?</p>
            </div>
        </div>
    `;
}
render_type();

function render_content(){
    main.innerHTML += `
        <div class="content">
    
        </div>
    `
}

render_content();

function render_filter(){
    document.querySelector('.content').innerHTML += `
    <div class="filter">
        <i class="fas fa-filter fa-2x">Bộ lọc tìm kiếm</i>
        <div class="filter-group">
            <h2>Nơi Bán</h2>
            <input type="checkbox" id="noi-ban1" name="noi-ban1" value="Ha Noi">
            <label for="noi-ban1"> Hà Nội </label><br>
            <input type="checkbox" id="noi-ban2" name="noi-ban2" value="Sai Gon">
            <label for="noi-ban2"> Sài Gòn </label><br>
            <input type="checkbox" id="noi-ban3" name="noi-ban3" value="Da Nang">
            <label for="noi-ban3"> Đà Nẵng </label><br>
            <input type="checkbox" id="noi-ban4" name="noi-ban4" value="Hai Phong">
            <label for="noi-ban4"> Hải Phòng </label><br>
            <input type="checkbox" id="noi-ban5" name="noi-ban5" value="Da Lat">
            <label for="noi-ban5"> Đà Lạt </label><br>
        </div>
        <div class="filter-group">
            <h2>Loại sản phẩm</h2>
            <input type="checkbox" id="giay-bong-da" name="giay-bong-da" value="giay-bong-da">
            <label for="giay-bong-da"> Giày bóng đá </label><br>
            <input type="checkbox" id="giay-bong-ro" name="giay-bong-ro" value="giay-bong-ro">
            <label for="giay-bong-ro"> Giày bóng rổ </label><br>
            <input type="checkbox" id="giay-di-hang-ngay" name="giay-di-hang-ngay" value="giày đi hàng ngày">
            <label for="giay-di-hang-ngay"> Giày đi hàng ngày </label><br>
        </div>
        <div class="filter-group">
            <h2>Đánh giá</h2>
            <input type="radio" id="five" name="drone" value="five" checked>
            <label for="five">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
            </label>
            <br>
            <input type="radio" id="huey" name="drone" value="huey">
            <label for="huey">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
            </label>
            <br>
            <input type="radio" id="huey" name="drone" value="huey">
            <label for="huey">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
            </label>
            <br>
            <input type="radio" id="huey" name="drone" value="huey">
            <label for="huey">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
            </label>
            <br>
            <input type="radio" id="huey" name="drone" value="huey">
            <label for="huey">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
            </label>
        </div>
    </div>
    `
}
render_filter();

function render_product(){
    document.querySelector('.content').innerHTML += `
        <div class="product">
    
        </div>
    `
}
render_product();
function render_product_group(){
    for(let i = 0; i < 11; i++){
        document.querySelector('.product').innerHTML += `
            <a class = "product-group" href= '`+data[i].url+`'>
                <img src='`+data[i].photo+`' alt="" srcset="">
                <p>`+data[i].name+`</p>
                <p>Stock `+data[i].stock+`</p>
                <p>Price `+data[i].price+`</p>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span> 
            </a>
        ` 
    }
}
render_product_group();
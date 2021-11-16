let data = [
    { name:'Nike Air Force 1 Low Supreme White', id: 15, type: 'Giày', price: 4000000, photo:'../image/tải xuống.jfif', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 16, type: 'Giày', price: 3900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO2.jpeg', url: '#', rating: 5, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low White', id: 17, type: 'Giày', price: 3000000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO3.jpeg', url: '#', rating: 2, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Nike Air Force 1 Low Supreme Black', id: 18, type: 'Giày', price: 2900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO4.jpeg', url: '#', rating: 1, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Jordan 1 Retro High OG', id: 19, type: 'Giày', price: 2900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO5.jpeg', url: '#', rating: 3, stock: 100, madein: 'Mỹ', year: 2019},
    { name:'Adidas Harden Vol. 4', id: 33, type: 'Giày', price: 1900000, photo:'../GROUP WORK 1ST PAGE/PHOTO/SHO5.jpeg', url: '#', rating: 5, stock: 445, madein: 'Campuchia', year: 2020}
];

const main = document.querySelector('.main')
function render_details(){
    main.innerHTML += `
        <div class="details">
            <div class="left">
                <h2>Product Name: `+data[1].name+`</h2>
                <div class="button">
                    <a href="#">
                        <p>100% Authentic</p>
                    </a>
                    <a href="#">
                        <p>Condition: New</p>
                    </a>
                </div>
                <img src="`+data[0].photo+`" alt="">
            </div>
            <div class="right">
                <div class="rating">
                    <a href="#">
                        <i class="fa fa-plus-square" style="font-size:24px">
                            Thêm sản phẩm
                        </i>
                    </a>
                    <a href="#">
                        <i class="far fa-heart" style="font-size:24px">
                            Yêu thích sản phẩm
                        </i>
                    </a>
                </div>
                <div class="size">
                    <select name="products" id="products">
                        <option value="">Chọn size giày của bạn</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                    </select>

                    <div class="buy">
                        <button type="submit">
                            Buy or Bid
                        </button>
                        <div class="sizeAndPrice">
                            <p>Size: </p>
                            <h2>200$</h2>
                        </div>
                    </div>
                    <div class="sell">
                        <button type="submit">
                            Sell or Ask
                        </button>
                        <div class="sizeAndPrice">
                            <p>Size: </p>
                            <h2>200$</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
render_details();

function render_relate_product(){
    main.innerHTML += `
        <div class="relate-product">
            <span>
                Related Product
            </span>
            <div class = "product-group">
                
            </div>
        </div>
    `
}

render_relate_product();

function render_product(){
    for(let i = 1; i < 6; i++){
        document.querySelector('.product-group').innerHTML += `
        <a href="" class="product">
            <div>
                <img src="`+data[i].photo+`" alt="" srcset="">
                <p>150.000VND</p>
                <p>Đã bán 1000</p>
            </div>
        </a>
        `
    }
}
render_product();

function product_details(){
    main.innerHTML += `
    <div class="product-details">
                <span>
                    Product Details
                </span>
                <div class="detail">
                    <div class="left">
                        <span class="detail-group">
                            <p>Style:</p>
                            <p>`+data[0].name+`</p>
                        </span>
                        <span class="detail-group">
                            <p>Type:</p>
                            <p>`+data[0].type+`</p>
                        </span>
                        <span class="detail-group">
                            <p>Retail:</p>
                            <p>`+data[0].price+`</p>
                        </span>
                        <span class="detail-group">
                            <p>Release year:</p>
                            <p>`+data[0].year+`</p>
                        </span>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                    </div>
                    <div class="right">
                        <p>Product Description</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, culpa!</p>
                    </div>
                </div>
            </div>
    `
}
product_details();
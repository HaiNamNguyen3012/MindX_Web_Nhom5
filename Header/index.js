let page = document.getElementById('app');

let header_item_list = [
    {
        url: '../GROUP WORK 1ST PAGE/STOCKX.html',
        classes: 'header__navbar-item-sparate',
        title: 'StockX',
    },
 
  
]

let header_input = [
    {
        type: 'text',
        classes: 'header__search-input',
        placeholder: 'Search for brand, color, ect.'
    }
]



let header_Item_right= [

    {
        url: 'https://stockx.com/sneakers',
        classes: 'header__navbar-item header__navbar-item-list',
        title: 'Browse',

    },

    {
        url: 'https://stockx.com/news/',
        classes: 'header__navbar-item',
        title: 'News',
    },


    {
        url: 'https://stockx.com/about/how-it-works/',
        classes: 'header__navbar-item',
        title: 'About',
    },


    {
        url: 'https://stockx.com/help/fr-FR/home',
        classes: 'header__navbar-item',
        title: 'Help',
    },


    {
        url: '../login-form/login.html',
        classes: 'header__navbar-item',
        title: 'Login',
    },


    {
        url: '../register-form/register.html',
        classes: 'header__navbar-item',
        title: ' Sign Up',
    },


    {
        url: 'https://stockx.com/sell',
        classes: 'header__navbar-item header__navbar-item-border',
        title: 'Sell',
    },
]

 
let header_down = [

    {
        url: '../san-pham-cung-loai/index.html ',
        classes: 'list-navbar ',
        title: 'Sneaker '
    },
    {
        url: '../san-pham-cung-loai/index.html ',
        classes: 'list-navbar ',
        title: 'Streetwear '
    },
    {
        url: '../san-pham-cung-loai/index.html ',
        classes: 'list-navbar ',
        title: 'Electronics '
    },
    {
        url: '../san-pham-cung-loai/index.html ',
        classes: 'list-navbar ',
        title: ' Tranding Cards '
    },
    {
        url: '../san-pham-cung-loai/index.html ',
        classes: 'list-navbar ',
        title: 'Collectibles '
    },
    {
        url: '../san-pham-cung-loai/index.html',
        classes: 'list-navbar ',
        title: 'Handbags '
    },
    {
        url: '../san-pham-cung-loai/index.html ',
        classes: 'list-navbar ',
        title: 'Watches '
    },
]


// let menu2 = [

//     {
//         url: '#',
//         title: 'Adidas  ',
//     },
//     {
//         url: '#',
//         title: ' Air Jordan ',

//     },
//     {
//         url: '#',
//         title: 'Nike ',

//     },
//     {
//         url: '#',
//         title: ' New Balance',

//     },
//     {
//         url: '#',
//         title: 'Reebok ',

//     },
//     {
//         url: '#',
//         title: ' Other Brands',

//     },
//     {
//         url: '#',
//         title: '  Luxury Brands',

//     },
//     {
//         url: '#',
//         title: 'Collestions ',

//     },
//     {
//         url: '#',
//         title: 'releases ',

//     }
// ]




function header_Logo(){
    for (let i = 0; i < header_item_list.length; i++) {
        document.getElementById('app').innerHTML += 
        `
        <header class="header"> 
            <div class='grid'>
                <nav class="header__navbar">
                    <ul class="header__navbar-list">
                        <a href="`+header_item_list[i].url +`">
                                <h2 class="`+header_item_list[i].classes+`"> `+header_item_list[i].title+` </h2>      
                        </a>
                    </ul>  
                </nav>
            </div>
        </header>
        `
    }


}
header_Logo();


function header_Input(){
   
    for (let i = 0; i < header_input.length; i++) {
    document.querySelector('.header__navbar ').innerHTML +=
    `
    <div class="header-with-search">     
        <div class="header__search">
                <input type="`+ header_input[i].type+` " class="`+ header_input[i].classes+`" placeholder=" `+ header_input[i].placeholder+` ">  
        </div>
    </div>
    `
    }
}
header_Input();




    
    function header_Item_Right(){   
            for (let i = 0; i < header_Item_right.length; i++) {
                document.querySelector('.header__navbar').innerHTML +=
                `
                <ul class="header__navbar-list">
                    <a href="`+ header_Item_right[i].url+`">
                        <li class="`+ header_Item_right[i].classes+`"> `+ header_Item_right[i].title+ `     
                              
                        </li>
                </a>         
        </ul>
                `

            }
    }
    header_Item_Right();


function render_header_down(){
        document.getElementById('app').innerHTML +=
        `
        <div class="list-menu">
            <div class="grid__list-menu">
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Sneaker</a></span>
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Streetwear</a></span>
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Electronics</a></span>
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Tranding Cards</a></span>
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Collectibles</a></span>
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Handbags</a></span>
                <span> <a href="../san-pham-cung-loai/index.html" class="list-navbar"> Watches</a></span>   
            </div>
        </div>   
        `     
        
}
render_header_down();





    function header_List_Menu(){
      
        document.querySelector('.header__navbar-item header__navbar-item-list') += 
        `
        <ul class="sub-menu">    
         <div class="menu"> 
                <li > <a href="#" > Sneaker</a>
                <ul class="sub-menu2">
                                <li> <a href="#"> Adidas</a>  </li>
                                <li> <a href="#"> Air Jordan</a> </li>
                                <li> <a href="#"> Nike</a> </li>
                                <li> <a href="#"> New Balance</a> </li>
                                <li> <a href="#"> Reebok</a> </li>
                                <li> <a href="#"> Other Brands</a> </li>
                                <li> <a href="#"> Luxury Brands</a> </li>
                                <li> <a href="#"> Collestions</a> </li>
                                <li> <a href="#"> releases</a> </li>
                   </ul>                                                                                                         
                </li>
           </div> 
  
        <div class="menu2">
                <li> <a href="#"> Streetwear</a>
                        <ul class="sub-menu3"> 
                                <li> <a href="#"> Artist Merch</a> </li>
                                <li> <a href="#"> ASSC</a> </li>
                                <li> <a href="#"> BAPE</a> </li>
                                <li> <a href="#"> Chrome Hearts</a> </li>
                                <li> <a href="#"> Drew House</a> </li>
                                <li> <a href="#"> Eric Emanual</a> </li>
                                <li> <a href="#"> Essentials</a> </li>
                                <li> <a href="#"> Fear Of God</a> </li>
                                <li> <a href="#"> KAWS</a> </li>
                                <li> <a href="#"> Kith</a> </li>
                                <li> <a href="#"> New Era</a> </li>
                                <li> <a href="#"> Nike Apparel</a> </li>   
                        </ul>
                </li>
        </div>
  
  
        <div class="menu3"> 
                <li> <a href="#"> Collectibles</a>
                        <ul class="sub-menu4"> 
                                <li> <a href="#"> Electronics</a> </li>
                                <li> <a href="#"> Trading Cards</a> </li>
                                <li> <a href="#"> KAWS</a> </li>
                                <li> <a href="#"> Breadbrick</a> </li>
                                <li> <a href="#"> Art Print</a> </li>
                                <li> <a href="#"> LEGO</a> </li>
                                <li> <a href="#"> Funko Pop!</a> </li>
                                <li> <a href="#"> Action Figures</a> </li>
                                <li> <a href="#"> Daniel Arsham</a> </li>
                                <li> <a href="#"> Takashi</a> </li>
                                <li> <a href="#"> Comic Book</a> </li>
                        </ul>
                </li>
        </div>
  
        <div class="menu4"> 
                <li> <a href="#"> Handbags</a>
                        <ul class="sub-menu5"> 
                                <li> <a href="#"> Louis Vuitton</a> </li>
                                <li> <a href="#"> Telfar</a> </li>
                                <li> <a href="#"> GUCCI</a> </li>
                                <li> <a href="#"> MCM</a> </li>
                                <li> <a href="#">Chanel</a> </li>
                                <li> <a href="#"> Dior</a> </li>
                                <li> <a href="#"> Balenciaga</a> </li>
                                <li> <a href="#">Burberry</a> </li>
                                <li> <a href="#"> Hermes</a> </li>         
                                <li> <a href="#"> Varsace</a> </li>
                                
                        </ul>
                </li>
        </div>
  
  
        <div class="menu5"> 
                <li> <a href="#"> Watches</a>
                        <ul class="sub-menu6"> 
                                <li> <a href="#"> Rolex</a> </li>
                                <li> <a href="#"> Casio G-Shock</a> </li>
                                <li> <a href="#"> Apple</a> </li>
                                <li> <a href="#"> Seiko</a> </li>
                                <li> <a href="#">Timex</a> </li>
                                <li> <a href="#"> Tudor</a> </li>
                                <li> <a href="#"> Omega</a> </li>
                                <li> <a href="#">Pernarel</a> </li>
                                <li> <a href="#"> Tag Heuer</a> </li>          
                        </ul>
                </li>
        </div>
  </ul>        
        
        `
    }
    header_List_Menu();
   

    function list_Menu(){

        document.querySelector('.header__navbar-item header__navbar-item-list') += 
        `
        <ul class="sub-menu">    
        <div class="menu"> 
                <li class="them-Vao"> <a href="#" > Sneaker</a>
                <ul class="sub-menu2">
                                <li> <a href="#"> Adidas</a>  </li>
                                <li> <a href="#"> Air Jordan</a> </li>
                                <li> <a href="#"> Nike</a> </li>
                                <li> <a href="#"> New Balance</a> </li>
                                <li> <a href="#"> Reebok</a> </li>
                                <li> <a href="#"> Other Brands</a> </li>
                                <li> <a href="#"> Luxury Brands</a> </li>
                                <li> <a href="#"> Collestions</a> </li>
                                <li> <a href="#"> releases</a> </li>
                   </ul>                                                                                                         
                </li>
        </div> 

        <div class="menu2">
                <li> <a href="#"> Streetwear</a>
                        <ul class="sub-menu3"> 
                                <li> <a href="#"> Artist Merch</a> </li>
                                <li> <a href="#"> ASSC</a> </li>
                                <li> <a href="#"> BAPE</a> </li>
                                <li> <a href="#"> Chrome Hearts</a> </li>
                                <li> <a href="#"> Drew House</a> </li>
                                <li> <a href="#"> Eric Emanual</a> </li>
                                <li> <a href="#"> Essentials</a> </li>
                                <li> <a href="#"> Fear Of God</a> </li>
                                <li> <a href="#"> KAWS</a> </li>
                                <li> <a href="#"> Kith</a> </li>
                                <li> <a href="#"> New Era</a> </li>
                                <li> <a href="#"> Nike Apparel</a> </li>   
                        </ul>
                </li>
        </div>


        <div class="menu3"> 
                <li> <a href="#"> Collectibles</a>
                        <ul class="sub-menu4"> 
                                <li> <a href="#"> Electronics</a> </li>
                                <li> <a href="#"> Trading Cards</a> </li>
                                <li> <a href="#"> KAWS</a> </li>
                                <li> <a href="#"> Breadbrick</a> </li>
                                <li> <a href="#"> Art Print</a> </li>
                                <li> <a href="#"> LEGO</a> </li>
                                <li> <a href="#"> Funko Pop!</a> </li>
                                <li> <a href="#"> Action Figures</a> </li>
                                <li> <a href="#"> Daniel Arsham</a> </li>
                                <li> <a href="#"> Takashi</a> </li>
                                <li> <a href="#"> Comic Book</a> </li>
                        </ul>
                </li>
        </div>

        <div class="menu4"> 
                <li> <a href="#"> Handbags</a>
                        <ul class="sub-menu5"> 
                                <li> <a href="#"> Louis Vuitton</a> </li>
                                <li> <a href="#"> Telfar</a> </li>
                                <li> <a href="#"> GUCCI</a> </li>
                                <li> <a href="#"> MCM</a> </li>
                                <li> <a href="#">Chanel</a> </li>
                                <li> <a href="#"> Dior</a> </li>
                                <li> <a href="#"> Balenciaga</a> </li>
                                <li> <a href="#">Burberry</a> </li>
                                <li> <a href="#"> Hermes</a> </li>         
                                <li> <a href="#"> Varsace</a> </li>
                                
                        </ul>
                </li>
        </div>


        <div class="menu5"> 
                <li> <a href="#"> Watches</a>
                        <ul class="sub-menu6"> 
                                <li> <a href="#"> Rolex</a> </li>
                                <li> <a href="#"> Casio G-Shock</a> </li>
                                <li> <a href="#"> Apple</a> </li>
                                <li> <a href="#"> Seiko</a> </li>
                                <li> <a href="#">Timex</a> </li>
                                <li> <a href="#"> Tudor</a> </li>
                                <li> <a href="#"> Omega</a> </li>
                                <li> <a href="#">Pernarel</a> </li>
                                <li> <a href="#"> Tag Heuer</a> </li>          
                        </ul>
                </li>
        </div>
</ul>        
        `
}
list_Menu();

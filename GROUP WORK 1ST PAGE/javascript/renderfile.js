let popular_brand_photo = document.getElementsByClassName("popular_brand_photo");

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
    popular_brand_photo.innerHTML +=  `
    <div class = "photo_1">
        

    </div>`;
    for (let i = 0;i<popular_brand_photo_data.length;i=i+1) {
        document.getElementsByClassName("photo_1") += `
        <a href = "`+ popular_brand_photo_data[i].url +`">
        <img src= "`+ popular_brand_photo_data[i].photo +`">
        </a> 
        `;
    }
}
render_popular_brand_photo();
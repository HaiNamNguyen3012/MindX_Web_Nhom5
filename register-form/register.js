const main = document.querySelector('.main');

function render_register(){
    main.innerHTML += `
    <div class="noi__dung">
    <div class="form" >
        <h2>Trang Đăng Ký </h2>
        <form action="">

                <div class="name"> 
                    <input type="text" placeholder="Họ">
                    <input type="text" placeholder="Tên">
                </div>
              
                <div class="input-form">
                    <span>Tên Người Dùng</span>
                    <input type="text">    
                </div>

                <div class="input-form"> 
                    <span>Mật Khẩu</span>
                    <input type="password">
                </div>

                <div class="input-form"> 
                    <span> Nhập Lại Mật Khẩu</span>
                    <input type="password">
                </div>

                <div class="check-form"> 
                    <input type="checkbox" > 
                    <span>Nhớ Đăng Ký</span>
                    <button type="submit" ><span class="login"> Đăng Ký</span></button>    
                </div>

                <div class="link-form"> 
                    <span> Bạn Chưa Có Tài Khoản? </span>
                    <a href="#">Đăng Ký</a>
                </div>
              
            </form>

          
                <h3>Đăng Ký Bằng Mạng Xã Hội</h3>
                <ul class="icon-form">
                    <li><i class="fab fa-facebook-f"></i></li>       
                    <li><i class="fab fa-google"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                </ul>
          </div>
     </div> 
    `
}

render_register();
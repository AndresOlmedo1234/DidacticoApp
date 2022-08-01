import './login.css';
import imagen1 from './imagenes/imagen1.png'
import imagen2 from './imagenes/imagen2.png'

function Login(){
    return(
        
<div class="container">
  <img src= {imagen2} class="imagen2" />  
    <div class="col align-self-center">
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                              <img />
                        </div>
                    </div>

                    <div class="d-flex justify-content-center form_container">
                        <form>
                            <label class="form-label">CORREO ELECTRONICO</label>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user" value="" placeholder="username"/>
                            </div>
                            <label class="form-label">CONTRASEÑA</label>

                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" class="form-control input_pass" value="" placeholder="password"/>
                            </div>
                            
                            <div class="d-flex justify-content-center mt-3 login_container">
                                <button type="button" name="button" class="btn login_btn">Login</button>
                            </div>
                        </form>
                    </div>          
                    <div class="mt-4">
                        <div class="d-flex justify-content-center links">
                        <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
                   <img src={imagen1}  className="imagen1"/>
                
</div>

    );
}

export default Login;
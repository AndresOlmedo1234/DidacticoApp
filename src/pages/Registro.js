import './Registro.css'

function Registro(){
    return(
    <form className='registro_form'>
        <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">CORREO ELECTRONICO</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">CONTRASEÑA</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">REPETIR CONTRASEÑA</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <br></br>


        <button type="submit" className='btn-registro'>INSCRIBIRSE</button>
    </form>
    );

}
export default Registro;
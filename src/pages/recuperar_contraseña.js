import './Registro.css'

function RecuperarContraseña(){
    return(
        <form className='registro_form'>
        <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">CORREO ELECTRONICO</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <br></br>
        <button type="submit" className='btn-registro'>ENVIAR</button>
    </form>
    );
}

export default RecuperarContraseña;
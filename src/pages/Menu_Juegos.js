import './Menu_Juegos.css'

import manzana from './imagenes/manzana.png'
import libro from './imagenes/libro.png'
import carro from './imagenes/carro.png'
import trofeo from './imagenes/trofeo.png'
import candado from './imagenes/candado.png'
import atras from './imagenes/atras.png'
function MenuJuegos(){
    return(
        
        <div className='container'>   
             <div class="container-btn1">
             <button type="text" className='btn-vocabulario'><b>VOCABULARIO</b><img className='imagen_manzana' src={manzana}/></button>
            </div>
            <br></br>

            <div class="container-btn2">
            
                <button type="text" className='btn-oraciones'><img className='imagen_candado1' src={candado}/><b>ORACIONES</b><img className='imagen_libro' src={libro}/></button>
            </div>
            <br></br>

            <div class="container-btn3">
            
                <button type="text" className='btn-carrera'><img className='imagen_candado2' src={candado}/><b>CARRERA</b><img className='imagen_carro' src={carro}/></button>
                <span class="input-group-addon"></span>
            </div>
            <br></br>

            <div class="container-btn4">
           
                <button type="text" className='btn-trofeos'> <img className='imagen_candado3' src={candado}/><img className='imagen_trofeo' src={trofeo}/><b>TROFEO</b>
               
                </button>
                
            </div>
            <img className='imagen_atras' src={atras}/>
        </div>
       

    );
}

export default MenuJuegos;
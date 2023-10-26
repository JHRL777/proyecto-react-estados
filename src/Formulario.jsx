
import {useState} from 'react'

function Formulario(props) {

    const [nota, setNota] = useState('')
    
    
    const tomarNota = (e) => setNota(e.target.value);

    const enviar =(e)=>{
        e.preventDefault();
        const numeroRobots = parseInt(nota, 10);
        props.onEnviar(numeroRobots);
        setNota('');
    }
    
  return (
    <div>
       <h2 className='text-xl m-3' htmlFor="">Escribe el numero de robot a mostrar</h2>
        <form className='m-3 flex gap-3' onSubmit={enviar}>
         
        <input  className='border w-24 p-3 rounded-xl'
        name='Notas'
        onChange={tomarNota}
        value={nota}
        placeholder='Escribir'
        type="number" 
        />
        <button type="submit" className='bg-blue-400 p-2 rounded-xl text-xl hover:text-white'>Robots</button>
        </form>
      
    </div>
  )
}

export default Formulario

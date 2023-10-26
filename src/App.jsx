import { useState } from 'react'
import './App.css'
import Formulario from './formulario'

function App() {
  const [count, setCount] = useState(0)
  const [numeroRobots, setNumeroRobots] = useState(0);

  const agregarNota = (numeroRobots) => {
   
    setNumeroRobots(numeroRobots);
  };
  const arrayVacia= []

  


    for(let i= 1; i<= numeroRobots;i++){
      const obj = {
          id: {i},
          img:`https://robohash.org/${i}`,
          name:`Robot ${i}`,
          descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eaque nemo ea recusandae  blanditiis fuga laudantium velit, omnis placeat,facilis quia a sapiente voluptates veritatis delectus dolorem aut, possimus officiis id.'
      }

    arrayVacia.push(obj)
    }
    

 

  
  


  return (
    <>
      <header className='bg-blue-500 flex justify-center items-center container  mx-auto p-2 mb-2 '>
        <div className='text-white text-[2rem] font-mono font-medium'>JERL</div>
      </header>
      <main className='container mx-auto'>
        <button className='bg-blue-300 p-3 rounded-xl text-[20px] text-white  block m-auto' onClick={()=> setCount(count+1)}>Contar {count}</button>
        {/* Componente*/}
        <Formulario onEnviar={agregarNota} />
        
        <div  className='grid grid-cols-1 mt-4 gap-2 sm:grid-cols-3'>
           {numeroRobots <= 0 ? (<p className='text-[1rem] text-red-500 '>No ha robots para mostrar</p>):(
              arrayVacia.map((array) =>(
                <div  key={array.id.i} className='flex flex-col gap-3 border shadow-md p-2 hover:bg-blue-200' >
                <img src={array.img} alt="robot" />
                <p>{array.name}</p>
                <p >{array.descripcion}</p>
              </div>
              ))
            )}  

          
          
        </div>
        
      </main>
    </>
  )
}

export default App

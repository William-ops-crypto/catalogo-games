import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import'./App.css';


import api from './services/api';




function App() {
  const[input,setInput] = useState('');
  const[id,setId] = useState([]);
  
  async function getGameDetails(id){


    console.log(id)
    try{
      const response = await api.get(`games/${id}`);
      //const response = await api.get(`${input}`);
       setInput("");
       console.log(response.data);
    }catch{
      alert ("Ops nada encontrado")
      setInput("")
      
      }
    }
  
  async function handleSeach(){
   
      if(input === "" ){
      alert("Preencha o campo")
      return;}
      
    try{
      const response = await api.get(`buscar/title?title=${input}`);
      setId(response.data);
      setInput("");
      console.log(response);
      console.log(response.data);
      
    }catch{
        alert ("Ops nada encontrado")
      setInput("")
      }
    }

  async function handleGet(rota){

    try{
      const response = await api.get(`lists/${rota}/games`);
      //const response = await api.get(`${input}`);
      setId(response.data)
      setInput("");
      console.log(response.data);
    }catch{
      alert ("Ops nada encontrado")
      setInput("")
      }
    }

  function reloadPage(){
    window.location.reload();
    } 
  function render() {

    const ListaJogos =  id.map   (jogo => 
    <main className="main" key={jogo.id}>
      <ul >
        <div ></div>
        <h2>Nome : {jogo.title }</h2>
        <img src={jogo.imgUrl} alt="imagem" width={80}   />
        <h5> {jogo.platforms} </h5>
        <h5> Ano de Lançamento : {jogo.gameYear} </h5>
        <span> Descrição : { jogo.shortDescription} </span>
      
          <button   onClick={() => getGameDetails(jogo.id)}>
          Mais detalhes 
          </button>  
      </ul>
    </main>
     );
      return ListaJogos;
    }
    
  return (

      
   
    <div className= "body">
      <div className="head">
        <button onClick={() => reloadPage()}>
        Início
        </button>
        <button onClick={() => handleGet(1)}>
        Aventura e RPG
        </button>
        <button onClick={() => handleGet(2)}>
        Jogos de plataforma
        </button>
      </div>


    
    <div className="container">
      <h1 className= "title">Lista de Jogos</h1>
      

      <div className="containerInput"  >
        <input
        type= "text"
        placeholder="Buscar jogo"
        value={input}  
        onChange={(e) => setInput(e.target.value)}
        
        >
          </input>
          <button className="buttonSearch" 
          onClick={()=>handleSeach()} type="submit"
         
          >
            <FiSearch size={25} color= "#Black"/>

          </button>

      </div>
    

      
      
      
      <div className='card'    >

      
      {render()}

      
      
      
      
      </div>

        
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    </div>


      <div className='footer'>

        <h5>
        By: Will !! WhatsApp : 21 995915256
          </h5>

      </div>


      
    </div>
    
     
        
      
    
  );



  

}

export default App;

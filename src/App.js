import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import'./App.css';


import api from './services/api';
import apiget from './services/apiget';









function App() {
  
  
  
  

 

  
  


  const[input,setInput] = useState('');
  const[id,setId] = useState([]);
  
 


  

  
  
  async function handleSeach(){
   
   

    if(input === "" ){
      alert("Preencha o campo")
      return;}
      
      
      

  


    

    try{
      const response = await api.get(`title?title=${input}`);
      //const response = await api.get(`${input}`);
  
      
      setId(response.data);
      
     
      setInput("");
      
      
      console.log(response);
      console.log(response.data);

     
     
     


     

    }catch{


     alert ("Ops nada encontrado")
      setInput("")
      
      
     
      


    }
  //  if(id.title === id[0].title  ){
        
    //  return;
      
       
   // }else{
     
    //  refreshPage()
     // setInput("")
      
        
    //}

  
 

  }



  async function handleGet(){
   
   

   

  


    

    try{
      const response = await apiget.get(`1/games`);
      //const response = await api.get(`${input}`);
  
      
      setId(response.data)
     
      setInput("");
      
      
      console.log(response.data);

    
     
     


     

    }catch{


     alert ("Ops nada encontrado")
      setInput("")
      
      
     
      


    }

    
 

  }

  async function handleGet2(){
   
   

   

  


    

    try{
      const response = await apiget.get(`2/games`);
      //const response = await api.get(`${input}`);
  
      
      setId(response.data)
     
      
      
      
      console.log(response.data);
      console.log(response.data);

     //this.setState(response.data);
     
     


     

    }catch{


     alert ("Ops nada encontrado")
      setInput("")
      
      
      
     
      


    }


  }



  function recarregarAPagina(){
    window.location.reload();
} 

  
    

    
    

  function render() {

    

    
    
    
    

    const ListaJogos = id.map   (jogo => 
      
      
      
      <main className="main" key={jogo.id}>
        <ul >
       <div>
        key
       </div>
       
         
       <h2>Nome : {jogo.title }</h2>
  
       
       
       <img src={jogo.imgUrl} alt="imagem" width={80}   />
  
  
       
       <h5>
          {jogo.platforms} 
       </h5>
  
       <h5>
         Ano de Lançamento : {jogo.gameYear} 
  
       </h5>
  
       
  
       <span>
         Descrição : { jogo.shortDescription} 
       </span>
  
  
      
  
  
     </ul>
     </main>
     
      
  );



 
      
  return ListaJogos;
  
    



}
    


  function button(){
    
    
    
    if(handleSeach() === true){
       render();
      
      
    }
    
    
    
    
  }

  function buttonhome(){

    
    
    if(handleGet() === true){
      
       render();
      
      
    }
    
    
    
  }
  function buttonhome2(){
    
    if(handleGet2() === true){
       render();
      
      
    }
    
    
    
  }
  
  
  
  











    return (

   
    <div className= "body">
       <div className="head">


        <button onClick={() => recarregarAPagina()}>
        Início
        </button>
        <button onClick={() => buttonhome()}>
        Aventura e RPG
        </button>
        <button onClick={() => buttonhome2()}>
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
          onClick={()=>button()} type="submit"
         
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

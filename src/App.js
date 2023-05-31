import { state,useEffect, useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import'./styles.css';


import api from './services/api';
import { render } from '@testing-library/react';


function refreshPage() {
  window.location.reload(false);

}

function mostra_oculta(){

  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }

}






function App() {
  
  
  
  

 // const { jogos } =this.state;

  
  


  const[input,setInput] = useState('');
  const[id,setId] = useState(['']);
 


  

  
  
  async function handleSeach(){
   
   

    if(input === "" ){
      alert("Preencha o campo com Id")
      return;}


    

    try{
      const response = await api.get(`title?title=${input}`);
      //const response = await api.get(`${input}`);
  
      
      setId(response.data)
     
      setInput("");
      
      
      console.log(response.data);

     //this.setState(response.data);
     
    
      

     

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


  
    

    
    

  function render(){

  

    const ListaJogos = id.map(jogo => 
      <div>
      <li key={jogo.id}>
       
         
       <h2>Nome : {jogo.title }</h2>
  
       
       
       <img src={jogo.imgUrl} alt="imagem" width={80}   />
  
  
       
       <h5>
         Plataforma : {jogo.platforms} 
       </h5>
  
       <h5>
         Ano de Lançamento : {jogo.year} 
  
       </h5>
  
       
  
       <span>
         Descrição : { jogo.shortDescription} 
       </span>
  
  
  
  
  
     </li>
    </div>
  
  );

  return(
    <ul>
      {ListaJogos}
    </ul>
  )
  
  
  }
    


  function butto(){
    
    if(handleSeach() === true){
       render();
      
      
    }
    
    
  }
  
  
  
  











    return (

    <div className= "body">
    
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
          onClick={()=>butto()}
         
          >
            <FiSearch size={25} color= "#Black"/>

          </button>

      </div>
    

      
      
      
      <main className="main" >
        
      {render() }
      
      
      </main>

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>





    </div>
  );

}

export default App;

import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import'./App.css';


import api from './services/api';










function App() {
  
  
  
  

 // const { jogos } =this.state;

  
  


  const[input,setInput] = useState('');
  const[id,setId] = useState([]);
 


  

  
  
  async function handleSeach(){
   
   

    if(input === "" ){
      alert("Preencha o campo")
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

    

    const ListaJogos = id.map   (jogo => 
      
      
      <main className="main" key={jogo.id}>
        <ul >
      
       
         
       <h2>Nome : {jogo.title }</h2>
  
       
       
       <img src={jogo.imgUrl} alt="imagem" width={80}   />
  
  
       
       <h5>
         Plataforma : {jogo.platforms} 
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
  
  
  
  











    return (

   
    <div className= "body">
       <div className="head">
        



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
          onClick={()=>button()}
         
          >
            <FiSearch size={25} color= "#Black"/>

          </button>

      </div>
    

      
      
      
      <div className='card'>

      
      {render()}

      
      
      
      
      </div>

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>





    </div>

    
  );

}

export default App;

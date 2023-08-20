
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ButtonMenu from './components/Menu/Button';
import './App.css';
import api from './services/api';
import {
  ContainerMenu, Logo, Text, Title,
} from './styles';

function App() {
  const [input, setInput] = useState('');
  const [id, setId] = useState([]);

  async function getGameDetails(id) {
    try {
      const response = await api.get(`games/${id}`);
      // const response = await api.get(`${input}`);

      setId([response.data]);
      setInput('');

      console.log(response);
      console.log(id);
    } catch {
      alert('Ops nada encontrado');
      setInput('');
    }
  }

  async function handleSeach() {
    if (input === '') {
      alert('Preencha o campo');
      return;
    }

    try {
      const response = await api.get(`buscar/title?title=${input}`);
      setId(response.data);
      setInput('');
      console.log(response);
      console.log(response.data);
    } catch {
      alert('Ops nada encontrado');
      setInput('');
    }
  }

  async function handleGet(rota) {
    try {
      const response = await api.get(`lists/${rota}/games`);
      // const response = await api.get(`${input}`);
      setId(response.data);
      setInput('');
      console.log(response.data);
    } catch {
      alert('Ops nada encontrado');
      setInput('');
    }
  }

  function reloadPage() {
    window.location.reload();
  }
  function renderCard() {
    const ListaJogos = id.map((jogo) => (
      <main className="main" key={jogo.id} onClick={() => getGameDetails(jogo.id)}>
        <ul>

          <h2> {jogo.title}</h2>
          <Logo src={jogo.imgUrl} />
          <Text> {jogo.platforms} </Text>
          <Text> Ano de Lançamento : {jogo.gameYear} </Text>
          <Text>{jogo.score}</Text>
          <Text>  {jogo.shortDescription} </Text>
          <Text>{jogo.longDescription}</Text>

        </ul>
      </main>
    ));
    return ListaJogos;
  }

  return (

    <div className="body">
      <ContainerMenu>

        <ButtonMenu title="Início" onClick={() => reloadPage()} />
        <ButtonMenu title="Aventura e RPG" onClick={() => handleGet(1)} />
        <ButtonMenu title="Jogos de plataforma" onClick={() => handleGet(2)} />
        <ButtonMenu title="Salvar" />

      </ContainerMenu>

      <div className="container">
        <Title>Lista de Jogos</Title>

        <div className="containerInput">
          <input
            type="text"
            placeholder="Buscar jogo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="buttonSearch"
            onClick={() => handleSeach()}
            type="submit"

          >
            <FiSearch size={25} color="#Black" />

          </button>

        </div>

        {renderCard()}

      </div>

      <div className="footer">

        <h5>
          By: Will !! WhatsApp : 21 995915256
        </h5>

      </div>

    </div>

  );
}

export default App;

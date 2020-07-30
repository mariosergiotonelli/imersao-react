import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

  const [categorias, setCategorias] = useState(['teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

  function funcaoHandleQueOErroPediu(infosDoEvento){
    setNomeDaCategoria(infosDoEvento.target.value);
    setCategorias([
      ...categorias,
      nomeDaCategoria
    ]);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('você tentou enviar form')

  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={funcaoHandleQueOErroPediu}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
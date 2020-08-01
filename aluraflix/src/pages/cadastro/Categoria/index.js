import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://tonelliflix.herokuapp.com/categorias';

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const { handleChange,valores, clearForm } = useForm(valoresIniciais);
  const history = useHistory();

  async function handleNewcategoria(e) {
    e.preventDefault();

    try {
      await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(valores),
      })
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente');
    }
    setCategorias([...categorias, valores]);
    history.push('/')
    clearForm();
  }

  useEffect(() => {

    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          setCategorias(result);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);


  return (
    <PageDefault>
      <div >
        <h1>Cadastro de Categoria: {valores.titulo} </h1>

        <form onSubmit={handleNewcategoria}>

          <FormField
            label="Titulo da Categoria"
            name="titulo"
            type="text"
            value={valores.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            name="descricao"
            type="textarea"
            value={valores.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={valores.cor}
            onChange={handleChange}
          />

          <Button>Cadastrar</Button>
        </form>
      </div>

      <Link to="/">
        Ir para Home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
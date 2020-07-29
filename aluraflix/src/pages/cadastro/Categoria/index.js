import React from 'react';
import { Link } from 'react-router-dom';
import PageDefalt from '../../../components/PageDefault';

function CadastroCategoria(){
  return(
    <PageDefalt>
      <h1>Cadastro de Categoria</h1>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefalt>
  )
}

export default CadastroCategoria;
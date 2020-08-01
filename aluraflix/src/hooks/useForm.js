import {useState} from 'react';

function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  function clearForm(){
    setValues(valoresIniciais)
  }

  return{
    values,
    handleChange,
    clearForm
  };
}

export default useForm;
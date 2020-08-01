import React, {useEffect, useState} from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  })
  
  console.log(dadosIniciais)
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      console.log(categoriasComVideos)
      setDadosIniciais(categoriasComVideos)
    })
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      

    </PageDefault>
  );
}

export default Home;
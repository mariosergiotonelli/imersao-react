import config from '../config';

const urlCategories = `${config.url}/categorias`;

function getAllWithVideos() {
  return fetch(`${urlCategories}?_embed=videos`)
    .then(async (respotaDoServidor) => {
      if(respotaDoServidor.ok){
        const resposta = await respotaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar dados')
    });
}

export default {
  getAllWithVideos,
};
import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

// const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (resp) => {
//   if (resp.ok) {
//     const json = await resp.json();
//     return json;
//   }

//   throw new Error('Não foi possível pegar os dados :(');
// });

const getAll = async () => {
  const resp = await fetch(`${URL_CATEGORIES}`);
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }

  throw new Error('Não foi possível pegar os dados :(');
};

const getAllWithVideos = async () => {
  const resp = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }

  throw new Error('Não foi possível pegar os dados :(');
};

export default {
  getAll,
  getAllWithVideos,
};

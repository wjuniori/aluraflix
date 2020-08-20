import config from '../config';

const URL_VIDEOS = `${config.URL_BASE}/videos`;

const create = async (video) => {
  const resp = await fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  });
  if (resp.ok) {
    const json = await resp.json();
    return json;
  }

  throw new Error('Não foi possível pegar os dados :(');
};

export default {
  create,
};

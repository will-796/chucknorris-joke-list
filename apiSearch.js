const apiSearch = async (category) => {
  const url = `https://api.chucknorris.io/jokes/${category}`;
  const response = await fetch(url);
  const piada = response.json();
  return piada;
}

module.exports = apiSearch;

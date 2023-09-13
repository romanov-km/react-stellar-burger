const config = {
  baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  headers: {
    "Content-Type": "application/json",
  },
};

function onResponse(res) {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
}

function getAllIngridients() {
  return fetch(`${config.baseUrl}`, {
    method: "GET",
    headers: config.headers,
  })
    .then(onResponse)
    .then((data) => data.data);
}

export default getAllIngridients;

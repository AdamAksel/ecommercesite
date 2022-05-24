export default function handler(req, res) {
  fetch('https://fakestoreapi.com/products/')
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
}

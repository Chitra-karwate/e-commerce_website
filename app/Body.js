async function logMovies() {
  const response = await fetch("https://fakestoreapi.com/products");
  const movies = await response.json();
  console.log(movies);
}

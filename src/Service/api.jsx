const API_KEY = '31271755-a238d7bfd5266bfb37ac3595c';
export function apiGet(name, page) {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&page=${page}&per_page=12`
  ).then(response => {
    if (!response.ok) {
      // return console.log(response.status);
      throw new Error(response.status);
    }
    return response.json();
  });
}

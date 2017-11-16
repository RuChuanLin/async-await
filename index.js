const fetchURL = 'https://rallycoding.herokuapp.com/api/music_albums';

function fetchAlbumsWithPromise() {
  fetch(fetchURL)
    .then(res => res.json())
    .then(json => console.log('fetchAlbumsWithPromise', json));
}

// async: 表示此函式包含非同步函式
async function fetchAlbumsWithAsyncAwait() {
  const res = await fetch(fetchURL);
  const json = await res.json();
  console.log('fetchAlbumsWithAsyncAwait', json);
}

const fetchAlbumsExpression = async () => {
    const res = await fetch(fetchURL)
    const json = await res.json();
    console.log(json);
};

fetchAlbumsWithPromise();
fetchAlbumsWithAsyncAwait();

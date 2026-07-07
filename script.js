document.addEventListener("DOMContentLoaded", () => {
  const albums = document.querySelectorAll('.album');

  albums.forEach((currentAlbum) => {
    currentAlbum.addEventListener('click', () => {
      albums.forEach((album) => {
        if (album !== currentAlbum) {
          album.removeAttribute('open');
        }
      });
    });
  });
});
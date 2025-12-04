const imgContainar = document.querySelector('#img_containar');
const urlAPI = 'https://picsum.photos/v2/list'


const getPicture = () => {
    fetch(urlAPI)
    .then(data => data.json()
    .then(items => {
        items.forEach(photo => {
            const newcontainar = document.createElement('div');
            newcontainar.classList.add('img_containar_item')


            const newimg = document.createElement('img')
            newimg.src = photo.download_url;
            newcontainar.appendChild(newimg)

            const newAuthor = document.createElement('p');
            newAuthor.textContent = photo.author;
            newcontainar.appendChild(newAuthor)
            imgContainar.appendChild(newcontainar)
        });
    }))
}
getPicture();

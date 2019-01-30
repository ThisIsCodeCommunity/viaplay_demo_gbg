
const apiUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const fetchShows = async () => {
  let data = await (await fetch(proxyUrl + apiUrl)).json();
  return data;
}

document.addEventListener('DOMContentLoaded', () => {
  let displaySection = document.getElementById('listing')
  fetchShows().then(data => {
    let shows = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    console.log(shows)
    shows.forEach(show => {
      let showDiv = document.createElement('div')
      showDiv.classList.add('display-show')
      let html = `<img src="${show.content.images.landscape.url}">`
      showDiv.innerHTML = html
      displaySection.appendChild(showDiv);
    })
  })
})
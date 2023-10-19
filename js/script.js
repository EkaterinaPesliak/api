
async function getResponse() {
  let response = await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json')
  let content = await response.json()
  content = content.result
  let list = document.querySelector('.calendar__list')
  let key
  for ( key in content) {

    list.innerHTML +=`

    <li class="calendar__item">
            <p class="calendar__date-range">${content[key].date_range}</p>
            <a href="#" target="_blank">
            <img src="${content[key].logo.replace('//', 'http://')}" class="calendar__logo"">
            </a>
            <p class="calendar__name">${content[key].name}</p>
            <p class="calendar__brief">${content[key].brief}</p>
            <p class="calendar__location">${content[key].location}</p>
            <a class="calendar__uri" href="${content[key].uri}" target="_blank">${content[key].uri}</a>
            <div class="calendar__btn-wrapper flex">
              <a href="#" class="calendar__btn-buy">Купить билет</a>
              <a href="#" class="calendar__btn-more">Подробнее</a>
            </div>
          </li>
    `
    }
  }

getResponse()
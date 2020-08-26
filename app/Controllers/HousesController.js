import housesService from "../Services/HousesService.js";
import STORE from "../store.js";
console.log(3)

// private
function _drawHouses() {
  console.log(6)
  let houses = STORE.State.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('houses').innerHTML = template
}

// public
export default class HousesController {
  constructor() {
    console.log(5)
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      price: form.price.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      img: form.img.value,
      description: form.description.value
    }
    debugger
    housesService.createHouse(rawHouse)
    _drawHouses();
  }

  removeCar(id) {
    debugger
    console.log('house', id)
    housesService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    housesService.bid(id);
    _drawHouses();
  }
}
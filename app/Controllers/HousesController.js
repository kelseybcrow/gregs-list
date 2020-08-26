import housesService from "../Services/HousesService.js";
import STORE from "../store.js";
console.log(3)

// private
function _drawHouses() {
  console.log(6)
  let houses = STORE.State.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('data').innerHTML = template
}

function _drawHousesForms() {
  document.getElementById('form-element').innerHTML = `
  <form onsubmit="app.housesController.createHouse()" class="form-inline">
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="text" name="price" id="price" class="form-control" placeholder="Price">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bedrooms">Bedrooms</label>
                        <input type="text" name="bedrooms" id="bedrooms" class="form-control" placeholder="Bedrooms">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="bathrooms">Bathrooms</label>
                        <input type="number" name="bathrooms" id="bathrooms" class="form-control"
                            placeholder="Bathrooms">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="price">Price</label>
                        <input type="number" name="price" id="price" class="form-control" placeholder="Price...">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="img">Image Url</label>
                        <input type="url" name="img" id="img" class="form-control" placeholder="Image Url">
                    </div>
                    <div class="form-group p-1">
                        <label class="mr-1" for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                            placeholder="Description">
                    </div>
                    <button type="submit" class="btn btn-outline-success">Add House</button>
                </form>`
}

// public
export default class HousesController {
  constructor() {
    console.log(5)
  }

  makeHousesActive() {
    _drawHousesForms();
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
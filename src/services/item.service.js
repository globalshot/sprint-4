import { httpService } from "./http.service"
import { storageService } from "./storage.service"
import { utilService } from "./util.service"

export const itemService = {
    query,
    getById,
    save,
    remove,
    getEmptyItem
}

const KEY = 'items_db'
const API = 'item/'

function query(filterBy) {
    return storageService
        .query(KEY)
        .then((items) => _filterItems(filterBy, items))

    // return httpService.get(API, filterBy)
}

function getById(itemId) {
    return storageService.get(KEY, itemId)
    // return httpService.get(API + itemId)
}

function save(itemToSave) {
    return itemToSave._id ?
        storageService.put(KEY, itemToSave) :
        storageService.post(KEY, itemToSave)

    // return itemToSave._id ?
    //     httpService.put(API, itemToSave) :
    //     httpService.post(API, itemToSave)
}

function remove(itemId) {
    return storageService.remove(KEY, itemId)
    // return httpService.remove(API, itemId)
}

function getEmptyItem() {
    return {
        name: '',
        price: null,
        imgUrl: ''
    }
}

function _filterItems(filterBy, items) {
    if (!filterBy) return items
    items = items.filter(item => {
        const regex = new RegExp(filterBy.txt, 'i')
        if (!regex.test(item.name)) return false

        return item
    })
    return items
}

; (() => {
    let items = utilService.loadFromStorage(KEY)
    if (!items || !items.length) {
        items = [
            _createItem('Hammer'),
            _createItem('Saw'),
            _createItem('Wrench'),
        ]
        utilService.saveToStorage(KEY, items)
    }

    function _createItem(name) {
        return {
            _id: utilService.makeId(),
            name: name,
            price: utilService.getRandomIntInc(10, 100),
            imgUrl: `src/assets/imgs/${name}.png`
        }
    }
})()
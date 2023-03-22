import { httpService } from "./http.service"
import { storageService } from "./storage.service"
import { utilService } from "./util.service"

// const fs = require('fs')
// const gigs = require('../../data/gig.json')

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
    console.log(filterBy)
    if (!filterBy) return items
    items = items.filter(item => {
        const regex = new RegExp(filterBy.txt, 'i')
        if (!regex.test(item.name)) return false

        if (filterBy.tag) {
            if (!item.tags.includes(filterBy.tag)) return false
        }


        return item
    })
    return items
}

; (() => {
    let items = utilService.loadFromStorage(KEY)
    if (!items || !items.length) {
        items = [
            _createItem('I will polish your personal statement and program application', ["logo-design", "website-design", "graphics-design"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["logo-design", "ai-services"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["word-press", "logo-design","writing"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["programming-tech", "data"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["data", "marketing"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["business", "marketing"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["lifestyle", "music"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["video", "music"]),
            _createItem('I will proofread accurately your german text in only 24 hours', ["video", "graphics-design", "photography"]),
        ]
        utilService.saveToStorage(KEY, items)
    }

    function _createItem(name, tags) {
        return {
            _id: utilService.makeId(),
            title: name,
            price: utilService.getRandomIntInc(10, 100),
            owner: {
                _id: "u101",
                fullname: "Dudu Da",
                imgUrl: "url",
                level: "basic/premium",
                rate: utilService.getRandomIntInc(3, 5)
            },
            daysToMake: utilService.getRandomIntInc(2, 7),
            description: "Make unique logo...",
            imgUrl: "",
            tags,
            likedByUsers: ['mini-user'] // for user-wishlist : use $in
        }
    }
})()


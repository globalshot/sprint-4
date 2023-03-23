import { httpService } from "./http.service"
import { storageService } from "./storage.service"
import { utilService } from "./util.service"

// const fs = require('fs')
// const gigs = require('../../data/gig.json')

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig
}

const KEY = 'gigs_db'
const API = 'gig/'

function query(filterBy) {
    return storageService
        .query(KEY)
        .then((gigs) => _filterGigs(filterBy, gigs))

    // return httpService.get(API, filterBy)
}

function getById(gigId) {
    return storageService.get(KEY, gigId)
    // return httpService.get(API + gigId)
}

function save(gigToSave) {
    return gigToSave._id ?
        storageService.put(KEY, gigToSave) :
        storageService.post(KEY, gigToSave)

    // return gigToSave._id ?
    //     httpService.put(API, gigToSave) :
    //     httpService.post(API, gigToSave)
}

function remove(gigId) {
    return storageService.remove(KEY, gigId)
    // return httpService.remove(API, gigId)
}

function getEmptyGig() {
    return {
        name: '',
        price: null,
        imgUrl: ''
    }
}

function _filterGigs(filterBy, gigs) {
    console.log(filterBy)
    if (!filterBy) return gigs
    gigs = gigs.filter(gig => {
        const regex = new RegExp(filterBy.txt, 'i')
        if (!regex.test(gig.name)) return false

        if (filterBy.tag) {
            if (!gig.tags.includes(filterBy.tag)) return false
        }


        return gig
    })
    return gigs
}

; (() => {
    let gigs = utilService.loadFromStorage(KEY)
    if (!gigs || !gigs.length) {
        gigs = [
            _createGig('I will polish your personal statement and program application', ["logo-design", "website-design", "graphics-design"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["logo-design", "ai-services"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["word-press", "logo-design","writing"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["programming-tech", "data"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["data", "marketing"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["business", "marketing"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["lifestyle", "music"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["video", "music"]),
            _createGig('I will proofread accurately your german text in only 24 hours', ["video", "graphics-design", "photography"]),
        ]
        utilService.saveToStorage(KEY, gigs)
    }

    function _createGig(name, tags) {
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


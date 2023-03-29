import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


// const fs = require('fs')
import gGigs from '../../data/gig.json'


const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '', tag: '' }) {
    return httpService.get(STORAGE_KEY, filterBy)
}


function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)
    } else {
        // gig.owner = userService.getLoggedinUser()
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
    return savedMsg
}

function getEmptyGig() {
    return {
        title: '',
        price: 0,
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
        tags: [],
        likedByUsers: ['mini-user'] // for user-wishlist : use $in
    }
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

; (() => {
    let gigs = utilService.loadFromStorage(STORAGE_KEY) || []
    if (!gigs || !gigs.length) {
        gigs = gGigs
        utilService.saveToStorage(STORAGE_KEY, gigs)
    }


})()
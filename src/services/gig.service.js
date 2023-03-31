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
        gig.owner = await userService.getLoggedinUser()
        console.log(gig.owner)
        gig.imgUrl = ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/167094387/original/dd006e572d30979126ec55f6bd0f84e6c4ac451c.jpg",
            "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/167094387/original/d2ed29826edeca4143e2ba84cd6d149c5a25e1bf.jpg"]
        gig.tags = ["logo-design", "video"]
        gig.likedByUsers = []
        gig.packages = [
            {
                type: "basic",
                price: gig.price,
                description: "Basic package",
                "revisits": 0,
                "daysToMake": 3,
                "features": ["y", "n", "n", "n", "y", "n"]
            },
            {
                type: "standard",
                "price": gig.price + 20,
                "description": "Standard package",
                "revisits": 0,
                "daysToMake": 4,
                "features": ["y", "y", "y", "n", "y", "n"]
            },
            {
                type: "premium",
                "price": gig.price + 40,
                "description": "Premium package",
                "revisits": 0,
                "daysToMake": 6,
                "features": ["y", "y", "y", "y", "y", "y"]
            },
        ]
        gig.reviews = []
        console.log(gig);
        savedGig = await httpService.post('gig', gig)
    }
    console.log(savedGig);
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
    return savedMsg
}

function getEmptyGig() {
    return {
        title: '',
        price: null,
        owner: {
            _id: "u101",
            fullname: "Dudu Da",
            imgUrl: "url",
            level: "basic/premium",
            rate: utilService.getRandomIntInc(3, 5)
        },
        daysToMake: 3,
        description: null,
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
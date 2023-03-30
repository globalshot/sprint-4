import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


import gGigs from '../../data/gig.json';


const STORAGE_KEY = 'gig_db'

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
    console.log(filterBy)
    var gigs = await storageService.query(STORAGE_KEY)

    return gigs = _filter(gigs, filterBy)
}


function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {
        // Later, owner is set by the backend
        // gig.owner = userService.getLoggedinUser()
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    if (!gig.msgs) gig.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
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

function _filter(gigs, filterBy) {
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (filterBy.tag) {
        gigs = gigs.filter(gig => gig.tags.includes(filterBy.tag))
    }
    if (filterBy.price) {
        console.log(gigs[0].packages[0].price)
        gigs = gigs.filter(gig => (gig.packages[0].price >= filterBy.price.min && gig.packages[0].price <= filterBy.price.max))
    }
    if (filterBy.daysToMake) {
        gigs = gigs.filter(gig => gig.packages[0].daysToMake <= filterBy.daysToMake)
    }
    return gigs
}

; (() => {
    let gigs = utilService.loadFromStorage(STORAGE_KEY) || []
    if (!gigs || !gigs.length) {
        gigs = gGigs
        utilService.saveToStorage(STORAGE_KEY, gigs)
    }
    
    
})()
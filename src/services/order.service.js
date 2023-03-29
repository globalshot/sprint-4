import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


// const fs = require('fs')
import gOrders from '../../data/orders.json';


const STORAGE_KEY = 'order_db'

export const orderService = {
    query,
    getById,
    save,
    remove,
    getEmptyOrder,
    addOrderMsg
}
window.cs = orderService


async function query(filterBy = { txt: '', tag: '' }) {
    console.log(filterBy)
    var orders = await storageService.query(STORAGE_KEY)

    return orders = _filter(orders, filterBy)
}


function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await storageService.put(STORAGE_KEY, order)
    } else {
        // Later, owner is set by the backend
        // gig.owner = userService.getLoggedinUser()
        savedOrder = await storageService.post(STORAGE_KEY, order)
    }
    return savedOrder
}

async function addOrderMsg(orderId, txt) {
    // Later, this is all done by the backend
    const order = await getById(orderId)
    if (!order.msgs) order.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    order.msgs.push(msg)
    await storageService.put(STORAGE_KEY, order)

    return msg
}

function getEmptyOrder() {
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
    if (filterBy.budget) {
        console.log(gigs[0].packages[0].price)
        gigs = gigs.filter(gig => (gig.packages[0].price >= filterBy.budget.min && gig.packages[0].price <= filterBy.budget.max))
    }
    if (filterBy.daysToMake) {
        gigs = gigs.filter(gig => gig.packages[0].daysToMake <= filterBy.daysToMake)
    }
    return gigs
}

; (() => {
    console.log(gOrders)
    let orders = utilService.loadFromStorage(STORAGE_KEY) || []
    if (!orders || !orders.length) {
        orders = gOrders
        utilService.saveToStorage(STORAGE_KEY, orders)
    }
    
    
})()
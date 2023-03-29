import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { gigService } from './gig.service.local.js'


// const fs = require('fs')
import gOrders from '../../data/orders.json';
import { httpService } from './http.service.js';


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

async function save(gigId) {
    const order = _createOrder(gigId)
    return await storageService.post(STORAGE_KEY, order)
    // return await httpService.post()
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

function getEmptyOrder(gig) {
    return {
        buyer: {
            _id: "u103",
            fullname: "Don Peru"
        },
        seller: {
            _id: gig.owner._id,
            fullname: gig.owner.fullname
        },
        gig: {
            _id: gig._id,
            name: gig.description,
            price: gig.packages[0].price
        },
        status: "pending"
    }
}

async function _createOrder(gigId) {
    const gig = await gigService.getById(gigId)
    const buyer = await userService.getLoggedinUser()

    return {
        buyer: {
            _id: buyer._id,
            fullname: buyer.fullname
        },
        seller: {
            _id: gig.owner._id,
            fullname: gig.owner.fullname
        },
        gig: {
            _id: gig._id,
            name: gig.description,
            price: gig.packages[0].price
        },
        status: "pending"
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
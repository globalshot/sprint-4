import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { gigService } from './gig.service.js'
import { httpService } from './http.service.js'


// const fs = require('fs')
import gOrders from '../../data/orders.json'


const STORAGE_KEY = 'order_db'
const API = 'order/'

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
    // var orders = await storageService.query(STORAGE_KEY)
    return await httpService.get(API)

    // return orders = _filter(orders, filterBy)
}


function getById(orderId) {
    // return storageService.get(STORAGE_KEY, orderId)
    return httpService.get(API + orderId)
}

async function remove(orderId) {
    // await storageService.remove(STORAGE_KEY, orderId)
    await httpService.remove(API + orderId)
}

async function save(gigId) {
    // const order = await _createOrder(gigId)
    // return await storageService.post(STORAGE_KEY, order)

    return await httpService.post(API + gigId)
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
    try {
        const gig = await gigService.getById(gigId)
        const buyer = await userService.getLoggedinUser()

        console.log(gig)
        console.log(buyer)

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
    catch (err) {
        console.log('not working')
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
    let orders = utilService.loadFromStorage(STORAGE_KEY) || []
    if (!orders || !orders.length) {
        orders = gOrders
        utilService.saveToStorage(STORAGE_KEY, orders)
    }


})()
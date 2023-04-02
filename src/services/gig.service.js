import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


// const fs = require('fs')
import gGigs from '../../data/gig.json'


const STORAGE_KEY = 'gig'
let gigPics = [
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/113755043/original/44ed6b3de1cf45db28e415380aa2e09e59c55356.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/113755043/original/c12b7c1e363b312bf7e92e7240a9c2c9bfa0cf3f.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197652687/original/7a23711d0558b194ce3136a6c339e9407a9a5477.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/197652687/original/37177d472b55ab44472ebdea60e3ad043dd48ec8.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/197652687/original/f0f18b4a2de755dc13df70f203bd3223782d899e.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/e2a901a7d72819cc00a485a2f44dcb27-1680233714/DSC04592.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/9c7920c204dfbd1731e5659939f34825-1679971913/DSC03913.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/2c5c8687748cc06cde51c3f47c9f8598-1678167397/DSC03646.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/1af30f635dbcf6d7297395b843e2cfc9-1678159549/DSC01841.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/220497617/original/ba3b54fc0d1a3241c92f0d43c14314bb381b78a7.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/0e240041299338be502a5a4752e5fb33-1679853182/chumoon14%201.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/6e0a1b7362b53d185b2f7eb5eca498e7-1677970310/_0006_Lemongrass%20_%20Ginger%20(170g).jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/782619d19a4f63df55d77ea85b1e06dc-1667387041/20221025_product_Norber31_4.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/238859856/original/2b524e3b5f8757509806d195e93ab647e064a4db.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/238859856/original/ecc0f3ce624693fec988bda2e3a951aabab4277d.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/2d350d575992fb7bf651a13766bc5182-1679672229/1.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/141664549/original/c2460575de97df34c30beeb37c77c4a3d870959c.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/8a9ec41829864ba3864316faa6fce173-1680279869/_DSC9066.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22135802/original/cee1ee4a37853999365f510042a7bd6b83d97601.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222090220/original/1f5b94c68cb8eefb95cb69525cd5fce78074bfe0.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/222090220/original/14bed4b185b08d065d5c74198edcabc49f89b511.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/dc59efe43cb5a84b3293e04924737cc4-1668272434/FIVERR_GHOST-csaba.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/147267176/original/d3310f1dde11037db6d80c1a2f41b0786e158ae8.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/147267176/original/e38e43251b61be5ac5a5ac5d5a0233efde4aaf84.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/6a534e40ab492869feaaf6b37c51e8f7-1680126608/5.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/4e2a02a6f9f5c92942c91e7b56e5271e-1679912426/3.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/4128fe213218aa100cb4798e2b5dbb78-1679279366/1A.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/122669139/original/9ea3ca1ce4f817f203b96b2f6ebea230e525bf95.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/120787148/original/3f0cbeb8611d2fc22b5c2e8c572020b38889e319.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217297186/original/c4ead4acf2ac7e5392b7e3ae051942f5d793bde0.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/81658341/original/551e1e8ba40b00ea0be01529cc425da8aa7bf343.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/102385017/original/0e6615362df22153d685fbbcbae9a3833b7eaac5.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/79937886/original/8bd90164be271426e863d397dcac7fbb6c4768f2.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/266146819/original/7d083347b3f40483ad38e96265b63145e5cfcbe3.jpeg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/257977834/original/c800f1bf62587e8f310ad635e11bcb800b7d7243.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/277379709/original/4328b331288b755230193b56c3679aaa59381b36.jpeg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/267396683/original/d15f8ad9ed93a2cd7e3f8184724a0abfddfbefda.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230529399/original/35c2e98fb729adc6299cfbc4f1ffa4c71b268bac.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/243790468/original/f9375235b58e24113df7c14e4fac687feb950110.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/223677792/original/0122a5c7f9a90fc911bbfce3e10cf900509b36dd.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/249626410/original/3643cff3d83abf1910193b9fa295d379bc2dc709.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/230459412/original/1245a407d60ff0fcff8e91ebeb95c31c46eb2f94.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/265810646/original/4343daaf46c432ef3318196b6f9703a76edb0a43.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263201715/original/615de5193c3b3c827f6b189e92f05aec5eb5831b.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/105458926/original/a0a42c6ec5ada087ad33933a4c32f371bf0d2e77.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/166802861/original/7f9dfad0c589e93a95b80ad4d26ad5780168c03e.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/292975486/original/636b3fbd04da284b10a8265db2382e8b36b1a910.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/294109033/original/4387f639cdaf6a07fde441af851287f1308ab335.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/302761587/original/b9c6ca82c1dcdebe80d83967ccab488cffbab0ec.png",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/308442686/original/1e7f4982c0c8a245d7c2550e31ca189ad1dc09d0.jpg",
    "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/306877191/original/0a133c4b1329ef72e981b67ab639c1eeb9272f10.jpg"
]

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
        gig.owner.rate = "5.0"
        console.log(gig.owner)
        gig.imgUrl = [gigPics[utilService.getRandomIntInc(0,50)],
                      gigPics[utilService.getRandomIntInc(0,50)]]
        // gig.tags = ["logo-design", "video"]
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
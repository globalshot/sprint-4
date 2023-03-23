import { httpService } from './http.service.js';
import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

const ENDPOINT = 'review'
const STORAGE_KEY = 'review_db'

async function query(filterBy) {
  var reviews = await storageService.query(STORAGE_KEY)
  return reviews
  // return await httpService.get(ENDPOINT, filterBy)
}

async function addReview(review) {
  return await httpService.post(ENDPOINT, review)
}


function _createReview(name, gigId) {
  return {
    _id: utilService.makeId(),
    rating: utilService.getRandomIntInc(1, 5),
    gig: {
      gigId,
    },
    user: {
      userName: name,
    },
    reviewDetails: 'This is my review',
  }
}

; (() => {
  
  let reviews = utilService.loadFromStorage(STORAGE_KEY) || []
  if (!reviews || !reviews.length) {
    reviews = [
      _createReview('Eran', 'cWV3c'),
      _createReview('Darian', 'cWV3c'),
      _createReview('Steven', 'cWV3c'),
      _createReview('Puki', 'cWV3c'),
      _createReview('Muki', 'cWV3c'),
      _createReview('Shuki', 'cWV3c'),
    ]
    utilService.saveToStorage(STORAGE_KEY, reviews)
  }

 
})()

export const reviewService = {
  query,
  addReview
}
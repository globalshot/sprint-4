import { httpService } from './http.service.js';
import { utilService } from './util.service.js'
import { storageService } from './storage.service.js'

const ENDPOINT = 'review'
const STORAGE_KEY = 'review_db'

async function query(filterBy = null) {
  var reviews = await storageService.query(STORAGE_KEY)
  console.log(reviews)
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
    reviewDetails: 'If you need an artist, hire this guy. He does excellent work. Communicated often and left no rock unturned. He created 4 HD 4k images for us in less than 2 days. Highly recommend!',
  }
}

; (() => {
  
  let reviews = utilService.loadFromStorage(STORAGE_KEY) || []
  if (!reviews || !reviews.length) {
    reviews = [
      _createReview('Eran', 'uUeVA'),
      _createReview('Darian', 'lnC5d'),
      _createReview('Steven', 'cWV3c'),
      _createReview('Puki', '7pDYZ'),
      _createReview('Muki', '4CEZa'),
      _createReview('Shuki', 'nDIqu'),
      _createReview('Eran', 'SASqS'),
      _createReview('Darian', '1eBTu'),
      _createReview('Steven', 'GP1l6'),
      _createReview('Puki', 'c9foG'),
      _createReview('Muki', 'HFMxw'),
      _createReview('Shuki', 'NZrKK'),
      _createReview('Eran', 'uUeVA'),
      _createReview('Darian', 'E7y6I'),
      _createReview('Steven', 'bKntr'),
      _createReview('Puki', 'RPj8k'),
      _createReview('Muki', 'h1ts5'),
      _createReview('Shuki', '2QYVo'),
      _createReview('Muki', 'rygeV'),
      _createReview('Shuki', 'TEexc'),
      _createReview('Muki', 'gyXZ7'),
      _createReview('Shuki', 'jwm0v'),
    ]
    utilService.saveToStorage(STORAGE_KEY, reviews)
  }

 
})()

export const reviewService = {
  query,
  addReview
}
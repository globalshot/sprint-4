import { httpService } from './http.service.js';

const ENDPOINT = 'review'

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function addReview(review) {
  return await httpService.post(ENDPOINT, review)
}

export const reviewService = {
  query,
  addReview
}
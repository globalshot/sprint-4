import { reviewService } from '../../services/review.service.js';
import router from '../../router/routes'

export const reviewStore = {
  state: {
    reviews: null
  },
  getters: {
    getReviews(state) {
      return state.reviews
    }
  },
  mutations: {
    setReviews(state, { reviews }) {
      state.reviews = reviews
    },
    addReview(state, {review}) {
      state.reviews.push(review)
    }
  },
  actions: {
    async getReviews({ commit }, { filterBy }) {
      console.log('got here')
      try {
        const reviews = await reviewService.query(filterBy)
        commit({
          type: 'setReviews',
          reviews
        })
      } catch (err) {
        console.log(err);
      }
    },
    async addReview(context, { newReview }) {
      const {txt,toyId} = newReview
      const user = context.rootGetters.loggedInUser
      if (!user) return router.push('/login')
      const review = {
        txt,
        userId: user._id,
        toyId
      }
      await reviewService.addReview(review)
      // context.commit({
      //   type: 'addReview',
      //   review: addedReview
      // })
    }
  },
};
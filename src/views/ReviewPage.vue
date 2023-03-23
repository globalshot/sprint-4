<template>
  <div class="review-page-container">
    <h1>Reviews</h1>
    <!-- <details v-if="reviews" class="review-list">
      <summary>Your Reviews</summary> -->
    <div
      v-for="review in reviews"
      :key="review._id"
      class="review-preview align-center "
    >
      <h4>By: {{ review.user.userName }}</h4>
      <h4>Rating: {{ review.rating }}</h4>
      <p>Review: {{ review.reviewDetails }}</p>
    </div>
    <!-- </details> -->
  </div>
</template>

<script>
export default {
  name: 'review-page',
  props: {
        gig: Object,
    },
  computed: {
    reviews() {
      return this.$store.getters.getReviews;
    },
  },
  created() {
    this.$store.dispatch({
      type: 'getReviews',
    });
  },
};
</script>

<style lang="scss">
.review-page-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin-bottom: 10px;
  }
  .review-preview:not(:last-child) {
    border-bottom: 1px solid #a06c6c;
  }
  .review-preview{
    margin-block-start: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .review-preview h4{
    margin-block-end: 10px;
  }
  .review-preview p{
    margin-block-end: 15px;
  }
}
</style>
<template>
    <div class="main-header" :class="{ 'sticky': isHomePage}"><!--sticky class gets added-->
      <header class="fiverr-header " :class="{ 'header-transparent': !isScrolled&&isHomePage}">
        <div class="flex">
        <!--so much not sure if thats right-->
        <nav class="header-row flex max-width-container header-row-wrapper"><!--main-pages bad name?-->
          <button class="btn-nav">button</button><!--for the burger nav-->
          <RouterLink to="/"><h1>home</h1></RouterLink>
          <div>
            <form class="search-form fiverr-search fiverr-search-animated" :class="{ 'fiverr-search-show': isDoubleScrolled||!isHomePage}">
              <input type="search"><!--2 kinds of placeholders, aka 2 kinds of inputs-->
              <button>search</button>
            </form>
        </div>
        <div class="fiverr-nav nav-with-space">
          <ul class="flex">
            <li>
              <RouterLink to="/gig">Explore</RouterLink>
            </li>
            <li>Become a seller</li>
            <li>Sign in</li>
            <li>Join</li>
          </ul>
        </div>
        </nav>
      </div>
      </header><!--home page image doesnt goes under the nav bar, aka no trans color-->
    </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isDoubleScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // const box = this.$el;
      // const boxHeight = box.getBoundingClientRect().height;
      const boxHeight = 0;
      const boxHeight2 = 140;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      this.isScrolled = scrollTop > boxHeight;
      this.isDoubleScrolled = scrollTop > boxHeight2;
    }
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  }
};
</script>
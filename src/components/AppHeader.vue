<template>
    <div class="main-header" :class="{ 'sticky': isHomePage}"><!--sticky class gets added-->
      <header class="fiverr-header " :class="{ 'header-transparent': !isScrolled&&isHomePage}">
        <!--so much not sure if thats right-->
        <nav class="main-pages flex max-width-container"><!--main-pages bad name?-->
          <button class="btn-nav">button</button><!--for the burger nav-->
          <RouterLink to="/"><h1>home</h1></RouterLink>
          <div>
            <form class="search-form fiverr-search" :class="{ 'fiverr-search-show': isDoubleScrolled}">
              <input type="search"><!--2 kinds of placeholders, aka 2 kinds of inputs-->
          </form>
        </div>
        <div class="fiverr-nav nav-with-space">
          <RouterLink to="/gig">Explore</RouterLink>
        </div>
        </nav>
      </header>
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
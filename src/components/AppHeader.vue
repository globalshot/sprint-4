<template>
    <div class="main-header " :class="{ 'sticky': isHomePage, 'clr-white': !isScrolled&&isHomePage}"><!--sticky class gets added-->
      <header class="fiverr-header main-layout full" :class="{ 'header-transparent': !isScrolled&&isHomePage}">
        <div class="flex ">
        <!--so much not sure if thats right-->
        <nav class="header-row flex items-center header-row-wrapper"><!--main-pages bad name?-->
          <button class="btn-nav">button</button><!--for the burger nav-->
          <RouterLink to="/" class="site-logo"><h1>home</h1></RouterLink>
          <div class="fiverr-header-search">
            <form class="search-form fiverr-search fiverr-search-animated " :class="{ 'fiverr-search-show': isDoubleScrolled||!isHomePage}">
              <input type="search" placeholder="What service are you looking for today?"><!--2 kinds of placeholders, aka 2 kinds of inputs-->
              <button>search</button>
            </form>
        </div>
        <div class="fiverr-nav nav-with-space fiverr-nam-right flex">
          <ul class="flex items-center">
            <li>
              <RouterLink to="/gig" class="no-style">Explore</RouterLink>
            </li>
            <li>Become a seller</li>
            <li>Sign in</li>
            <li>Join</li>
          </ul>
        </div>
        </nav>
      </div>
    </header>
    <div class="main-layout full bgc-white" :style="{'display': isHome}">
      <p>testing</p>
    </div>
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
      const boxHeight2 = 150;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      this.isScrolled = scrollTop > boxHeight;
      this.isDoubleScrolled = scrollTop > boxHeight2;
    },
    
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
    isHome(){
      return this.isHomePage? (this.isDoubleScrolled? 'grid': 'none') : 'grid'
    }
  }
};
</script>
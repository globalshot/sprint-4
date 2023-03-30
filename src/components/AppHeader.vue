<template>
  <div class="main-header " :class="{ 'sticky': isHomePage, 'clr-white': !isScrolled && isHomePage }">
    <!--sticky class gets added-->
    <header class="fiverr-header main-layout full" :class="{ 'header-transparent': !isScrolled && isHomePage }">
      <div class="flex ">
        <!--so much not sure if thats right-->
        <nav class="header-row flex items-center header-row-wrapper"><!--main-pages bad name?-->
          <button class="btn-nav">button</button><!--for the burger nav-->
          <RouterLink to="/" class="site-logo">
            <span class="main-logo">
              <svg class="svg-logo" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-3 298.4 603.5 196.6"
                style="enable-background:new -3 298.4 603.5 196.6;" xml:space="preserve">
                <g class="svg-logo" transform="matrix(1.0898657,0,0,1.1708895,-46.646252,-261.22504)" inkscape:label="logo"
                  inkscape:export-ydpi="34.675816" inkscape:export-xdpi="34.675816"
                  inkscape:export-filename="fiverr-logo2.svg">
                  <g class="svg-logo" fill="">
                    <g class="fiverr">
                      <path class="svg-logo" d="M392.8,564.9c-2.1-10.1-8-22-28.8-34.1c-20.8-12.1-51,0-51,0s-25.7,11.1-31.3,42.6
        				c-5.6,31.5,18.1,53.9,18.1,53.9s30.6,24.1,58.8,14.1c28.2-10,34.1-30.5,34.1-30.5l-30.7-8.2c-0.4-0.1-0.7,0.1-0.8,0.5
        				c-0.4,2.3-3.1,9.8-20.9,9.8c-21-0.1-23.6-20.8-23.6-20.8h76C392.8,591.9,394.8,575,392.8,564.9L392.8,564.9z M317.7,570.3
        				c0,0,5.1-16.7,21.6-17.4c16.5-0.6,19.1,17.4,19.1,17.4H317.7z" />
                      <path  fill="none"
                        d="M339.3,553c-16.5,0.6-21.6,17.4-21.6,17.4h40.7C358.4,570.3,355.8,552.4,339.3,553z" />
                    </g>
                    <path class="svg-logo"
                      d="M100.3,560.2v81.1H64.9v-81.1H42.7v-33.3h22.2v-10.1c0-6.4,1.6-12.7,4.9-18.2c5.3-8.9,15.5-19.8,30.5-20.6
        			c16.1-0.9,36.6,0,36.6,0v30.9l-27-0.2c0,0-7.9,1.7-7.7,7.6c0.2,5.9,0,10,0,10h71v115.1h-35.8v-81.8h-36.9L100.3,560.2z" />
                    <path class="svg-logo" d="M441.1,641.3h-37.7V528.4H441v14.8c0,0,6.5-12.6,16-14.8c9.6-2.2,55.8,0,55.8,0v15.7c0,0,5.9-15.4,17.6-15.7
        			c11.7-0.3,22.4,0,22.4,0v31.8h-28c0,0-9.3,1.9-10.5,10.2c-1.2,8.3-0.6,71-0.6,71H478v-81.1h-26c0,0-9.9,4.6-9.9,10.2
        			C442.1,576.1,441.1,641.3,441.1,641.3L441.1,641.3z" />
                  </g>
                  <ellipse inkscape:label="dot" class="dot" cx="571.6" cy="623.3" rx="23.1" ry="24.8">
                  </ellipse>
                </g>
                <polygon class="svg-logo" stroke="none" points="142.9,373.1 167.8,352.4 271.2,470.1 248,489.7 " />
                <polygon class="svg-logo" stroke="none" points="271.4,375.1 246.5,354.3 143.1,472.1 166.3,491.7 " />
              </svg>
            </span>
          </RouterLink>
          <div class="fiverr-header-search">
            <form class="search-form fiverr-search fiverr-search-animated "
              :class="{ 'fiverr-search-show': isDoubleScrolled || !isHomePage }">
              <input @submit="loadGig" v-model="filterBy.txt" type="search"
                placeholder="What service are you looking for today?"><!--2 kinds of placeholders, aka 2 kinds of inputs-->

              <a @click="loadGig" v-bind:href="'/#/gig?txt=' + filterBy.txt">
                <div class="btn btn-search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </a>
            </form>
          </div>
          <div class="fiverr-nav nav-with-space fiverr-nam-right flex">
            <ul class="flex items-center">
              <li>
                <RouterLink @click="loadGig" to="/gig" class="no-style">Explore</RouterLink>
              </li>

              <li>
                <!-- <RouterLink to="/edit">Become a seller </RouterLink> -->
                <RouterLink to="/user/64233f238e1b02500fd244bf">Become a Seller </RouterLink>
              </li>

              <li @click="signIn">

                <!-- NO LOGIN-->
                <span v-if="!loggedinUser">Sign in </span>

                <!-- YES LOGIN-->
                <RouterLink v-else :to="userProfile"> {{ fullname }} </RouterLink>
              </li>
              <li v-if="!loggedinUser">
                <RouterLink class="btn btn-join" to="/signup">Join</RouterLink>
              </li>
              <li v-else @click="logout">
                Logout
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <Login v-if="login" />

    <div class="sec-header main-layout full" :class="{ 'show': isDoubleScrolled || !isHomePage }"
      :style="{ 'display': (!isHomePage || isScrolled ? 'grid' : 'none') }">
      <div class="sec-header-nav flex space-between">

        <!-- <vueper-slides :slide-ratio="0.2" :infinite="false" class="no-shadow" :visible-slides="1" disable-arrows-on-edges :bullets="false"><vueper-slide
          v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"
          :style="'color: ' + ['#ff5252', '#42b983'][i % 2]" />
        </vueper-slides> -->

        <RouterLink to="/gig?tag=graphics-design" @click="loadGig">
          Graphics &amp; Design
        </RouterLink>
        <RouterLink to="/gig?tag=marketing" @click="loadGig">
          Digital Marketing
        </RouterLink>
        <RouterLink to="/gig?tag=word-press" @click="loadGig">
          Writing &amp; Translation
        </RouterLink>
        <RouterLink to="/gig?tag=video" @click="loadGig">
          Video &amp; Animation
        </RouterLink>
        <RouterLink to="/gig?tag=music" @click="loadGig">
          Music &amp; Audio
        </RouterLink>
        <RouterLink to="/gig?tag=programming-tech" @click="loadGig">
          Programming &amp; Tech
        </RouterLink>
        <RouterLink to="/gig?tag=photography" @click="loadGig">
          Photography
        </RouterLink>
        <RouterLink to="/gig?tag=business" @click="loadGig">
          Business
        </RouterLink>
        <!-- <RouterLink to="/gig?tag=lifestyle" @click="loadGig">
          Lifestyle
        </RouterLink> -->
        <RouterLink to="/gig?tag=ai-services" @click="loadGig">
          AI Services
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import { eventBus } from '../services/event-bus.service'
import { userService } from '../services/user.service'
export default {
  data() {
    return {
      isScrolled: false,
      isDoubleScrolled: false,
      filterBy: {
        txt: '',
      },
      slides: [
        {
          title: 'Slide 1',
          content: 'Slide 1 content.'
        },
        {
          title: 'Slide 2',
          content: 'Slide 2 content.'
        }
      ],
      login: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  created() {
    // if (this.user) {
    //   this.toggleLogin()
    // }
    // this.user = userService.getLoggedinUser()
    // console.log('user:', this.user);
  },
  methods: {
    signIn() {
      if (!this.loggedinUser) {
        eventBus.emit('showLogin')
        this.toggleLogin()
        return
      }
    },
    logout() {
      this.$store.dispatch({ type: 'logout' })
    },


    handleScroll() {
      // const box = this.$el;
      // const boxHeight = box.getBoundingClientRect().height;
      const boxHeight = 0
      const boxHeight2 = 150
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      this.isScrolled = scrollTop > boxHeight
      this.isDoubleScrolled = scrollTop > boxHeight2
    },

    appendSlide() {
      this.slides.push({
        title: `Programmagically appended slide ${this.slides.length + 1}`,
        content: `Programmagically appended slide ${this.slides.length + 1} content.`
      })
    },
    removeSlide() {
      this.slides.pop()
    },
    toggleSlideshow() {
      this.slideshowDisabled = !this.slideshowDisabled
    },

    toggleLogin() {
      this.login = !this.login
    }

  },
  computed: {
    isHomePage() {
      return this.$route.path === '/'
    },
    isHome() {
      return this.isHomePage ? (this.isDoubleScrolled ? 'grid' : 'none') : 'grid'
    },
    isDetailsPage() {
      return this.$route.path === '/gig/'
    },
    isDetails() {
      return this.isDetailsPage ? (this.isDoubleScrolled ? 'grid' : 'none') : 'grid'
    },
    loadGig() {
      let { txt, tag } = this.$route.query
      let filterBy = { txt, tag }
      this.$store.dispatch({ type: 'loadGigs', filterBy })
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
    userProfile() {
      if (!this.loggedinUser) return ''
      return '/user/' + this.loggedinUser._id
    },
    fullname() {
      if (!this.loggedinUser) return ''
      return this.loggedinUser.fullname
    },


  },
  components: {
    Login,
  }
}
</script>
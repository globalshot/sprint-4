<template>
    <div class="user-msg" :class="msg?.type">
        <!-- <img :src="" alt=""> -->
        <a href="" class="logo-container">
            <!-- <svg version="1.1" class="logo" x="0px" y="0px" viewBox="0 0 603.45862 196.59274"
                enable-background="new 0 0 612 792" xml:space="preserve" sodipodi:docname="fiverr-logo2.svg"
                inkscape:version="1.2.2 (732a01da63, 2022-12-09)" inkscape:export-filename="fiverr-logo3.svg"
                inkscape:export-xdpi="34.675816" inkscape:export-ydpi="34.675816" width="603.45862" height="196.59274"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg">
                <defs pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2"
                    inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1"
                    showgrclass="false" inkscape:zoom="1.4659091" inkscape:cx="294.0155" inkscape:cy="396"
                    inkscape:window-width="2560" inkscape:window-height="1351" inkscape:window-x="-9" inkscape:window-y="-9"
                    inkscape:window-maximized="1" inkscape:current-layer="Layer_1" />


                <g class="fiverr" inkscape:label="logo" inkscape:export-filename="fiverr-logo2.svg"
                    inkscape:export-xdpi="34.675816" inkscape:export-ydpi="34.675816"
                    transform="matrix(1.0898657,0,0,1.1708895,-46.646252,-261.22504)">
                    <g class="fiverr">
                        <polyline class="XMLID_2_" fill="#ed1c24"
                            points="235.2,387.3 217.6,387.3 177.2,274.4 213.3,274.4 232.1,337.9  " />
                        <line class="XMLID_9_" fill="#ed1c24" x1="213.3" y1="274.39999" x2="232.10001" y2="337.89999" />
                        <polyline class="XMLID_10_" fill="#ed1c24"
                            points="232.1,387.3 249.7,387.3 290.1,274.4 254,274.4 235.2,337.9  " />
                        <line class="XMLID_8_" fill="#ed1c24" x1="235.2" y1="337.89999" x2="254" y2="274.39999" />
                        <g class="fiverr">
                            <path class="fiverr" fill="#ed1c24" stroke-miterlimit="10"
                                d="m 393.4,310.9 c -2.1,-10.1 -8,-22 -28.8,-34.1 -20.8,-12.1 -51,0 -51,0 0,0 -25.7,11.1 -31.3,42.6 -5.6,31.5 18.1,53.9 18.1,53.9 0,0 30.6,24.1 58.8,14.1 28.2,-10 34.1,-30.5 34.1,-30.5 l -30.7,-8.2 c -0.4,-0.1 -0.7,0.1 -0.8,0.5 -0.4,2.3 -3.1,9.8 -20.9,9.8 -21,-0.1 -23.6,-20.8 -23.6,-20.8 h 76 c 0.1,-0.3 2.1,-17.2 0.1,-27.3 z m -75.1,5.4 c 0,0 5.1,-16.7 21.6,-17.4 16.5,-0.6 19.1,17.4 19.1,17.4 z" />
                            <path class="XMLID_21_" fill="none" stroke-miterlimit="10"
                                d="m 339.9,299 c -16.5,0.6 -21.6,17.4 -21.6,17.4 H 359 c 0,-0.1 -2.6,-18 -19.1,-17.4 z" />
                        </g>
                        <g class="fiverr">
                            <g class="fiverr">
                                <path class="XMLID_28_" fill="#ed1c24"
                                    d="m 234.2,365.2 c 0.8,-3.3 1.4,-6.6 1.4,-10.1 0,-1.7 -0.1,-3.3 -0.2,-4.9 -0.2,-2.1 -1.1,-2.5 1.1,-2.8 3.1,-0.4 3.3,-5 0,-5 -2.6,0 -5.2,0 -7.8,0 -3.2,0 -3.2,5 0,5 2.6,0 5.2,0 7.8,0 0,-1.7 0,-3.3 0,-5 -3.4,0.4 -6.3,0.7 -6.3,4.6 -0.1,5.9 0.7,11 -0.8,16.8 -0.8,3.2 4,4.5 4.8,1.4 z" />
                            </g>
                        </g>
                        <path class="fiverr" fill="#ed1c24" stroke="#ed1c24" stroke-miterlimit="10"
                            d="m 100.9,306.2 v 81.1 H 65.5 V 306.2 H 43.3 v -33.3 h 22.2 v -10.1 c 0,-6.4 1.6,-12.7 4.9,-18.2 5.3,-8.9 15.5,-19.8 30.5,-20.6 16.1,-0.9 36.6,0 36.6,0 v 30.9 l -27,-0.2 c 0,0 -7.9,1.7 -7.7,7.6 0.2,5.9 0,10 0,10 h 71 V 387.4 H 138 v -81.8 h -36.9 z" />
                        <path class="fiverr" fill="#ed1c24" stroke="#ed1c24" stroke-miterlimit="10"
                            d="M 441.7,387.3 H 404 V 274.4 h 37.6 v 14.8 c 0,0 6.5,-12.6 16,-14.8 9.6,-2.2 55.8,0 55.8,0 v 15.7 c 0,0 5.9,-15.4 17.6,-15.7 11.7,-0.3 22.4,0 22.4,0 v 31.8 h -28 c 0,0 -9.3,1.9 -10.5,10.2 -1.2,8.3 -0.6,71 -0.6,71 h -35.7 v -81.1 h -26 c 0,0 -9.9,4.6 -9.9,10.2 0,5.6 -1,70.8 -1,70.8 z" />
                    </g>
                    <circle class="dot" fill="#ed1c24" stroke="#ed1c24" stroke-miterlimit="10" cx="574.79999" cy="369.29999"
                        r="21.200001" inkscape:label="dot" />
                </g>
            </svg> -->
        </a>
        <h3>{{ txt }}</h3>
    </div>
</template>

<script>
import { eventBus } from '../services/event-bus.service'

export default {
    name: 'UserMsg',
    data() {
        return {
            msg: null,
            unsub: null
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2000)
        }
    },
    computed: {
        iconUrl() {
            if (!this.msg) return ''
            return `src/assets/icons/${this.msg.type}.ico`
        },
        txt() {
            if (!this.msg) return ''
            return this.msg.txt
        }
    },
    created() {
        this.unsub = eventBus.on('show-msg', this.showMsg)
    },
    unmounted() {
        this.unsub()
    }
}
</script>
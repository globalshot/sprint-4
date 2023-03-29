<template>
    <section class="main-layout">
        <div class="alert flex" style="display: none;">
            <div class="color-left"></div>
            <section class="alert-content flex align-center"><span>
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                        <path
                            d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z">
                        </path>
                        <path
                            d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z">
                        </path>
                    </svg>
                </span>
                <p></p>
                <button class="close-btn">X</button>
            </section>
        </div>
        <main class="app-container main-layout full">
            <section class="gig-payment">
                <section class="payment-container flex">
                    <section class="payment-details-container">
                        <h2>Payment Option</h2>
                        <section class="credit-selection flex">
                            <div class="credit-txt">
                                <p>Credit &amp; Debit Cards</p>
                            </div>
                            <div class="visa"><span><!--?xml version="1.0" ?--><svg height="50px"
                                        style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                                        width="100px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g id="形状_1_3_" style="enable-background:new    ;">
                                            <g id="形状_1">
                                                <g>
                                                    <path
                                                        d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z"
                                                        style="fill-rule:evenodd;clip-rule:evenodd;fill:#005BAC;"></path>
                                                </g>
                                            </g>
                                        </g>
                                        <g id="形状_1_2_" style="enable-background:new    ;">
                                            <g id="形状_1_1_">
                                                <g>
                                                    <path
                                                        d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z"
                                                        style="fill-rule:evenodd;clip-rule:evenodd;fill:#F6AC1D;"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></span></div>
                        </section>
                        <section class="payment-option">
                            <div class="card-info flex">
                                <div class="card-num-container">
                                    <p>Card Number</p><input class="card-num" type="text" value="4580 5926 2262 7546">
                                </div>
                                <div class="shorts-input">
                                    <div>
                                        <p>Expiration Date</p><input class="short" type="text" value="12 / 26">
                                    </div>
                                    <div>
                                        <p>Security Code</p><input class="short" type="text" value="226">
                                    </div>
                                </div>
                            </div>
                            <div class="name-inputs flex">
                                <div>
                                    <p>First Name</p><input class="name-input" type="text">
                                </div>
                                <div>
                                    <p>Last Name</p><input class="name-input" type="text">
                                </div>
                            </div>
                        </section>
                    </section>
                    <section class="package-container">
                        <section class="gig-package-payment">
                            <section class="package-content">
                                <section class="header flex space-between">
                                    <div class="img-container"><img
                                            src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217276086/original/6a004b8b82868ab02836bdfcb42c4a0e4b042f87.png">
                                    </div>
                                    <p class="title">I will provide quality essays research and summaries on any topic</p>
                                </section>
                                <h3 class="price">US$67</h3>
                                <p> 1 custom logo+high resolution file+3d mockup+logo transparency+ 300dpi </p>
                                <ul class="features clean-list">
                                    <li class="regular">
                                        <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                    <path
                                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                    </path>
                                                </svg></span></div> 1 concept included
                                    </li>
                                    <li class="regular">
                                        <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                    <path
                                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                    </path>
                                                </svg></span></div> Logo transparency
                                    </li>
                                    <li class="regular">
                                        <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                    <path
                                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                    </path>
                                                </svg></span></div> Printable file
                                    </li>
                                    <li class="regular">
                                        <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                    <path
                                                        d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                    </path>
                                                </svg></span></div> Include 3D mockup
                                    </li>
                                </ul>
                                <div class="pricing">
                                    <p>Service Fee</p>
                                    <p>US$10.05</p>
                                </div>
                                <div class="pricing">
                                    <p>VAT</p>
                                    <p>US$9.74</p>
                                </div>
                                <div class="pricing total">
                                    <p>Total</p>
                                    <p>US$88.44</p>
                                </div>
                                <div class="pricing">
                                    <p class="bold">Delivery Time</p>
                                    <p>1 Days</p>
                                </div><button class="continue-btn">Confirm And Pay</button>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>

    </section>
</template>

<script>
import { gigService } from './../services/gig.service'
export default {
    // props: {
    //     gig: {
    //         type: Object,
    //         required: true
    //     }
    // },
    data() {
        return {
            gig: {}
        }
    },
    created() {
        console.log(this.gig);
        this.getGig()
    },
    methods: {
        getGig() {
            console.log(this.$route.params);
            const { id } = this.$route.params;
            console.log(id);
            gigService.getById(id)
                .then(gig => {
                    console.log('gig', gig);
                    this.gig = gig;
                })
        },
        async saveOrder() {
            try {
                await this.$store.dispatch({ addOrder, order: { ...this.order } })
                showSuccessMsg('Order Saved')
                this.$router.push('/gig')
            }
            catch (err) {
                // showErrorMsg('Failed to save')
            }
        },
    }

}
</script>
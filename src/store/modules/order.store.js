import { gigService } from "../../services/gig.service"
import { orderService } from "../../services/order.service"
import { userService } from "../../services/user.service"


export function getActionRemoveOrder(orderId) {
    return {
        type: 'removeOrder',
        orderId
    }
}
export function getActionAddOrder(order) {
    return {
        type: 'addOrder',
        order
    }
}
export function getActionUpdateOrder(order) {
    return {
        type: 'updateOrder',
        order
    }
}
export function getActionAddOrderMsg(orderId) {
    return {
        type: 'addOrderMsg',
        orderId,
        txt: 'Stam txt'
    }
}

export const orderStore = {
    state: {
        orders: []
    },
    getters: {
        orders({orders}) { return orders },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.unshift(order)
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex(c => c._id === order._id)
            state.orders.splice(idx, 1, order)
        },
        // removeGig(state, { gigId }) {
        //     state.gigs = state.gigs.filter(gig => gig._id !== gigId)
        // },
        // addGigMsg(state, { gigId , msg}) {
        //     const gig = state.gigs.find(gig => gig._id === gigId)
        //     if (!gig.msgs) gig.msgs = []
        //     gig.msgs.push(msg)
        // },
    },
    actions: {
        async addOrder(context, { gigId }) {
            try {
                const order = await orderService.save(gigId)
                context.commit(getActionAddOrder(order))
                return order
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        },
        async updateOrder(context, { order }) {
            try {
                order = await orderService.update(order)
                context.commit(getActionUpdateOrder(order))
                return order
            } catch (err) {
                console.log('orderStore: Error in updateOrder', err)
                throw err
            }
        },
        // async updateGig(context, { gig }) {
        //     try {
        //         gig = await gigService.save(gig)
        //         context.commit(getActionUpdateGig(gig))
        //         return gig
        //     } catch (err) {
        //         console.log('gigStore: Error in updateGig', err)
        //         throw err
        //     }
        // },
        // async loadGigs( context , { filterBy }) {
        //     try {
        //         const gigs = await gigService.query(filterBy)
        //          context.commit({ type: 'setGigs', gigs })
        //     } catch (err) {
        //         console.log('gigStore: Error in loadGigs', err)
        //         throw err
        //     }
        // },
        // async removeGig(context, { gigId }) {
        //     try {
        //         await gigService.remove(gigId)
        //         context.commit(getActionRemoveGig(gigId))
        //     } catch (err) {
        //         console.log('gigStore: Error in removeGig', err)
        //         throw err
        //     }
        // },
        // async addGigMsg(context, { gigId, txt }) {
        //     try {
        //         const msg = await gigService.addGigMsg(gigId, txt)
        //         context.commit({type: 'addGigMsg', gigId, msg })
        //     } catch (err) {
        //         console.log('gigStore: Error in addGigMsg', err)
        //         throw err
        //     }
        // },

    }
}
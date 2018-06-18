import Vue from 'vue'
import Vuex from 'vuex'
const superagent = require('superagent')
// const _=require('lodash')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    apiVersion: "",
    jvmVersion: "",
    hotels: []
  },
  mutations: {
    setStateByField(state, payload){
      let fieldName = payload.fieldName
      state[fieldName] = payload[fieldName]
    },
  },
  actions: {
    getVersion(context) {
      superagent.post("/api/restVersion").then( res => {
        context.commit('setStateByField', { 
          fieldName: 'apiVersion',
          apiVersion: res.body.version
        })
        context.commit('setStateByField', { 
          fieldName: 'jvmVersion',
          jvmVersion: res.body.jvmVersion
        })
      }).catch(err => {
        /* eslint-disable no-console */
        console.log(err)
      })
    },

    retrieveHotels(context){
      superagent.post("/api/hotels").then( res => {
        console.log(res.body)
        context.commit('setStateByField', { 
          fieldName: 'hotels',
          hotels: res.body.content
        })
      }).catch(err => {
        /* eslint-disable no-console */
        console.log(err)
      })
    },
  }
})

export default store

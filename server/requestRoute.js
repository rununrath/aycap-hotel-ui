const superagent = require('superagent')
const express = require('express')
const router = express.Router()
// const moment = require('moment')
// const _ = require('lodash')

const HOTELS_REST_URL = process.env.HOTELS_REST_URL || "http://ec2-13-228-227-224.ap-southeast-1.compute.amazonaws.com:30711/example/v1/hotels"
router.post('/hotels', (req, res) => {
  superagent.get(HOTELS_REST_URL).then( hotelResp => {
    res.json(hotelResp.body)
  }).catch(err => {
    console.log(err)
    res.statusCode(500)
  })
})

router.post('/restVersion', (req, res) => {
  superagent.get(HOTELS_REST_URL + "/apiversion").then( resp => {
    res.json(resp.body)
  }).catch(err => {
    console.log(err)
    res.statusCode(500)
  })
})

module.exports = router



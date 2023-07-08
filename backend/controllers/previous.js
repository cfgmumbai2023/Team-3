const Previous = require('../models/Previous')
const Track = require('../models/Track')

const addRecord = async (req, res) => {
    const previous = await Previous.create({
        ...req.body
    });
    res.status(201).send({
        status: true
    })
}

const getLatest = async (req, res) => {
    const { uId } = req.params
    const previous = await Previous.find({
        user: uId,
    }).sort({
        createdAt: -1
    })
    res.status(201).send({
        previous
    })
}

const trackTime = async (req, res) => {
    const track = await Track.create({
        ...req.body
    });
    res.status(201).send({
        track
    })
}

module.exports = {
    addRecord,
    getLatest
}
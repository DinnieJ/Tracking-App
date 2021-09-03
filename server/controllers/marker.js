const Marker = require('../models/marker')


const getAllMarkers = async (req, res) => {
    try {
        const markers = await Marker.find()

        if(markers) res.status(200).json(markers)
    } catch(e) {
        res.status(400).json({ message: e })
    }
}

const createMarker = async (req, res) => {
    try {
        const { lat, lng } = req.body

        const newMarker = new Marker({
            lat,
            lng
        })

        await newMarker.save().then(() => {
            res.status(200).json({ message: 'CREATE_MARKER_SUCCESS' })
        }).catch(err => {
            throw err
        })
    } catch(e) {
        res.status(400).json({ message: e })
    }
}


module.exports = {
    createMarker,
    getAllMarkers
}
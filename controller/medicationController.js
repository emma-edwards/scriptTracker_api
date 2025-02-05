const asyncHandler = require('express-async-handler');

const getMedications = asyncHandler(async (req, res) => {
    return res.status(200).json({"response": "success"})
})

module.exports = { getMedications }
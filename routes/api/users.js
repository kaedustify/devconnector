const express = require('express');
const router = express.Router();

//@route GET api/users/test
//@dec Test post route 
//@access Public

router.get('/test', (req, res) => {
    res.json({msg: "Users Works"}),
    console.log('Users Works')
});

module.exports = router;
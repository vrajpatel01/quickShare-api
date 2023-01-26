const router = require('express').Router();
const File = require('../models/files')

router.get('/:uuid',async(req,res)=>{
    const data = await File.findOne({uuid: req.params.uuid});

    if(!data){
        return res.render('download',{status: "file is expired"});
    }

    res.download(`${__dirname}/../${data.path}`)
})

module.exports = router;
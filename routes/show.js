const express = require('express');
const { find } = require('../models/files');
const File = require('../models/files');

const router = express.Router();

router.get('/:uuid',async(req,res)=>{

    try {
        const data = await File.findOne({uuid: req.params.uuid});
        if(!data){
            res.render('download.ejs',{message: "File Not found..."});
        }else{

            const result = {
                fileName: data.filename,
                uuid: data.uuid,
                size: data.size,
                download: `${process.env.SERVER_DOMAIN_NAME}/file/download/${data.uuid}`
            }
            return res.render('download.ejs',{data: result})
        }
    } catch (error) {
        res.json({error: error})   
    }
})

module.exports = router;
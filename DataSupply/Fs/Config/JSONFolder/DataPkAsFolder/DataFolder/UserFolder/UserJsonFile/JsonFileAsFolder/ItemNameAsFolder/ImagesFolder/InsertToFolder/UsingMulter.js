const multer = require('multer');
let CommonFromCheck = require("../CheckImagesFolder");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
     //   console.log("bbbbbbbb : ", req.body);
        let LocalFromCommonFromCheck = CommonFromCheck.ForExistence({
            inFolderName: req.body.inFolderName,
            inFileNameOnly: req.body.inFileNameOnly,
            inItemName: req.body.inItemName,
            inDataPK: req.KeshavSoft.DataPk
        });

        if (LocalFromCommonFromCheck.KTF) {
            cb(null, `${LocalFromCommonFromCheck.ImagesFolderPath}/16` );
        };

        //cb(null, "Images");
    },
    filename: function (req, file, cb) {
        // let LocalFromCommonFromCheck = CommonFromCheck.ForExistence({
        //     inFolderName: "Masters",
        //     inFileNameOnly: "Items",
        //     inItemName: "ItemName",
        //     inDataPK: 901
        // });

        //  console.log("req---------- : ", LocalFromCommonFromCheck, file);
        // if (LocalFromCommonFromCheck.KTF) {
        //     cb(null,  file.originalname);
        // };
        //  let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        //cb(null, Date.now() + ext);
        //  cb(null, Date.now() + path.extname(file.originalname));
        //cb(null, req.body.nspeakers + path.extname(file.originalname));

        // cb(null, req.KeshavSoft + path.extname(file.originalname));
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

module.exports = { upload };

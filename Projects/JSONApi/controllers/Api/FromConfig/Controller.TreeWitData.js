let Repos = require("../../../Repository/Api/FromConfig/TreeWitData");

let getFunc = (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let ResponseData = Repos.getFunc({ inDataPk: LocalDataPk });

    res.json(ResponseData);
};

module.exports = { getFunc };
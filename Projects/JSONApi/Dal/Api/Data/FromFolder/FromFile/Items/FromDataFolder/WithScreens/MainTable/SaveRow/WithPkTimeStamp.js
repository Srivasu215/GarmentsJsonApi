// let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/GeneratePk/EntryFile");
// let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/GeneratePkWithTimeStamp/EntryFile");
let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/WithCheckingTimeStamp/CheckForPk");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inScreenname, inDataPK, inDataToInsert, inDatakUserName }) => {

    let LocalReturnObject = CommonDataSupply.StartFunc({
        inFolderName: inFolderName,
        inFileNameOnly: inFileNameOnly,
        inItemName: inItemName,
        inScreenName: inScreenname,
        inDataPK: inDataPK,
        inDataToInsert: inDataToInsert,
        inDatakUserName: inDatakUserName
    });

    return LocalReturnObject;
};



let fs = require("fs");
let CommonFromCheck = require("../Check");

let ForExistence = ({ inFolderName, inFileNameOnly, inDataPK }) => {
    let LocalinFolderName = inFolderName;
    let LocalinDataPK = inDataPK;
    //    let LocalReturnData = { KTF: false, DirPath: "", CreatedLog: {} };

    let LocalFromCommonFromCheck = CommonFromCheck.ForExistence({
        inFolderName: LocalinFolderName,
        inDataPK: LocalinDataPK
    });

    let LocalReturnData = { ...LocalFromCommonFromCheck };
    LocalReturnData.KTF = false;

    LocalReturnData.JsonFilePath = `${LocalFromCommonFromCheck.FolderPath}/${inFileNameOnly}`;

    if (LocalFromCommonFromCheck.KTF === false) {
        
        return LocalReturnData;
    };

    try {
        if (fs.statSync(LocalReturnData.JsonFilePath).isDirectory()) {
            LocalReturnData.KTF = true;
        } else {
            // LocalReturnData.KReason = "File not found!";
            //            LocalReturnData.KReason = "JsonFilePath not found!";
            LocalReturnData.KReason = `JsonFilePath not found! : ${LocalReturnData.JsonFilePath}`;
        }
    } catch (error) {
        LocalReturnData.KReason = `JsonFilePath not found! : ${LocalReturnData.JsonFilePath}`;
        // LocalReturnData.KReason = error;
    };

    return LocalReturnData;
};

// console.log("ForExistence : ", ForExistence({
//     inFolderName: "Masters",
//     inFileNameOnly: "Customers",
//     inDataPK: 16
// }));

module.exports = { ForExistence };

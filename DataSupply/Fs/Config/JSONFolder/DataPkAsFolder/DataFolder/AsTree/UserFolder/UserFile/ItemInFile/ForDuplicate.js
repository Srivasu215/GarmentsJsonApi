let Path = require("path");
let CommonFromFilesgetDirectories = require("../../../../UserFolder/getDirectories");
let CommonFromgetDirectories = require("../../ForDuplicate");
let CommonFromgetData = require("../../../../UserFolder/UserJsonFile/PullDataFromFile/FromFolderAndFile");
let CommonMock = require("../../../../../../../../../MockAllow.json");

let StartFunc = async ({ inDataPK }) => {
    let LocalDataPK = inDataPK;
    let LocalReturnObject = {};
    LocalReturnObject.Folders = {};

    let LocalArray = CommonFromgetDirectories.AsObject({ inDataPK: LocalDataPK });

    Object.entries(LocalArray).forEach(
        ([KeyFolder, ValueFolder]) => {

            Object.entries(ValueFolder).forEach(
                ([KeyFile, ValueFile]) => {
                    ValueFile.Files = {};
                    let localFilesArray = CommonFromFilesgetDirectories.AsArray({ inFolderName: KeyFile, inDataPK: LocalDataPK });
                    localFilesArray.forEach(loopFileName => {
                        const filename = Path.parse(loopFileName).name
                        ValueFile.Files[filename] = {};
                        ValueFile.Files[filename].FileName = loopFileName;
                        ValueFile.Files[filename].Items = {};

                        let localData = CommonFromgetData.StartFunc({ inFolderName: KeyFile, inFileNameOnly: filename, inDataPK: LocalDataPK });
                        // console.log("localData",localData);
                        Object.entries(localData.JsonData).forEach(([itemKey, itemValue]) => {
                            ValueFile.Files[filename].Items[itemKey] = {};
                            ValueFile.Files[filename].Items[itemKey].ItemName = itemKey;

                        });

                    });

                }
            );

        }
    );
    return LocalArray;

};
if (CommonMock.AllowMock) {
    if (CommonMock.MockKey === 'KKVR') {

        StartFunc({
            inDataPK: CommonMock.DataPK
        }).then(PromiseData => {
            console.log('PromiseData : ', PromiseData);

        });
    };
};


module.exports = { StartFunc };

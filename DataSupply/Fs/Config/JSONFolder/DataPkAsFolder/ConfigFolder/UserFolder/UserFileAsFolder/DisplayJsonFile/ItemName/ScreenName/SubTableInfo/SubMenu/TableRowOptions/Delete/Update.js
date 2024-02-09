let CommonPullDataFromConfig = require("../../../../../../PullData/AsJson");
let CommonFromPushData = require("../../../../../../PushData/FromFoldFile");
let CommonCheckInputs = require("../../../CommonFuncs/CheckInputs");

let CommonMockAllow = require("../../../../../../../../../../../../../../MockAllow.json");

let Update = async ({ DataPK, FolderName, FileName, ItemName, ScreenName, GridName, BodyAsJson }) => {
    const LocalDataToUpdate = (({ Simple }) => ({ Simple }))(BodyAsJson);

    let LocalinDataPK = DataPK;
    let localFolderName = FolderName;
    let localinFileName = FileName;
    let LocalItemName = ItemName;
    let LocalScreenName = ScreenName;
    let localGridName = GridName;

    let LocalFromUpdate;
    let LocalReturnObject = { KTF: false };

    let LocalFromPullData = await CommonPullDataFromConfig.FromFoldFile({
        inFolderName: localFolderName,
        inFileNameWithExtension: `${localinFileName}.json`,
        inDataPK: LocalinDataPK
    });

    if (LocalFromPullData.KTF === false) {
        LocalReturnObject.KReason = LocalFromPullData.KReason;
        return await LocalReturnObject;
    };

    let LocalNewData = JSON.parse(JSON.stringify(LocalFromPullData.JsonData));

    let LocalFromCommonCheckInputs = await CommonCheckInputs.StartFunc({
        inItemName: LocalItemName, inScreenName: LocalScreenName, GridName: localGridName,
        inConfigData: LocalFromPullData.JsonData
    });

    if (LocalFromCommonCheckInputs.KTF === false) {
        LocalReturnObject.KReason = LocalFromCommonCheckInputs.KReason;
        return await LocalReturnObject;
    };

    LocalNewData[LocalItemName][LocalScreenName].SubTableColumns[localGridName].TableInfo.TableRowOptions.Delete.Simple = LocalDataToUpdate.Simple;

    LocalFromUpdate = await CommonFromPushData.StartFunc({
        inFolderName: localFolderName,
        inFileNameWithExtension: `${localinFileName}.json`,
        inDataPK: LocalinDataPK,
        inDataToUpdate: LocalNewData,
        inOriginalData: LocalFromPullData.JsonData
    });

    if (LocalFromUpdate.KTF) {
        LocalReturnObject.KTF = true;
    };


    return await LocalReturnObject;
};

if (CommonMockAllow.AllowMock) {
    if (CommonMockAllow.MockKey === "") {
        UpdateKeys({
            DataPK: CommonMockAllow.DataPK, folderName: "Masters", FileName: "Customers.json", ItemName: "CustomersName", ScreenName: "Create",
            DataAttribute: "pk",
            BodyAsJson: {
                DisplayName: "ppppppppppp"
            }
        }).then(p => {
            console.log("pppp : ", p);
        });

    };

};

module.exports = {
    Update
};
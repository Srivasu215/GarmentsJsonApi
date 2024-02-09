let CommonConfigFolder = require("../../ConfigFolder/UserFolder/CreateFolder/FromInput");
let CommonDataFolder = require("../../DataFolder/UserFolder/CreateFolder/FromInput");
let CommonMockAllow = require("../../../../../../MockAllow.json");

let StartFunc = ({ inFolderName, inDataPK }) => {
    // return "From DAL";
    let localFromConfig = CommonConfigFolder.StartFunc({
        inFolderName,
        inDataPK
    });

    let localFromData = CommonDataFolder.StartFunc({
        inFolderName,
        inDataPK
    });

    return [localFromConfig, localFromData];
};

if (CommonMockAllow.AllowMock) {
    return "From DAL";

    if (CommonMockAllow.MockKey === "Keshav34") {
        let LocalFrom = StartFunc({
            inFolderName: "Masters",
            inDataPK: 416
        });

        console.log("LocalFrom : ", LocalFrom);
    };
};

module.exports = { StartFunc };
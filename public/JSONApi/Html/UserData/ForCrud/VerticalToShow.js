import { jFShowFoldersInMenu } from "../ForDataHtml/Header/FromFolder.js";
import { StartFunc as VerticalStartFunc } from "./VerticalToShow/FetchFuns.js";
//import { StartFunc as KeyPressStartFunc } from "./Vertical/AddListenersFuncs/KeyPress.js";
import { StartFunc as AddListenersFuncsStartFunc } from "./VerticalToShow/AddListenersFuncs/StartFunc.js";
import { StartFunc as StartFuncClickFuncs } from "../ForDataHtml/Header/ClickFuncs.js";
import { StartFunc as StartFuncToDataList } from "../ToDataList/FromLocalStorageKey.js";

StartFuncToDataList();
StartFuncClickFuncs();

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

VerticalStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
}).then(p => {
    if (p) {
        AddListenersFuncsStartFunc({
            inProjectName: jVarGlobalProject,
            inSubRoute: jVarGlobalSubRoute
        });
    };
});
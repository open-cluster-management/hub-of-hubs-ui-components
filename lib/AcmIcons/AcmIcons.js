"use strict";
/* Copyright Contributors to the Open Cluster Management project */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmIcon = exports.AcmIconVariant = void 0;
var ansibeTower_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/ansibeTower-icon"));
var eye_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/eye-icon"));
var eye_slash_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/eye-slash-icon"));
var server_icon_1 = __importDefault(require("@patternfly/react-icons/dist/js/icons/server-icon"));
var react_1 = __importStar(require("react"));
var OpenCurrentTabIcon_1 = __importDefault(require("./OpenCurrentTabIcon"));
var OpenNewTabIcon_1 = __importDefault(require("./OpenNewTabIcon"));
var TemplateIcon_1 = __importDefault(require("./TemplateIcon"));
var AWSIcon_1 = __importDefault(require("./AWSIcon"));
var AzureIcon_1 = __importDefault(require("./AzureIcon"));
var BrokenLinkIcon_1 = __importDefault(require("./BrokenLinkIcon"));
var CloudIcon_1 = __importDefault(require("./CloudIcon"));
var GCPIcon_1 = __importDefault(require("./GCPIcon"));
var IBMCloudIcon_1 = __importDefault(require("./IBMCloudIcon"));
var OCPIcon_1 = __importDefault(require("./OCPIcon"));
var RedHatIcon_1 = __importDefault(require("./RedHatIcon"));
var VMWareIcon_1 = __importDefault(require("./VMWareIcon"));
var IBMLogoIcon_1 = __importDefault(require("./IBMLogoIcon"));
var HybridIcon_1 = __importDefault(require("./HybridIcon"));
var AcmIconVariant;
(function (AcmIconVariant) {
    AcmIconVariant["template"] = "template";
    AcmIconVariant["visibilityon"] = "visibilityon";
    AcmIconVariant["visibilityoff"] = "visibilityoff";
    AcmIconVariant["brokenlink"] = "brokenlink";
    AcmIconVariant["redhat"] = "redhat";
    AcmIconVariant["aws"] = "aws";
    AcmIconVariant["gcp"] = "gcp";
    AcmIconVariant["azure"] = "azure";
    AcmIconVariant["ocp"] = "ocp";
    AcmIconVariant["ibm"] = "ibm";
    AcmIconVariant["ibmlogo"] = "ibmlogo";
    AcmIconVariant["baremetal"] = "baremetal";
    AcmIconVariant["vmware"] = "vmware";
    AcmIconVariant["cloud"] = "cloud";
    AcmIconVariant["openCurrentTab"] = "opencurrenttab";
    AcmIconVariant["openNewTab"] = "opennewtab";
    AcmIconVariant["ansible"] = "ansible";
    AcmIconVariant["hybrid"] = "hybrid";
})(AcmIconVariant = exports.AcmIconVariant || (exports.AcmIconVariant = {}));
// https://www.patternfly.org/v4/guidelines/icons
function AcmIcon(props) {
    switch (props.icon) {
        case AcmIconVariant.template:
            return react_1.default.createElement(TemplateIcon_1.default, __assign({}, props));
        case AcmIconVariant.visibilityoff:
            return react_1.default.createElement(eye_slash_icon_1.default, __assign({}, props));
        case AcmIconVariant.visibilityon:
            return react_1.default.createElement(eye_icon_1.default, __assign({}, props));
        case AcmIconVariant.brokenlink:
            return react_1.default.createElement(BrokenLinkIcon_1.default, __assign({}, props));
        case AcmIconVariant.redhat:
            return react_1.default.createElement(RedHatIcon_1.default, __assign({}, props));
        case AcmIconVariant.aws:
            return react_1.default.createElement(AWSIcon_1.default, __assign({}, props));
        case AcmIconVariant.gcp:
            return react_1.default.createElement(GCPIcon_1.default, __assign({}, props));
        case AcmIconVariant.azure:
            return react_1.default.createElement(AzureIcon_1.default, __assign({}, props));
        case AcmIconVariant.ocp:
            return react_1.default.createElement(OCPIcon_1.default, __assign({}, props));
        case AcmIconVariant.ibm:
            return react_1.default.createElement(IBMCloudIcon_1.default, __assign({}, props));
        case AcmIconVariant.baremetal:
            return react_1.default.createElement(server_icon_1.default, __assign({}, props, { color: "slategray" }));
        case AcmIconVariant.vmware:
            return react_1.default.createElement(VMWareIcon_1.default, __assign({}, props));
        case AcmIconVariant.cloud:
            return react_1.default.createElement(CloudIcon_1.default, __assign({}, props));
        case AcmIconVariant.openCurrentTab:
            return react_1.default.createElement(OpenCurrentTabIcon_1.default, __assign({}, props));
        case AcmIconVariant.openNewTab:
            return react_1.default.createElement(OpenNewTabIcon_1.default, __assign({}, props));
        case AcmIconVariant.ansible:
            return react_1.default.createElement(ansibeTower_icon_1.default, __assign({}, props, { color: "#EE0000" }));
        case AcmIconVariant.ibmlogo:
            return react_1.default.createElement(IBMLogoIcon_1.default, __assign({}, props));
        case AcmIconVariant.hybrid:
            return react_1.default.createElement(HybridIcon_1.default, __assign({}, props));
        /* istanbul ignore next */
        default:
            return react_1.default.createElement(react_1.Fragment, null);
    }
}
exports.AcmIcon = AcmIcon;
//# sourceMappingURL=AcmIcons.js.map
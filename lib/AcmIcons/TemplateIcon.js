"use strict";
/* Copyright Contributors to the Open Cluster Management project */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcmTemplateIcon = void 0;
var react_1 = __importDefault(require("react"));
var createAcmIcon_1 = require("./createAcmIcon");
exports.AcmTemplateIcon = createAcmIcon_1.createAcmIcon({
    xOffset: 0,
    yOffset: 0,
    width: 32,
    height: 32,
    svgPaths: (react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("circle", { fill: "#06C", cx: "16", cy: "16", r: "16" }),
        react_1.default.createElement("g", { fill: "#FFF" },
            react_1.default.createElement("path", { d: "M17.829 8.686l3.657 3.657V22.4c0 .505-.41.914-.915.914H11.43a.914.914 0 01-.915-.914V9.6c0-.505.41-.914.915-.914h6.4zm-.907.914H11.43v12.8h9.142v-9.146l-2.709-.008a.914.914 0 01-.911-.905L16.922 9.6zm.92.392l.023 2.34 2.324.007-2.348-2.347z" }),
            react_1.default.createElement("path", { d: "M13.257 16.915h5.486v1h-5.486zM13.257 19.657h5.486v1h-5.486z" })))),
});
exports.default = exports.AcmTemplateIcon;
//# sourceMappingURL=TemplateIcon.js.map
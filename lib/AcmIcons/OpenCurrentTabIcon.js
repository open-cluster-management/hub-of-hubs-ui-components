"use strict";
/* Copyright Contributors to the Open Cluster Management project */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenCurrentTabIcon = void 0;
var react_1 = __importDefault(require("react"));
var createAcmIcon_1 = require("./createAcmIcon");
exports.OpenCurrentTabIcon = createAcmIcon_1.createAcmIcon({
    xOffset: 0,
    yOffset: 0,
    width: 1024,
    height: 1024,
    svgPaths: (react_1.default.createElement("g", { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M896,751.9996 L896,819.9996 C896,826.6276 890.627,831.9996 884,831.9996 L140,831.9996 C133.373,831.9996 128,826.6276 128,819.9996 L128,447.9996 L896,447.9996 L896,751.9996 Z M128,319.9996 L896,319.9996 L896,191.9996 L128,191.9996 L128,319.9996 Z M930,63.9996 L896,63.9996 L128,63.9996 L94,63.9996 C42.085,63.9996 0,106.0846 0,157.9996 L0,191.9996 L0,831.9996 L0,865.9996 C0,917.9146 42.085,959.9996 94,959.9996 L128,959.9996 L930,959.9996 C981.915,959.9996 1024,917.9146 1024,865.9996 L1024,157.9996 C1024,106.0846 981.915,63.9996 930,63.9996 L930,63.9996 Z" }))),
});
exports.default = exports.OpenCurrentTabIcon;
//# sourceMappingURL=OpenCurrentTabIcon.js.map
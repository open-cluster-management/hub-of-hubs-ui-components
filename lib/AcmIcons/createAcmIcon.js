"use strict";
/* Copyright Contributors to the Open Cluster Management project */
/* istanbul ignore file */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAcmIcon = void 0;
var createIcon_1 = require("@patternfly/react-icons/dist/js/createIcon");
var react_1 = __importDefault(require("react"));
function createAcmIcon(iconDefinition) {
    return function (props) {
        var _a, _b;
        var size = props.size, color = props.color, title = props.title, noVerticalAlign = props.noVerticalAlign, otherProps = __rest(props, ["size", "color", "title", "noVerticalAlign"]);
        var hasTitle = Boolean(title);
        var heightWidth = createIcon_1.getSize(size !== null && size !== void 0 ? size : createIcon_1.IconSize.sm);
        var baseAlign = -0.125 * Number.parseFloat(heightWidth);
        var style = noVerticalAlign ? undefined : { verticalAlign: baseAlign + "em" };
        var viewBox = [
            (_a = iconDefinition.xOffset) !== null && _a !== void 0 ? _a : 0,
            (_b = iconDefinition.yOffset) !== null && _b !== void 0 ? _b : 0,
            iconDefinition.width,
            iconDefinition.height,
        ].join(' ');
        return (react_1.default.createElement("svg", __assign({ style: style, fill: color !== null && color !== void 0 ? color : 'currentColor', height: heightWidth, width: heightWidth, viewBox: viewBox, "aria-labelledby": hasTitle ? props.id : undefined, "aria-hidden": hasTitle ? undefined : true, role: "presentation" }, otherProps),
            hasTitle && react_1.default.createElement("title", { id: props.id }, title),
            iconDefinition.svgPaths));
    };
}
exports.createAcmIcon = createAcmIcon;
//# sourceMappingURL=createAcmIcon.js.map
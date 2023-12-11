"use client";
"use strict";
exports.__esModule = true;
var config_1 = require("@/config");
var react_1 = require("react");
var NavItem_1 = require("./NavItem");
var NavItems = function () {
    var _a = react_1.useState(null), activeIndex = _a[0], setActiveIndex = _a[1];
    var isAnyOpen = activeIndex !== null;
    return (React.createElement("div", { className: "flex gap-4 h-full" }, config_1.PRODUCT_CATEGORIES.map(function (category, i) {
        var handleOpen = function () {
            if (activeIndex === i) {
                setActiveIndex(null);
            }
            else {
                setActiveIndex(i);
            }
        };
        var isOpen = i === activeIndex;
        return (React.createElement(NavItem_1["default"], { category: category, isOpen: isOpen, handleOpen: handleOpen, key: category.value, isAnyOpen: isAnyOpen }));
    })));
};
exports["default"] = NavItems;

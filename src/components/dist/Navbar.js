"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var MaxWidthWrapper_1 = require("./MaxWidthWrapper");
var Icons_1 = require("./Icons");
var NavItems_1 = require("./NavItems");
var Navbar = function () {
    return (React.createElement("div", { className: "bg-white sticky z-50 top-0 inset-x-0 h-16" },
        React.createElement("header", { className: "relative bg-white" },
            React.createElement(MaxWidthWrapper_1["default"], null,
                React.createElement("div", { className: "border-b border-gray-200" },
                    React.createElement("div", { className: "flex h-16 items-center" },
                        React.createElement("div", { className: "ml-4 flex lg:ml-0" },
                            React.createElement(link_1["default"], { href: '/' },
                                React.createElement(Icons_1.Icons.logo, { className: 'h-10 w-10' }))),
                        React.createElement("div", { className: "hidden z-50 lg:ml-8 lg:block lg:self-stretch" },
                            React.createElement(NavItems_1["default"], null))))))));
};
exports["default"] = Navbar;

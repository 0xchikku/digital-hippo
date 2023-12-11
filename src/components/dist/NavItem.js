"use client";
"use strict";
exports.__esModule = true;
var button_1 = require("./ui/button");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var NavItem = function (_a) {
    var category = _a.category, handleOpen = _a.handleOpen, isOpen = _a.isOpen, isAnyOpen = _a.isAnyOpen;
    return (React.createElement("div", { className: "flex" },
        React.createElement("div", { className: "relative flex items-center" },
            React.createElement(button_1.Button, { className: "gap-1.5", onClick: handleOpen, variant: isOpen ? 'secondary' : 'ghost' },
                category.label,
                React.createElement(lucide_react_1.ChevronDown, { className: utils_1.cn('h-4 w-4 transition-all text-muted-foreground', {
                        "-rotate-180": isOpen
                    }) })))));
};
exports["default"] = NavItem;

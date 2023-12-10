"use strict";
exports.__esModule = true;
var MaxWidthWrapper_1 = require("@/components/MaxWidthWrapper");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
// move to constants
var perks = [
    {
        name: 'Instant Delivery',
        Icon: lucide_react_1.ArrowDownToLine,
        description: 'Get your assets delivered to your email in seconds and download them right away.'
    },
    {
        name: 'Guaranteed Quality',
        Icon: lucide_react_1.CheckCircle,
        description: 'Every asset on our platform is verified by our team to ensure our highest quality standard. Not happy? We offer a 30-day refund guarantee.'
    },
    {
        name: 'For the Planet',
        Icon: lucide_react_1.Leaf,
        description: "We've pledged 1% of sales to the preservation and restoration of the natural enironment."
    },
];
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(MaxWidthWrapper_1["default"], null,
            React.createElement("div", { className: "py-20 mx-auto text-center flex flex-col items-center max-w-3xl" },
                React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" },
                    "Your marketplace for high-quality",
                    ' ',
                    React.createElement("span", { className: "text-blue-600" }, "digital assets")),
                React.createElement("p", { className: "mt-6 text-lg max-w-prose text-muted-foreground" }, "Welcome to DigitalHippo. Every assest on our platform is verified by our team to ensure our highest quality standards."),
                React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 mt-6" },
                    React.createElement(link_1["default"], { href: '/products', className: button_1.buttonVariants() }, "Browse Trending"),
                    React.createElement(button_1.Button, { variant: 'ghost' }, "Our quality promise \u2192")))),
        React.createElement("section", { className: "border-t border-gray-200 bg-gray-50" },
            React.createElement(MaxWidthWrapper_1["default"], { className: 'py-20' },
                React.createElement("div", { className: "grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0" }, perks.map(function (perk) { return (React.createElement("div", { key: perk.name, className: "text-center md:flex md:items-start md:text-left lg:block lg:text-center" },
                    React.createElement("div", { className: "md:flex-shrink-0 flex justify-center" },
                        React.createElement("div", { className: "h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900" }, React.createElement(perk.Icon, { className: "w-1/3 h-1/3" }))),
                    React.createElement("div", { className: "mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6" },
                        React.createElement("h3", { className: "text-base font-medium text-gray-900" }, perk.name),
                        React.createElement("p", { className: "mt-3 text-sm text-muted-foreground" }, perk.description)))); }))))));
}
exports["default"] = Home;

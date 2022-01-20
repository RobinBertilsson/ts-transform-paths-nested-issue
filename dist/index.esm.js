import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

var Button = function () { return (jsx("button", { children: "Button" }, void 0)); };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var InputElement = function (_a) {
    var innerRef = _a.innerRef;
    return (jsx("input", { type: "text", ref: innerRef }, void 0));
};
var Input = forwardRef(function Input(props, ref) {
    return (jsx(InputElement, __assign({ innerRef: ref }, props), void 0));
});

var FormRoot = function () { return (jsx("div", { children: "MenuRoot" }, void 0)); };
var Form = Object.assign(FormRoot, {
    Button: Button,
    Input: Input
});

var form = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Form: Form
});

export { form as Form };

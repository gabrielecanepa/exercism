"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.SimpleCipher = void 0;
var SimpleCipher = /** @class */ (function () {
    function SimpleCipher(key, shift) {
        var _this = this;
        this.KEY_LENGTH = 100;
        this.CHARACTERS = String.fromCharCode.apply(String, __spreadArray([], __read(Array(123).keys()), false)).slice(97);
        this.generateKey = function (key) {
            if (key === void 0) { key = ''; }
            for (var i = 0; i < _this.KEY_LENGTH; i++) {
                key += _this.CHARACTERS[_this.getRandomShift()];
            }
            return key;
        };
        this.getRandomShift = function () {
            return Math.floor(Math.random() * (_this.CHARACTERS.length + 1));
        };
        this.key = key !== null && key !== void 0 ? key : this.generateKey();
        this.shift = shift !== null && shift !== void 0 ? shift : this.getRandomShift();
    }
    SimpleCipher.prototype.encode = function (text) {
        var _this = this;
        return text.replace(/[a-z]/g, function (char) { return _this.CHARACTERS[_this.CHARACTERS.indexOf(char) + _this.shift]; });
    };
    SimpleCipher.prototype.decode = function (encodedText) {
        var _this = this;
        return encodedText.replace(/[a-z]/g, function (char) { return _this.CHARACTERS[_this.CHARACTERS.indexOf(char) - _this.shift]; });
    };
    return SimpleCipher;
}());
exports.SimpleCipher = SimpleCipher;
var cipher = new SimpleCipher();

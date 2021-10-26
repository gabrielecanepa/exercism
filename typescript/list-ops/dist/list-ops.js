"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
    constructor(...values) {
        this.values = values;
    }
    static create(...values) {
        // Do *not* construct any array literal ([]) in your solution.
        // Do *not* construct any arrays through new Array in your solution.
        // DO *not* use any of the Array.prototype methods in your solution.
        // You may use the destructuring and spreading (...) syntax from Iterable.
        return new List(...values);
    }
    length() {
        let length = 0;
        while (length in this.values)
            length++;
        return length;
    }
    forEach(fn) {
        for (let i = 0; i in this.values; i++) {
            fn(this.values[i]);
        }
    }
    append(list) {
        return new List(...[...this.values, ...list.values]);
    }
    concat(...lists) {
        let list = this;
        for (let i = 0; i in lists; i++) {
            list = list.append(lists[i]);
        }
        return list;
    }
    filter(fn) {
        let values = [];
        for (let i = 0; i in this.values; i++) {
            values = [...values, fn(this.values[i])];
        }
        return new List(...values);
    }
}
exports.List = List;
const list1 = List.create(1, 2);
const list2 = List.create(3);
const list3 = List.create();
const list4 = List.create(4, 5, 6);
//# sourceMappingURL=list-ops.js.map
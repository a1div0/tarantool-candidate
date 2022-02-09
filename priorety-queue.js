class PrioretyQueue {
    _data = [];

    add(value, priorety) {
        const newItem = {
            value: value,
            priorety: priorety
        };

        const n = this._data.length;
        let i = n - 1;
        while (i >= 0) {
            if (this._data[i].priorety <= newItem.priorety) {
                break;
            }
            i--;
        }

        this._data.splice(i + 1, 0, newItem);
    }
    popFirst() {
        return this._data.shift();
    }
    popLast() {
        return this._data.pop();
    }
    getData() {
        return this._data;
    }
}
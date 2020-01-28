export default {

  _colors: [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ],

  all() {
    return this._colors.concat();
  },

  append(color) {
    this._colors = this._colors.concat({
      ...color,
      id: Math.max(...this._colors.map(c => c.id), 0) + 1,
    });
    return this;
  },

  remove(colorId) {
    this._colors = this._colors.filter(c => c.id !== colorId);
    return this;
  }

};

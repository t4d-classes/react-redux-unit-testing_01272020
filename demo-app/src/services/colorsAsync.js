export default {

  _colors: [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ],

  all() {
    return Promise.resolve(this._colors.concat());
  },

  append(color) {

    const newColor = {
      ...color,
      id: Math.max(...this._colors.map(c => c.id), 0) + 1,
    };

    this._colors = this._colors.concat({
      ...color,
      id: Math.max(...this._colors.map(c => c.id), 0) + 1,
    });

    return Promise.resolve(newColor);
  },

  remove(colorId) {

    const colorToDelete = this._colors.find(color => color.id === colorId);

    this._colors = this._colors.filter(c => c.id !== colorId);

    return Promise.resolve(colorToDelete);
  }

};

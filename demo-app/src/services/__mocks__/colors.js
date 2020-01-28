export default {

  all() {
    return [
      { id: 1, name: 'yellow' },
      { id: 2, name: 'orange' },
      { id: 3, name: 'brown' },
    ];
  },

  // append(color) {
  //   this._colors = this._colors.concat({
  //     ...color,
  //     id: Math.max(...this._colors.map(c => c.id), 0) + 1,
  //   });
  //   return this;
  // },

  // remove(colorId) {
  //   this._colors = this._colors.filter(c => c.id !== colorId);
  //   return this;
  // }

};
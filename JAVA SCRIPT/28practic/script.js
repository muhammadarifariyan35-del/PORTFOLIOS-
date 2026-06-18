function obj(x, y) {
  return {
    [x.toUpperCase()]: y,
    ["is" + x.toUpperCase()]: y,
  };
}
console.log(obj('activ', true));

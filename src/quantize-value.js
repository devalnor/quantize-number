// Quantize a `val` by `quantum`.
// The third parameter is `options`. At the moment, there's only a single
// option, which is `cover`. This is whether the algorithm should be covering
// or fitting.
//
// These examples may help demonstrate the difference between that option:
//
// quantizeValue(7, 5, {cover: false}) === 5
// quantizeValue(7, 5, {cover: true}) === 10
//
// The algorithm is symmetrical about zero, so you can just make every
// number in the above example negative to see how it behaves when negative
// numbers are presented.
function quantizeValue(val, quantum, {cover = false} = {}) {
  if (!quantum) { return 0; }
  var remainder = val % quantum;
  var sign = val >= 0 ? 1 : -1;
  var mod = cover && remainder ? quantum : 0;
  return val - remainder + sign * mod;
};

export default quantizeValue;

let arrayLikeSlice;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  arrayLikeSlice = require('../../index.js');
} else {
  arrayLikeSlice = returnExports;
}

const documentElement = typeof document !== 'undefined' && document.documentElement;
const itHasDocumentElement = documentElement ? it : xit;

describe('arrayLikeSlice', function() {
  it('exports a function', function() {
    expect(typeof arrayLikeSlice).toBe('function');
  });

  it('with 1 arg returns an array of the arg', function() {
    const o = [3, '4', {}];
    const r = arrayLikeSlice(o);
    expect(r).toHaveLength(3);
    expect(r[0]).toBe(o[0]);
    expect(r[1]).toBe(o[1]);
    expect(r[2]).toBe(o[2]);
  });

  it('with 2 args returns an array of the arg starting at the 2nd arg', function() {
    const o = [3, '4', 5, null];
    const r = arrayLikeSlice(o, 2);
    expect(r).toHaveLength(2);
    expect(r[0]).toBe(o[2]);
    expect(r[1]).toBe(o[3]);
  });

  it('with 3 args returns an array of the arg from the 2nd to the 3rd arg', function() {
    const o = [3, '4', 5, null];
    const r = arrayLikeSlice(o, 1, 2);
    expect(r).toHaveLength(1);
    expect(r[0]).toBe(o[1]);
  });

  it('begins at an offset from the end and includes all following elements', function() {
    const o = [3, '4', 5, null];
    let r = arrayLikeSlice(o, -2);
    expect(r).toHaveLength(2);
    expect(r[0]).toBe(o[2]);
    expect(r[1]).toBe(o[3]);

    r = arrayLikeSlice(o, -12);
    expect(r).toHaveLength(4);
    expect(r[0]).toBe(o[0]);
    expect(r[1]).toBe(o[1]);
    expect(r[2]).toBe(o[2]);
    expect(r[3]).toBe(o[3]);
  });

  it('begins at an offset from the end and includes `end` elements', function() {
    const o = [3, '4', {x: 1}, null];

    let r = arrayLikeSlice(o, -2, 1);
    expect(r).toHaveLength(0);

    r = arrayLikeSlice(o, -2, 2);
    expect(r).toHaveLength(0);

    r = arrayLikeSlice(o, -2, 3);
    expect(r).toHaveLength(1);
    expect(r[0]).toBe(o[2]);
  });

  it('begins at `start` offset from the end and includes all elements up to `end` offset from the end', function() {
    const o = [3, '4', {x: 1}, null];
    let r = arrayLikeSlice(o, -3, -1);
    expect(r).toHaveLength(2);
    expect(r[0]).toBe(o[1]);
    expect(r[1]).toBe(o[2]);

    r = arrayLikeSlice(o, -3, -3);
    expect(r).toHaveLength(0);

    r = arrayLikeSlice(o, -3, -4);
    expect(r).toHaveLength(0);
  });

  it('works with arguments', function() {
    const o = (function() {
      return arguments;
    })(3, '4', {x: 1}, null);

    let r = arrayLikeSlice(o, -3, -1);
    expect(r).toHaveLength(2);
    expect(r[0]).toBe(o[1]);
    expect(r[1]).toBe(o[2]);

    r = arrayLikeSlice(o, -3, -3);
    expect(r).toHaveLength(0);

    r = arrayLikeSlice(o, -3, -4);
    expect(r).toHaveLength(0);
  });

  it('works with strings', function() {
    const o = 'abcd';
    let r = arrayLikeSlice(o, -3, -1);
    expect(r).toHaveLength(2);
    expect(r[0]).toBe(o.charAt(1));
    expect(r[1]).toBe(o.charAt(2));

    r = arrayLikeSlice(o, -3, -3);
    expect(r).toHaveLength(0);

    r = arrayLikeSlice(o, -3, -4);
    expect(r).toHaveLength(0);
  });

  it('works with array-like', function() {
    const o = {
      0: 3,
      1: '4',
      2: {x: 1},
      3: null,
      length: 4,
    };

    let r = arrayLikeSlice(o, -3, -1);
    expect(r).toHaveLength(2);
    expect(r[0]).toBe(o[1]);
    expect(r[1]).toBe(o[2]);

    r = arrayLikeSlice(o, -3, -3);
    expect(r).toHaveLength(0);

    r = arrayLikeSlice(o, -3, -4);
    expect(r).toHaveLength(0);
  });

  it('works with sparse arrays', function() {
    const o = new Array(6);
    o[0] = 3;
    o[2] = '4';
    o[4] = {x: 1};
    o[5] = null;

    const r = arrayLikeSlice(o);
    expect(r).not.toBe(o);
    expect(r).toStrictEqual(o);
  });

  itHasDocumentElement('works with DOM nodes', function() {
    const fragment = document.createDocumentFragment();
    const expectedDOM = new Array(5).fill().map(function() {
      const div = document.createElement('div');
      fragment.appendChild(div);

      return div;
    });

    expect(arrayLikeSlice(fragment.childNodes)).toStrictEqual(expectedDOM);
  });
});

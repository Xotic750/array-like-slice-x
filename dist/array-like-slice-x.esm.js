import toObject from 'to-object-x';
import toInteger from 'to-integer-x';
import toLength from 'to-length-x';
import splitIfBoxedBug from 'split-if-boxed-bug-x';

var getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};
/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!object} arrayLike - The array like object to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. Running slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 */


var slice = function slice(arrayLike, start, end) {
  var iterable = splitIfBoxedBug(toObject(arrayLike));
  var length = toLength(iterable.length);
  var k = setRelative(toInteger(start), length);
  var relativeEnd = typeof end === 'undefined' ? length : toInteger(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;

  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
};

export default slice;

//# sourceMappingURL=array-like-slice-x.esm.js.map
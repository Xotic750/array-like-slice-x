<a
  href="https://travis-ci.org/Xotic750/array-like-slice-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/array-like-slice-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/array-like-slice-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-like-slice-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/array-like-slice-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-like-slice-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/array-like-slice-x"
  title="npm version">
<img src="https://badge.fury.io/js/array-like-slice-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/array-like-slice-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/array-like-slice-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/array-like-slice-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/array-like-slice-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/array-like-slice-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/array-like-slice-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_array-like-slice-x"></a>

## array-like-slice-x

Cross-browser array-like slicer.

<a name="exp_module_array-like-slice-x--module.exports"></a>

### `module.exports(argsObject, [start], [end])` ⇒ <code>Array</code> ⏏

The slice() method returns a shallow copy of a portion of an array into a new
array object selected from begin to end (end not included). The original
array will not be modified.

**Kind**: Exported function  
**Returns**: <code>Array</code> - A new array containing the extracted elements.

| Param      | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| argsObject | <code>Object</code> | The `arguments` to slice.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [start]    | <code>number</code> | Zero-based index at which to begin extraction. A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. If begin is undefined, slice begins from index 0.                                                                                                                                                                                                                                                                                                                                                         |
| [end]      | <code>number</code> | Zero-based index before which to end extraction. Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3). A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence. If end is omitted, slice extracts through the end of the sequence (arr.length). If end is greater than the length of the sequence, slice extracts through the end of the sequence (arr.length). |

**Example**

```js
import arrayLikeSlice from 'array-like-slice-x';

const args = (function() {
  return arguments;
})('Banana', 'Orange', 'Lemon', 'Apple', 'Mango');

console.log(arrayLikeSlice(args, 1, 3)); // ['Orange','Lemon']
```

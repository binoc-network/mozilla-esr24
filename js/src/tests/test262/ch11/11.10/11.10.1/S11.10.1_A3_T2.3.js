// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x & y returns ToNumber(x) & ToNumber(y)
 *
 * @path ch11/11.10/11.10.1/S11.10.1_A3_T2.3.js
 * @description Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null
 */

//CHECK#1
if ((1 & null) !== 0) {
  $ERROR('#1: (1 & null) === 0. Actual: ' + ((1 & null)));
}

//CHECK#2
if ((null & 1) !== 0) {
  $ERROR('#2: (null & 1) === 0. Actual: ' + ((null & 1)));
}

//CHECK#3
if ((new Number(1) & null) !== 0) {
  $ERROR('#3: (new Number(1) & null) === 0. Actual: ' + ((new Number(1) & null)));
}

//CHECK#4
if ((null & new Number(1)) !== 0) {
  $ERROR('#4: (null & new Number(1)) === 0. Actual: ' + ((null & new Number(1))));
}


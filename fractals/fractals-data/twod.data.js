//under constructions, save what?

var params = {
  fixedOrigin: {
    val: false,
    visible: false,
  },
  x0: {
    val: -2,
    min: -10,
    max: 10,
    default: -2,
    label: "x0",
    minLabel: "-10",
    maxLabel: "10",
    integer: true,
    visible: true,
  },
  x1: {
    val: 2,
    min: -10,
    max: 10,
    default: 2,
    label: "x1",
    minLabel: "-10",
    maxLabel: "10",
    integer: true,
    visible: true,
  },

  y0: {
    val: -1,
    min: -10,
    max: 10,
    default: -1,
    label: "y0",
    minLabel: "-10",
    maxLabel: "10",
    integer: true,
    visible: true,
  },
  y1: {
    val: 1,
    min: -10,
    max: 10,
    default: 1,
    label: "y1",
    minLabel: "-10",
    maxLabel: "10",
    integer: true,
    visible: true,
  },
  functions: {
    f1: "2*x-1",
    f2: "x*x",
    visible: false,
  },
  lockratio: {
   val: 1,
   min: 0,
   max: 1,
   default: 1,
   label: "lock ratio",
   minLabel: "off",
   maxLabel: "on",
   visible: true,
   integer: true

  }

};
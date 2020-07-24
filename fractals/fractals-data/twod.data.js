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
    recalc: true,
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
    recalc: true,
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
    recalc: true,
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
    recalc: true,
  },
  functions: {
    f1: "Math.sin(x)",
    f2: "Math.cos(x)",
    f3: "Math.exp(-x*x)",
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
   integer: true,
   steps: 1,
   recalc: true,

  },
  zoomIn: {
    val: 1,
    visible: true,
    min: 0,
    max: 1,
    default: 1,
    label: "zoom",
    minLabel: "out",
    maxLabel: "in",
    integer: true,
    steps: 1,
  },
  grid: {
    val: 1,
    visible: true,
    min: 0,
    max: 1,
    default: 1,
    label: "show grid",
    minLabel: "no",
    maxLabel: "yes",
    integer: true,
    steps: 1,
    recalc: true,
  }, 

};

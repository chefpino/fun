/*


input elements must have an ID="keyname"
these must be global variables


*/
var params = {
  goButton: {
    show: true,
    visible: false,
  },

  "uBound": {
    val: 4,
    min: 2,
    max: 4,
    default: 4,
    label: "upperbound",
    minLabel: "2",
    maxLabel: "4",
    integer: true,
    steps: 2,
    visible: true,
  },
  "maxItr": {
    val: 75,
    min: 50,
    max: 450,
    default: 75,
    label: "iterations",
    minLabel: "50",
    maxLabel: "450",
    integer: true,
    visible: true,
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
    controlType: "checkbox",
    cssClass: "control2",
  },
  "fixedOrigin": {
    val: false,
    visible: false
  },
  "x0": {
    val: -2,
    min: -2,
    max: 2,
    default: -2,
    label: "x0",
    minLabel: "-2",
    maxLabel: "2",
    integer: false,
    "visible": false,
    bookmarkLink: true,
  },
  "x1": {
    val: 2,
    min: -1,
    max: 2,
    default: 1,
    label: "x1",
    minLabel: "-1",
    maxLabel: "2",
    integer: false,
    "visible": false,
    bookmarkLink: true,
  },
  "y0": {
    val: -1.05,
    min: -2,
    max: 1,
    default: -1.05,
    label: "y0",
    minLabel: "-2",
    maxLabel: "1",
    integer: false,
    "visible": false,
    bookmarkLink: true,
  },
  "y1": {
    val: 2,
    min: 0,
    max: 2,
    default: 2,
    label: "y1",
    minLabel: "0",
    maxLabel: "2",
    integer: false,
    "visible": false,
    bookmarkLink: true,
  },
  bookmarkLink: {
    show: true,
    visible: false,
  }


}
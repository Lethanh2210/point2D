"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point3D_1 = require("./Point3D");
var point = new Point3D_1.Point3D(1, 2, 3);
point.setXYZ(2, 3, 4);
console.log(point.getXYZ());

import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private _z : number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }

    getXYZ(): object{
        return {X: this.x, Y: this.y, Z: this._z}
    }

    setXYZ(x: number, y: number, z:number){
        this._z = z;
        this.x = x;
        this.y = y;
    }
}
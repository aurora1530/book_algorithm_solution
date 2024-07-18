export class UnionFind {
  private readonly _parentArray: number[];
  private readonly _sizeArray: number[];

  constructor(N: number) {
    this._parentArray = Array.from({ length: N }, () => -1);
    this._sizeArray = Array.from({ length: N }, () => 1);
  }

  public root(x: number): number {
    if (this._parentArray[x] === -1) return x;
    else return (this._parentArray[x] = this.root(this._parentArray[x]));
  }

  public isSame(x: number, y: number): boolean {
    return this.root(x) === this.root(y);
  }

  public unite(x: number, y: number): boolean {
    const rootX = this.root(x);
    const rootY = this.root(y);

    if (rootX === rootY) return false;

    const sizeX = this._sizeArray[rootX];
    const sizeY = this._sizeArray[rootY];

    if (sizeX < sizeY) {
      this._parentArray[rootX] = rootY;
      this._sizeArray[rootY] += this._sizeArray[rootX];
    } else {
      this._parentArray[rootY] = rootX;
      this._sizeArray[rootX] += this._sizeArray[rootY];
    }
    return true;
  }

  public size(x: number) {
    return this._sizeArray[this.root(x)];
  }
}

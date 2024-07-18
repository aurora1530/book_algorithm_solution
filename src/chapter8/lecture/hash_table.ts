export class Node<T> {
  public readonly value: T | null;
  public next: Node<T> | null;

  constructor(value: T | null) {
    this.value = value;
    this.next = null;
  }

  public static nill() {
    return new Node(null);
  }

  public isNill() {
    return this.value === null;
  }
}

type HashFunction<T> = (key: T) => number;

export class HashTable<T> {
  public static SIZE = 10000;
  private _table: Node<T | null>[] = Array.from({ length: HashTable.SIZE }, () =>
    Node.nill()
  );
  private _hash: HashFunction<T>;

  constructor(hashFunc: HashFunction<T>) {
    this._hash = hashFunc;
  }

  public add(value: T): void {
    const newNode = new Node(value);
    const hashed = this._hash(value);

    let currentNode = this._table[hashed];
    while (currentNode !== null && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  public has(value: T): boolean {
    console.log(this._table)
    const hashed = this._hash(value);

    let currentNode = this._table[hashed];
    while (currentNode.value !== value && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value === value
  }

}

const hash:HashFunction<number> = (key)=>{
  return key % HashTable.SIZE;
}

const hashTable = new HashTable(hash)
hashTable.add(1)
console.log(hashTable.has(1))

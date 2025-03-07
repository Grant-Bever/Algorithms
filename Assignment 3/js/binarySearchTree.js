"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class LeafNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // Insert a new node in the BST
    insert(value) {
        if (this.root === null) {
            this.root = new LeafNode(value);
            console.log(`Root: ${value}`); // Print root item once
        }
        else {
            this._insert(this.root, value, "");
        }
    }
    // Helper method to insert recursively, with path tracking (just print the path)
    _insert(node, value, path) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new LeafNode(value);
                console.log(`${value}: ${path}L`); // Print path as Left (L)
            }
            else {
                this._insert(node.left, value, `${path}L, `);
            }
        }
        else {
            if (node.right === null) {
                node.right = new LeafNode(value);
                console.log(`${value}: ${path}R`); // Print path as Right (R)
            }
            else {
                this._insert(node.right, value, `${path}R, `);
            }
        }
    }
    // In-order traversal of the BST (this is where we print the values)
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value); // Print the value of the node
            this.inOrderTraversal(node.right);
        }
    }
    // Find an item in the BST
    find(value) {
        return this._find(this.root, value, "", 0);
    }
    _find(node, value, path, comparisons) {
        if (node === null) {
            return { path: "NOT FOUND", comparisons };
        }
        comparisons++;
        if (value === node.value) {
            return { path, comparisons };
        }
        else if (value < node.value) {
            return this._find(node.left, value, path + "L, ", comparisons);
        }
        else {
            return this._find(node.right, value, path + "R, ", comparisons);
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;

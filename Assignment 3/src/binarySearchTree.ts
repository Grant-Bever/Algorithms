class LeafNode { //TypeScript is annoying so I have to use leafNode because for obvious reasons Class Node{} returns an error, creators of frameworks and developer tools shouldnt name their stuff after CS topics because of stuff like this, instead they should name their projects "social life" or "healthy sleep schedule" to completely avoid these problems.
    value: string;
    left: LeafNode | null = null;
    right: LeafNode | null = null;

    constructor(value: string) {
        this.value = value;
    }
}

export class BinarySearchTree {
    root: LeafNode | null = null;

    // Insert a new node in the BST
    insert(value: string): void {
        if (this.root === null) {
            this.root = new LeafNode(value);
            console.log(`Root: ${value}`);  // Print root item once
        } else {
            this._insert(this.root, value, "");
        }
    }

    // Helper method to insert recursively, with path tracking (just print the path)
    private _insert(node: LeafNode, value: string, path: string): void {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new LeafNode(value);
                console.log(`${path}L`);  // Print path as Left (L)
            } else {
                this._insert(node.left, value, `${path}L, `);
            }
        } else {
            if (node.right === null) {
                node.right = new LeafNode(value);
                console.log(`${path}R`);  // Print path as Right (R)
            } else {
                this._insert(node.right, value, `${path}R, `);
            }
        }
    }

    // In-order traversal of the BST (this is where we print the values)
    inOrderTraversal(node: LeafNode | null = this.root): void {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);  // Print the value of the node
            this.inOrderTraversal(node.right);
        }
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class HashTable {
    constructor(size = 250) {
        this.size = size;
        this.table = Array.from({ length: size }, () => []);
    }
    // Hash function
    makeHashCode(key) {
        key = key.toUpperCase();
        let letterTotal = 0;
        for (let i = 0; i < key.length; i++) {
            letterTotal += key.charCodeAt(i);
        }
        return letterTotal % this.size;
    }
    // Insert key-value pair with chaining
    insert(key, value) {
        const index = this.makeHashCode(key);
        const bucket = this.table[index];
        // Check if key already exists and update value if found
        for (let pair of bucket) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }
        // Add new key-value pair to bucket
        bucket.push({ key, value });
    }
    // Retrieve value by key, counting comparisons
    get(key) {
        const index = this.makeHashCode(key);
        const bucket = this.table[index];
        let comparisons = 0;
        for (let pair of bucket) {
            comparisons++; // Each check counts as a comparison
            if (pair.key === key) {
                return { value: pair.value, comparisons };
            }
        }
        return { value: undefined, comparisons };
    }
    // Analyze hash table distribution
    analyzeHashTable() {
        const bucketSizes = this.table.map(bucket => bucket.length);
        let totalItems = 0;
        bucketSizes.forEach(count => (totalItems += count));
        const averageLoad = totalItems / this.size;
        console.log(`Average load (count): ${averageLoad.toFixed(2)}`);
        // Standard deviation calculation
        let sum = 0;
        for (let i = 0; i < this.size; i++) {
            const result = bucketSizes[i] - averageLoad;
            sum += result * result;
        }
        const stdDev = Math.sqrt(sum / this.size);
        console.log(`Standard Deviation: ${stdDev.toFixed(2)}`);
    }
}
exports.HashTable = HashTable;

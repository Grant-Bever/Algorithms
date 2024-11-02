export type KeyValuePair = { key: string; value: any };

export class HashTable {
    private table: KeyValuePair[][]; // Array of lists for chaining
    private size: number;

    constructor(size: number = 250) {
        this.size = size;
        this.table = Array.from({ length: size }, () => []);
    }

    // Hash function
    private makeHashCode(key: string): number {
        key = key.toUpperCase();
        let letterTotal = 0;
        for (let i = 0; i < key.length; i++) {
            letterTotal += key.charCodeAt(i);
        }
        return letterTotal % this.size;
    }

    // Insert key-value pair with chaining
    insert(key: string, value: any): void {
        const index = this.makeHashCode(key);
        const bucket = this.table[index];
        // Check if key already exists and update value if found
        for (let pair of bucket) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }
        bucket.push({ key, value });
    }

    // Retrieve value by key, counting comparisons
    get(key: string): { value: any | undefined, comparisons: number } {
        const index = this.makeHashCode(key);
        const bucket = this.table[index];
        let comparisons = 0;

        for (let pair of bucket) {
            comparisons++; 
            if (pair.key === key) {
                return { value: pair.value, comparisons };
            }
        }
        return { value: undefined, comparisons };
    }
    
    
    // Analyze hash table distribution
    analyzeHashTable(): void {
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
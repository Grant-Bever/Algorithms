export function linearSearch(arr: any[], searchItems: any[]): void{
    let totalComparisons = 0;

    let results: boolean[] = [];
    for (const item of searchItems) {
        let found = false;
        let comparisons = 0;

        for (let i = 0; i < arr.length; i++) {
            comparisons++;  
            if (arr[i] === item) {
                found = true;
                break;
            }
        }
        totalComparisons += comparisons;
        results.push(found);
        //console.log(`Item: ${item}, Comparisons: ${comparisons}`); //test b
    }
    const avgComparisons = parseFloat((totalComparisons / searchItems.length).toFixed(2));
    console.log(`Total Comparisons: ${totalComparisons}`);
    console.log(`Average Comparisons: ${avgComparisons}`);

}

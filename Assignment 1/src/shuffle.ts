//Knuth shuffle
//Works by randomly selecting items from the array and swaps it into a "shuffled zone" thats starts at the end of the array
export function shuffle(items: any){

    for(let i = items.length - 1; i > 1; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}
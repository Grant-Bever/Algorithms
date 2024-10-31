export function pick(eggs: string[]): string[] {
    let basket: string[] = [];
    for (let i = 0; i < 42 && eggs.length > 0; i++) {
        let num = Math.floor(Math.random() * eggs.length);
        basket.push(eggs[num]);
        eggs.splice(num, 1); 
    }
    
    return basket;
}
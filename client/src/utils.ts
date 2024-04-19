import { CardValues, PlayingCards } from './constants'
export function compareCards(card1: string, card2: string) {
    if (CardValues[card1] > CardValues[card2]) {
        return 1;
    } else if (CardValues[card1] < CardValues[card2]) {
        return -1;
    } else {
        return 0;
    }
}

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getFreshHands(): string[][] {
    const shuffled = shuffleArray(PlayingCards);
    const size = Math.ceil(shuffled.length / 4);
    const result: string[][] = [];
    for (let i = 0; i < 4; i++) {
        result.push(shuffled.slice(i * size, i * size + size));
    }
    return result;
}

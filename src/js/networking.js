import { baconiankey, hillKey, morseKey } from "./key";




export function getNewProblem(cipher) {
    if (cipher == 0) {
        const randomIndex = Math.floor(Math.random() * baconiankey.length);
        return baconiankey[randomIndex];
    }
    else if (cipher == 1) {
        const randomIndex = Math.floor(Math.random() * hillKey.length);
        return hillKey[randomIndex];
    }
    else if (cipher == 2) {
        const randomIndex = Math.floor(Math.random() * morseKey.length);
        return morseKey[randomIndex];
    }
    
}

  

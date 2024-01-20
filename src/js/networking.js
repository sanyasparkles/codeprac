import { baconiankey } from "./baconiankey";




export function getNewProblem() {
    const randomIndex = Math.floor(Math.random() * baconiankey.length);
    return baconiankey[randomIndex];
}

  

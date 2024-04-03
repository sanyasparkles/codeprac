<script>
    import { onMount } from "svelte";

    import {baconiankey} from '../js/key.js'
    import {getNewProblem} from '../js/networking.js'

    let cipher = 0;

    let cipherName;

    $: { if (cipher == 0) {
            cipherName = "baconian"
        }
        else if (cipher == 1) {
            cipherName = "hill"
        }
        else if (cipher == 2) {
            cipherName = "morse"
        }
        else {
            cipherName = "MISTAKE"
        }
        newProblem()


    }
    
    let encrypted, correctPlain, guessedPlain;
    let score = 0;

    function newProblem() { 
        let data = getNewProblem(cipher)
        encrypted = data.encrypted;
        correctPlain = data.plain;
    }

    newProblem()



    onMount(() => {		
		guessedPlain.onkeydown = (event) => {
			if (event.key === 'Enter') {
				if (correctPlain.toUpperCase() === guessedPlain.value.toUpperCase()) {
                    guessedPlain.value = "";
                    newProblem()
                    score++;
                    console.log("yes")
				}
                console.log("no")
			
		  	}
		}
	});
</script>


<div>
    <button on:click={() => (cipher = (cipher + 1) % 3)}>{cipherName}</button>
    <p>{encrypted}</p>
    <input class = "input" type="text" bind:this={guessedPlain} placeholder="Letter">
    <p>score = {score}</p>

</div>
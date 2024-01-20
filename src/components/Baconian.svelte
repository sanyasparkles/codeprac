<script>
    import { onMount } from "svelte";

    import {baconiankey} from '../js/baconiankey.js'
    import {getNewProblem} from '../js/networking.js'
    
    let encrypted, correctPlain, guessedPlain;
    let score = 0;

    function newProblem() { 
        let data = getNewProblem()
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
    <p>{encrypted}</p>
    <input class = "input" type="text" bind:this={guessedPlain} placeholder="Letter">
    <p>score = {score}</p>
</div>
let playerName = prompt('So you think you have a little problem? What is your name?')
alert('Ok, lets look at your problem, ' + playerName + '!')

let hasproblem = prompt('Let me see! Does the damn thing work? Yay or Nay???')
let problemSolvingPlan = ''

if (hasproblem === 'Yay') {
    problemSolvingPlan = alert('So DO NOT TOUCH IT, ' + playerName + ', you silly goose!')
    
} else {
    alert('Ohhhh, snap! Too bad!')
    let youBroke = prompt('Did you break it ' + playerName + ' ? (Yes or No)')

    if (youBroke === 'No') {
        let inTrouble = prompt('Will you get in trouble for this ' + playerName + ' ? (Yes on No)')

        if (inTrouble === 'No') {
        problemSolvingPlan = alert('Well then, you do NOT HAVE A PROBLEM , ' + playerName + ', you silly goose! Just toss it!')

        } else {
            alert ('Hahaha! That serves you rigth for messing with it!')
            let putBlame = prompt('Can you blame someone else ' + playerName + ' ? (Yes on No)')

            if (putBlame === 'Yes') {
            problemSolvingPlan = alert('Well then, you do NOT HAVE A PROBLEM , ' + playerName + ', you silly goose! HIDE it!')

            } else {
                alert ('Think again!')
                let blame =  prompt('Can you blame someone else ' + playerName + ' ? (Yes on Yes)')

                if (blame === 'Yes') {
                problemSolvingPlan = alert('That is what I thought , ' + playerName + '! We solved your problem!')

                } else {
                    problemSolvingPlan = alert('I can not help you with this attitude ' + playerName + ', you are on your own!')
                    throw new Error()
                }
            }
        }
        

    } else { // Yes for did you break it
        alert('What was going trough your mind, are you crazy??')
        let whoknow =  prompt('Does anyone esle know you broke it (Yes or No)')

        if (whoknow === 'Yes') {
            alert ('Ouch, you are in deep with this, I do not know if I can help you!')
            let putBlame = prompt('Can you blame someone else ' + playerName + ' ? (Yes on No)')

            if (putBlame === 'Yes') {
            problemSolvingPlan = alert('Well then, you do NOT HAVE A PROBLEM , ' + playerName + ', you silly goose! HIDE it!')

            } else {
                alert ('Think again!')
                let blame =  prompt('Can you blame someone else ' + playerName + ' ? (Yes on Yes)')

                if (blame === 'Yes') {
                    problemSolvingPlan = alert('That is what I thought , ' + playerName + '! We solved your problem!')
    
                    } else {
                        problemSolvingPlan = alert('I can not help you with this attitude ' + playerName + ', you are on your own!')
                        window.stop();
                    
                }
            }
            
        } else { // No for does anyone know
            problemSolvingPlan = alert('Just hide it ' + playerName + ', and you have no PROBLEM!')
            window.stop();
        }
    }
}

export function rand( min, max, answerId ){
        min = parseInt( min, 10 );
        max = parseInt( max, 10 );
    
        if ( min > max ){
            var tmp = min;
            min = max;
            max = tmp;
        }
        
        let number = Math.floor( Math.random() * ( max - min + 1 ) + min )

        for (let i=0; number === answerId; i++) {
            number = Math.floor( Math.random() * ( max - min + 1 ) + min )
        }

        return number
}


export async function threeRandomNames(answer) {
    //jak znaleźć id do podanego name? (gdybym znała id poprawnej odpowiedzi mogłabym wykluczyć ją w losowaniu złych odp)

    const min = 1
    const max = 87

    const firstId = rand(min, max, answerId)
    const secondId = function(firstId) {
        let number = rand(min, max, answerId)
        for (let i=0; number === firstId; i++) {
            number = Math.floor( Math.random() * ( max - min + 1 ) + min )
        }
        return number
    }
    const thirdId = function(firstId, secondId) {
        let number = rand(min, max, answerId)
        for (let i=0; number === firstId || number === secondId; i++) {
            number = Math.floor( Math.random() * ( max - min + 1 ) + min )
        }
        return number
    }


    const nameOne = await fetch('https://swapi.co/api/people/'+firstId+'/')
	                    .then(resp => resp.json())
                        .then(resp => {return resp.name})

    const nameTwo = await fetch('https://swapi.co/api/people/'+secondId+'/')
	                    .then(resp => resp.json())
                        .then(resp => {return resp.name})

    const nameThree = await fetch('https://swapi.co/api/people/'+thirdId+'/')
	                    .then(resp => resp.json())
                        .then(resp => {return resp.name})
    const names = [nameOne, nameTwo, nameThree]                       
    return names
}
import { stdin, stdout } from 'process'
import { createInterface } from 'readline'
import { AgeCalculator } from './AgeCalculator';

const readInterface = createInterface({
    input: stdin,
    output: stdout
});

const ageCalculator = new AgeCalculator()

function main() {
    readInterface.question("Please enter your date of birth in YYYY/MM/DD fomrat: ", (userInput) => {
        console.log(`\n\n==========================================================\n\n`)
        console.log(`${ageCalculator.getAgeMessage(userInput)}`)
        console.log(`\n\n==========================================================\n\n`)
        readInterface.close()
    })
}

main()
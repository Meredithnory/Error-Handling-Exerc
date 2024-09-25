function mysteryOperation() {
    const outcome = Math.random(); // Generates a random number between 0 and 1.

    if (outcome < 0.5) {
        console.log("The operation is completed successfully!");
    } else {
        throw new Error("The operation is failed mysteriously!");
    }
}
// overall overview : create a function that counts the number of vacation days

// first = write the loop that goes over 20 times

function vacationDays(numOfMissions) {
    // create the counter to count the number of failed and successes operations, starting at 0
    let failedOperations = 0;
    let successfulOperations = 0;
    // create the loop that will go over the function of mysteryOperation over the num of times aka we will do 20
    for (let i = 0; i < numOfMissions; i++) {
        try {
            mysteryOperation();
            successfulOperations++;
        } catch (e) {
            failedOperations++;
        }
    }
    // now do the calculation for both succesful and failed operations
    let totalVacationDays =
        successfulOperations * 13 + numOfMissions * 3 + failedOperations;

    return totalVacationDays;
}

console.log(vacationDays(20));

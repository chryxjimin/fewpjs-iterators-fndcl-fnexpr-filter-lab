// Code your solution here
function findMatching(currentDriver, matchingDriver) {
    return currentDriver.filter( possibleMatch =>
        possibleMatch.toLowerCase() === matchingDriver.toLowerCase()
    )
}

function fuzzyMatch(currentDriver, matchingCharacters) {
    return currentDriver.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(matchingCharacters.toLowerCase()) === 0
    )
}


function matchName(currentDriver, matchingDriver) {
    return currentDriver.filter( record => record.name === matchingDriver)
}
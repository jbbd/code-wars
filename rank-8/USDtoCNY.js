// Day 1
// Sat, Nov 25.
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . 
// The input is the amount of USD as an integer, and the output should be a 
// string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
    return (usd*6.75).toFixed(2) + ' Chinese Yuan';
}

// .toFixed() - Number of digits after a decimal point. Returns a string.
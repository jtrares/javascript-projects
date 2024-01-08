// Declare and assign the variables below

const shuttleName = 'Determination'
const shuttleSpeedMph = 17500
const distToMarsKm = 225000000
const distToMoonKM = 384400
const milePerKm = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distToMarsKm)
console.log(typeof distToMoonKM)
console.log(typeof milePerKm)

// Calculate a space mission below

let milesToMars = (distToMarsKm * milePerKm)
let hrsToMars = (milesToMars / shuttleSpeedMph)
let daysToMars = (hrsToMars / 24)
console.log(shuttleName + ' will take ' + daysToMars + ' days to reach Mars.')
 
// Print the results of the space mission calculations below

// Calculate a trip to the moon below
let milesToMoon = (distToMoonKM * milePerKm)
let hrsToMoon = (milesToMoon / shuttleSpeedMph)
let dayToMoon = (hrsToMoon / 24)
console.log(shuttleName + ' will take ' + dayToMoon + ' days to reach the Moon')

// Print the results of the trip to the moon below

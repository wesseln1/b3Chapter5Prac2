const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
const planetE2 = document.querySelector("planetsWithE")

planets.forEach(planet => {
    planetSection = `
    <section>${planet}</section>
    `
    planetEl.innerHTML += planetSection
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const newArray = planets.map(function (item){
    return item.charAt(0).toUpperCase() + item.slice(1)
})

planetEl.innerHTML += newArray


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetArray = planets.filter(planet => planet.includes('e'))

// planetEl.innerHTML += planetArray
console.log(planetArray)    
const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => dysplayCountries(data));
        
}
loadCountries()
const dysplayCountries = (countries) => {
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h2>Country: ${country.name.common}</h2>
            
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            
            <button onClick="countryDetails('${country.name.official}')">More Details</button>
            `;
        countryDiv.appendChild(div)
    })
}
const countryDetails = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
    .then((data) => dysplayCountryDetails(data));
}
const dysplayCountryDetails = (country) => {
    const section = document.getElementById('details')
    country.forEach(detail=>{
        const div = document.createElement('div')
        div.classList.add('countryDetail')
        div.innerHTML = `
            <h1>${detail.name.common}</h1>
            <h4>Official Name: ${detail.name.official}</h4>
            <p>Continents: ${detail.continents[0]}</p>
            <img src="${detail.flags.png}" alt=""> 
        `;
        section.appendChild(div)
    })
}

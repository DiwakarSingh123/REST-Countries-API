const countriesContainer=document.querySelector(".countries-container");
let allCountryData;
const searchCountry=document.querySelector(".search-container");
const themeSwitcher=document.querySelector(".theme-switcher");
const promise=fetch(`https://restcountries.com/v3.1/all`)
promise.then((data)=>{
    // console.log(data);
    return data.json()
}).then((data)=>{
    // console.log(data);
    allCountryData=data
    countryCall(data);
})

const countryCall=(data)=>{
    data.forEach(country => {
        // console.log(Object.keys(country.currencies)[0]);
        
        // Now we are using advanced version and easy method and less code
        const countryCard=document.createElement('a');
        countryCard.classList.add("country-card");
        countryCard.href=`/country.html?name=${country.name.common}`

        const cardHTML=`
            <img src="${country.flags.svg}" alt="Flag">
            <div class="card-text">
            <h3 class="card-title">${country.name.common}</h3>
            <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${country.capital?.[0]}</p>
            </div>
        `
        countryCard.innerHTML=cardHTML
        console.log(countriesContainer);

        countriesContainer.append(countryCard)
    });
}


// Searching country by her name........................
searchCountry.addEventListener("input",(event)=>{
    // console.log(event.target.value);
    // console.log(allCountryData);
   const filterByCountry= allCountryData.filter((country)=>{
        // console.log(country.name.common);
        return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    })
     // Clear the previous results in the container
     countriesContainer.innerHTML = "";

    // console.log(filterByCountry);
    countryCall(filterByCountry);
})

//Theme switcher code......................
themeSwitcher.addEventListener("click",(event)=>{
    document.body.classList.toggle("dark");
})

// Creating elements..............
/*
// that is is poor method because jada lines of code ho jayenge
const countryCard=document.createElement('a');
countryCard.classList.add("country-card")

const cardImg=document.createElement("img");
cardImg.src=`https://flagcdn.com/se.svg`
cardImg.alt="Flages";
countryCard.appendChild(cardImg)
console.log(countryCard);
*/






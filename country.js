// basically this is used for fetching the data from the string URL,(For diving the url go Stackoverflow website)
const countryName=new URLSearchParams(window.location.search).get('name');

const flagImg=document.querySelector(".country-details img")
const countryNameh1=document.querySelector("h1")
const population=document.querySelector(".population");
const Region=document.querySelector(".region");
const subRegion=document.querySelector(".sub-region");
const capital=document.querySelector(".capital");
const domain=document.querySelector(".domain");
const Currencies=document.querySelector(".currencies");
const Language=document.querySelector(".language");
const borderCountries=document.querySelector(".border-contries");

const themeSwitcher=document.querySelector(".theme-switcher");
// fecting the all countries data throught her name.....
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((data)=>{
    console.log(data[0]);
    
    AddingData(data)
})
// see [country]===data[0];
const AddingData=([country])=>{
    console.log(country.borders);
    
    flagImg.src=country.flags.svg;
    countryNameh1.innerHTML=country.name.common;
    population.innerHTML=country.population.toLocaleString("en-IN");
    Region.innerHTML=country.region;
    subRegion.innerHTML=country.subregion
    capital.innerHTML=country.capital;
    domain.innerHTML=country.tld
    // for accesing currencies......................
    if(country.currencies){
        const curr=Object.keys(country.currencies)[0]
        Currencies.innerHTML=country.currencies[curr].name;
    }
    Language.innerHTML=Object.values(country.languages).join(", ")
   
    // Fetching the Boders country throught other country boders..........
    // console.log(country.borders);
    if(country.borders){
        country.borders.forEach((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=>res.json())
            .then(([countryData])=>{
                console.log(countryData);
                const borderCountryTag=document.createElement("a")
                borderCountryTag.classList.add("border-btn")
                borderCountryTag.innerText=countryData.name.common;
                borderCountryTag.href=`/country.html?name=${countryData.name.common}`

                
                borderCountries.append(borderCountryTag)
                
            })
        });
    }

}

//Theme switcher code......................
themeSwitcher.addEventListener("click",(event)=>{
    document.body.classList.toggle("dark");
})

// for back button
// const backBtn=document.querySelector(".back-btn");
// backBtn.addEventListener('onclick',()=>{
//     history.back();
// })
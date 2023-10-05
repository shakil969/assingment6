
const CountryName=document.getElementById("CountryName")
const searchBtn=document.getElementById("searchBtn")
const single=document.getElementById("single")
const allCountry=document.getElementById("allCountry")
const singleCountry=document.getElementById("singleCountry")

searchBtn.onclick=()=>{
  const name=CountryName.value;
  CountryName.value="";
  fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then((response) => response.json())
  .then((json) => showCountry(json));
}
 const showCountry=(countries)=>{
  single.innerHTML="";
   countries.map((country)=>{
    const{
      name: { common: num },
      capital,
      region,
      flags: { png },
    }=country;
 const newDiv=document.createElement("div")
 newDiv.innerHTML=`
 <div class="card" text-center "> 
  <div class="card-body shadow bg-info">
  <img src=${png} style="width:100px">
  <h2 class="fs-2"style=color:tomato;>Name: ${num}</h2>
  <p>Capital: ${capital}</p>
  <p>Region: ${region}</p>
  </div>
</div>`
 single.appendChild(newDiv)
  });
};

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((json) => showAllCountry(json));

const showAllCountry=(countries)=>{
  countries.map((country)=>{
const{
  name: { common: num },
  capital,
  population,
  region,
  flags: { png },
}=country;
  const newDiv = document.createElement("div");
  newDiv.classList.add("col-sm-3");
  newDiv.innerHTML=` 
  <div class="py-2 h-100 ">
  <div class="card h-100  text-center "> 
  <div class="card-body shadow text-center bg-secondary  ">
  <img src=${png} style="width:100px">
  <h2 style=color:lightsalmon;>Name: ${num}</h2>
  <p>Capital: ${capital}</p>
  <p>population: ${population}</p>
  <p>Region: ${region}</p>
  <button class=" bg-warning  rounded-2 mb-1" onclick="countryDetails ('${num}')">
  Others</button>
  </div>
 </div>
 </div>`
  allCountry.appendChild(newDiv)
  })
}

const countryDetails=(countryName)=>{

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((response) => response.json())
  .then((data) =>{
  const{
    name: { common: countryName },
    languages: { eng },
    region,
    capital,
    flags: { png },
    population,
    independent,  
    latlng, 
    maps: { googleMaps }, 
  }=data[0];
  const newDiv = document.createElement("div");
  singleCountry.innerHTML="";
  newDiv.innerHTML=`
  <div class="card" style="width: 18rem; shadow    ">
  <div class="card-body text-center bg-success">
  <img src=${png} style="width:100px">
  <h2 style=color:lightsalmon;>Name: ${countryName}</h2>
  <p >Languages: ${eng}</p>
  <p >Region: ${region}</p>
  <p >Capital: ${capital}</p>
  <p >Population: ${population}</p>
  <p >Independent: ${independent}</p>
  <p >Latlng: ${latlng}</p>
  <a class="text-warning" href=${googleMaps}>MAP</a>
  </div>
  </div>
  `
  singleCountry.appendChild(newDiv)
  });
}

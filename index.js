const getData = async (resource)=>{

    const data = await fetch(resource);
    const originaldata = await  data.json();
    return originaldata;


}

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{

    e.preventDefault();
    // console.log(form.email.value.trim());
    const val = form.email.value.trim();
    form.reset();
    getData(`https://api.weatherapi.com/v1/current.json?key=f866fa64e08b454e9f7172552222905&q=${val}&aqi=yes`).then((data)=>{
        document.querySelector('.location').textContent = `Location : ${data.location.name} , ${data.location.country}`;
        document.querySelector('.temperature').textContent = `Temperature : ${data.current.temp_c} &deg;C`;


    }).catch(()=>{
        document.querySelector('.location').textContent = `Invalid City `;
        document.querySelector('.temperature').textContent = `Invalid City`;


    });
});

const Api_keys=`711cc1db07d210dc7d7299a1b8512294`;
const loadApi= city =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ Api_keys}&units=metric`)
    .then(res => res.json())
    .then(data => displayData(data))
}
loadApi('dhaka');
const showTemp=document.querySelector("#showTemp");
const displayData=(data)=>{
    showTemp.innerHTML = data.main.temp;
    console.log(data);

}

const domChange=(id,text)=>{
    const targetDom=document.getElementById(id);
    targetDom.innerHTML = text
}

document.querySelector('#searchBtn').addEventListener("click",function(){
    const inputField=document.querySelector('#inputField');
    console.log(inputField.value);
    domChange('city',inputField.value)
    loadApi(inputField.value);
})
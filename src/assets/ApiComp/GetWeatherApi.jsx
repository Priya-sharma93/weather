export const getWheather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    const response = await fetch(url,{method:'GET'})
    return response.json();
}
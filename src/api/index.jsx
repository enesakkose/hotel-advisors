import axios from 'axios'





export const getPlacesData = async(type,sw, ne) => {
    
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                bl_latitude: sw.lat,
            
              },
              headers: {
                'X-RapidAPI-Key': 'a1080941e0msh61eed144007ab0cp10d97ajsn4ed9d98415c8',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })

        return data

    } catch(error){
        console.log(error)
    }
}

export const getWeatherData = async(lat, lng) => {
    try{
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
            params: { lon: lng, lat: lat},
       
               
              
              headers: {
                'X-RapidAPI-Key': 'a1080941e0msh61eed144007ab0cp10d97ajsn4ed9d98415c8',
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
              }
        })
        return data

    } catch(error) {
        console.log(error)
    }

}
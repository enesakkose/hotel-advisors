import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'



export const getPlacesData = async(sw, ne) => {
    
    try{
        const {data: {data}} = await axios.get(URL, {
            params: {
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                bl_latitude: sw.lat,
            
              },
              headers: {
                'X-RapidAPI-Key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })

        return data

    } catch(error){
        console.log(error)
    }
}
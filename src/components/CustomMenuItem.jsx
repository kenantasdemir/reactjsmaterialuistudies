import React,{useEffect, useState} from 'react'
import {Stack,TextField,FormLabel ,FormControl,RadioGroup,FormControlLabel,Radio,Box,MenuItem,Divider}from "@mui/material";

import axios from 'axios';



function CustomMenuItem() {




    
    let [country,setCountry] = useState("");
    console.log(country)

    let [hobi,setHobi] = useState([])
    console.log(hobi)





    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
  
    useEffect(() => {
      const fetchCities = async () => {
        try {
          const response = await axios.get('https://turkiyeapi.cyclic.app/api/v1/provinces/');
          setCities(response.data.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };
  
      fetchCities();
    }, []);
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };




  

  return (
   
    <Stack spacing={6} >
            <Stack>
                <FormControl>
                    <FormLabel>Cinsiyet belirtiniz</FormLabel>
                    <RadioGroup>
                        <FormControlLabel label="Erkek" value="male" control={<Radio color='success'/>}/>
                        <FormControlLabel label="Kadın" value="female" control={<Radio color="success"/>}/>
                    </RadioGroup>
                </FormControl>
            </Stack>

    
    <Stack>
            <Box width="200px">
                    <TextField label="Şehir seçiniz(manuel)" select fullWidth
                
                    value={country} onChange={(e)=>setCountry(e.target.value)}
                    > 
                        <MenuItem value="ankara"> Ankara  </MenuItem>
                        <MenuItem value="izmir"> İzmir  </MenuItem>
                        <MenuItem value="bursa"> Bursa  </MenuItem>
                        <MenuItem value="diyarbakir"> Diyarbakır  </MenuItem>
                        <MenuItem value="edirne"> Edirne  </MenuItem>
                        <MenuItem value="hatay"> Hatay  </MenuItem>
                        <MenuItem value="osmangazi"> Osmangazi  </MenuItem>
                    </TextField>
            </Box>
    </Stack>

    {/* //  console.log(sehirler.data.data[0].name) */}


    <Stack>
            <Box width="200px">
                    <TextField label="Hobilerinizi seçiniz" select fullWidth
                    SelectProps={{
                        multiple:true
                    }}
                
                    value={hobi} onChange={(e)=>setHobi(typeof e.target.value ==="string" ? e.target.value.split(","):e.target.value)}
                    > 
                        <MenuItem value="kitapokumak"> Kitap Okumak  </MenuItem>
                        <MenuItem value="yuzmek"> Yüzmek  </MenuItem>
                        <MenuItem value="yuruyus">Yürüyüşe çıkmak  </MenuItem>
                        <MenuItem value="alisveris"> Alışveriş yapmak  </MenuItem>
                        <MenuItem value="muzikdinlemek"> Müzik Dinlemek  </MenuItem>
                        <MenuItem value="futbol"> Futbol oynamak  </MenuItem>
                        <MenuItem value="basketbol"> Basketbol oynamak  </MenuItem>
                    </TextField>
            </Box>
    </Stack>

  <Box width="200px">
      <TextField
        label="Şehir seçiniz"
        select
        fullWidth
        value={selectedCity}
        onChange={handleCityChange}
      >
        {cities.map((city) => (
          <MenuItem key={city.id} value={city.name}>
            {city.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>

        </Stack>
  )
}

export default CustomMenuItem
import React, {  useState } from 'react';
import {Button,Stack,TextField,InputAdornment,ButtonGroup }from "@mui/material";




function UserRegisterForm() {


    let [password,setPassword] = useState("")

  return (
       <Stack spacing={4}>

            <Stack direction="row">
                            <Stack spacing={2}>

                                        <Stack spacing={2} direction="row">
                                            <TextField 
                                            // onChange={(e)=>setName(e.target.value)}
                                            label="Adınız" 
                                            id='name' 
                                            variant='outlined' 
                                            helperText="Adınızı giriniz" 
                                            size='small'/>
                                            <TextField 
                                            // onChange={(e)=>setSurname(e.target.value)}
                                            label="Soyadınız" 
                                            id='surname' 
                                            variant='outlined' 
                                            helperText="Soyadınızı giriniz" 
                                            size='small'/>
                                        </Stack>

                                        <Stack spacing={2} width={450}>
                                                <TextField 
                                                // onChange={(e)=>setEmail(e.target.value)}
                                                label="Email" 
                                                id="email" 
                                                variant='outlined' 
                                                helperText="Emailinizi giriniz."
                                                size='small'
                                                />

                                                <TextField 
                                                // onChange={(e)=>setPassword(e.target.value)}
                                                id="password" 
                                                label="Şifreniz" 
                                                value={password}
                                                type='password' 
                                                variant='outlined' 
                                                helperText={!password ? "Şifrenizi giriniz ": "Şifrenizi kimseyle paylaşmayın."}
                                                size='small'></TextField>
                                        </Stack>



                                        <Stack width={450}>
                                            <TextField 
                                            InputAdornment={{
                                                endAdornment:<InputAdornment position="end">TL</InputAdornment>
                                            }}
                                            // onChange={(e)=>setAmount(e.target.value)}
                                            size='small'
                                            label="Maaş beklentiniz" 
                                            id="payment" 
                                            variant='outlined' 
                                            helperText="Maaş beklentinizi giriniz."
                                            />
                                        </Stack>




                                        <Stack width={450}>
                                            <TextField 
                                            // onChange={(e)=>{setPersonalInfo(e.target.value)}}
                                            id="tellmeaboutyourself" 
                                            label="Kişisel Özellikleriniz" 
                                            name='tellmeaboutyourself' 
                                            helperText="Kendinizden biraz bahsedin" 
                                            variant='outlined' 
                                            minRows={10} 
                                            multiline/>
                                        </Stack>



                                    <ButtonGroup>
                                            <Button id="submitBtn" type="submit" color="success" >
                                                        Gönder
                                            </Button>
                                    </ButtonGroup>


                    
                            </Stack>



                    

            </Stack>
        </Stack>

  )
}

export default UserRegisterForm
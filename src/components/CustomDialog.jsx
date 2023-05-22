import React, { useState } from 'react'
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button} from "@mui/material";

function CustomDialog() {

    let [isOpen,setIsOpen] = useState(false)


  return (
        <>
                <Button onClick={()=>setIsOpen(true)}>Dialog Aç/Kapat</Button>
                <Dialog open={isOpen} onClose={()=>setIsOpen(false)} >
                    <DialogTitle>Hangi teknolojileri kullanabiliyorsun</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Aşağıda bulunan seçenekler hangisi size göre uygunsa tıklayınız.</DialogContentText>
                        <DialogActions>
                            <Button onClick={()=>setIsOpen(false)}>NodeJS</Button>
                            <Button onClick={()=>setIsOpen(false)}>React</Button>
                            <Button onClick={()=>setIsOpen(false)}>ExpressJS</Button>
                            <Button onClick={()=>setIsOpen(false)}>MongoDB</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
        </>
  )
}

export default CustomDialog
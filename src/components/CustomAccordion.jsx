import React, { useState } from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

function CustomAccordion() {

  let [expanded,setExpanded] = useState(false)

  const handleChange =(panel)=>(event,isExpanded)=>{
    console.log(isExpanded)
    setExpanded(isExpanded ? panel : false)
  }


  return (
    <div>
{/*       
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Birinci Bölüm Özeti</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Burası birinci bölümün açıklamasıdır.
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                  <Typography>İkinci Bölüm Özeti</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Burası ikinci bölüm açıklamasıdır.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>Üçüncü Bölüm Özeti</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Burası üçüncü bölüm açıklamasıdır.</Typography>
            </AccordionDetails>
          </Accordion> */}



      <Accordion expanded={expanded==="panel1"} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Birinci Bölüm Özeti</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Burası birinci bölümün açıklamasıdır.
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded==="panel2"} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Birinci Bölüm Özeti</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Burası birinci bölümün açıklamasıdır.
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded==="panel3"} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Birinci Bölüm Özeti</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Burası birinci bölümün açıklamasıdır.
            </AccordionDetails>
          </Accordion>
          
    </div>
  )
}

export default CustomAccordion
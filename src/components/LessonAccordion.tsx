import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(isExpanded);
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          inventore eum nihil unde? Eos corrupti minus unde? Quisquam quaerat
          rerum numquam ab ipsam rem cupiditate, odio obcaecati deserunt,
          veritatis consequuntur?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          inventore eum nihil unde? Eos corrupti minus unde? Quisquam quaerat
          rerum numquam ab ipsam rem cupiditate, odio obcaecati deserunt,
          veritatis consequuntur?
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          inventore eum nihil unde? Eos corrupti minus unde? Quisquam quaerat
          rerum numquam ab ipsam rem cupiditate, odio obcaecati deserunt,
          veritatis consequuntur?
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          inventore eum nihil unde? Eos corrupti minus unde? Quisquam quaerat
          rerum numquam ab ipsam rem cupiditate, odio obcaecati deserunt,
          veritatis consequuntur?
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          inventore eum nihil unde? Eos corrupti minus unde? Quisquam quaerat
          rerum numquam ab ipsam rem cupiditate, odio obcaecati deserunt,
          veritatis consequuntur?
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          inventore eum nihil unde? Eos corrupti minus unde? Quisquam quaerat
          rerum numquam ab ipsam rem cupiditate, odio obcaecati deserunt,
          veritatis consequuntur?
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

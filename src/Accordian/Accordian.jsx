import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./Accordian.module.css"

const Accordian = () => {
    return (
        <div className={styles.wrapper}>
        <h1>FAQs</h1>
          <Accordion className={styles.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Is Qtify free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
              <Typography color="black">
              Yes! It is 100% free, and has 0% ads!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  className={styles.expandIcon}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Can I download and listen to songs offline?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
              <Typography color="black">
              No it's a online feature.
              </Typography>
            </AccordionDetails>
          </Accordion>
        
        </div>
      );
    
}

export default Accordian
import React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionActions from "@mui/material/AccordionActions"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"
import { Stack } from "@mui/material"
const FAQ = () => {
 return (
  <Stack direction={"column"} gap={2} fontSize={"1.1rem"} >
   <Accordion>
    <AccordionSummary sx={{fontWeight:"bolder"}} expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
     how did we get here
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
     Accordion 2
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
     know our best team members
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
    <AccordionActions>
     <Button>Cancel</Button>
     <Button>Agree</Button>
    </AccordionActions>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
     9/11 was done by the american governoment
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
     why arabs love food so much
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
    <AccordionActions>
     <Button>Cancel</Button>
     <Button>Agree</Button>
    </AccordionActions>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
     why are we the best in the west
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
     what do we serve
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
    <AccordionActions>
     <Button>Cancel</Button>
     <Button>Agree</Button>
    </AccordionActions>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
     why are we here
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
   </Accordion>
   <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
     who are we
    </AccordionSummary>
    <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</AccordionDetails>
    <AccordionActions>
     <Button>Cancel</Button>
     <Button>Agree</Button>
    </AccordionActions>
   </Accordion>
  </Stack>
 )
}

export default FAQ

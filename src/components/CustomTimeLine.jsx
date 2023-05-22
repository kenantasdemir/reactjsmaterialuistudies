import React from 'react'
import { Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineDot,TimelineContent } from '@mui/lab'

function CustomTimeLine() {
  return (
    <Timeline>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Sepete Git</TimelineContent>
        </TimelineItem>



        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Kişisel bilgilerini gir.</TimelineContent>
        </TimelineItem>


        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Ödeme yöntemi seç</TimelineContent>
        </TimelineItem>


    </Timeline>
  )
}

export default CustomTimeLine
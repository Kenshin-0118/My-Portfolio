import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <>
      <span className='education w-full'/>
      <section className='w-full h-full relative mx-auto max-w-screen-xl' data-aos="fade-up" data-aos-duration="500">
      <div className="w-full sticky top-16 z-50 text-white font-bold text-3xl  px-4 , md:px-8 md:text-4xl py-4 bg-brand-dark">Education</div>
        <section className='px-2 md:px-8 lg:px-16'>
            <Timeline position="alternate" className='border-2 border-brand-cyan rounded-2xl'>
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                >
                Primary Education
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                    <SportsEsportsIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Upper Tamugan Elementary School
                </Typography>
                <Typography>SY: 2008 - 2014</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                >
                Secondary Education
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Lower Tamugan National Highschool
                </Typography>
                <Typography>SY: 2014 - 2020</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                >
                Higher Education
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                    <SchoolIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Holy Cross of Davao College
                </Typography>
                <Typography>SY: 2020 - 2024</Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        </section>
      </section>
    </>
  );
}
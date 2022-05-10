import React from "react";
import {
  Timeline,
  Events,
  themes,
  createTheme,
  ImageEvent,
  TextEvent
} from '@merc/react-timeline';
import school_img from '../About/AdmissionsFeature-2048x652.jpeg'
import americorps from '../About/americoprs.jpg'
import boot_camp from "../About/boot_camp.jpg"

function About() {
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor:'#494e6b',
    color: 'white',
  },
  date: {
    backgroundColor: '#192231'
  },
  timelineTrack: {
    backgroundColor: '#192231',
    width: '4px'
  },
  marker: {
    border: '2px solid #192231'
  },
  imageAtom: {
    objectFit: 'cover',
    borderRadius: '50%',
    overflow: 'hidden'
  }
})

  return (
    <section className="page-section" id="about-me">
      <div className="about-box">
        <div className="container about-con">
          <div className="text-center">
            <h1 className="about-title">My Journey</h1>
            <h4 className="description">How I got here!</h4>
            <Timeline theme={customTheme}>
              <Events>
                <ImageEvent
                  date="8/15/2016-5/14/2020"
                  text="Attended and eventually graduated from The University of Tennessee with a B.A. in Psychology."
                  src={school_img}/>
                <ImageEvent
                  date="8/25/2020 - 8/25/2021"
                  text="Spent a year in Montana as a substance abuse prevention specialist"
                  src={americorps}>
                </ImageEvent>
                <ImageEvent
                  date="12/5/2021 - 5/25/2022"
                  text="Attended Vanderbilt Coding Boot Camp"
                  src={boot_camp}>
                </ImageEvent>
              </Events>
            </Timeline>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About;
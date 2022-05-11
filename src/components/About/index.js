import React from "react";
import '../About/timeline.css'
import school_img from '../About/school.jpg'
import americorps from '../About/americorps.jpg'
import boot_camp from "../About/boot_camp.jpg"

function About() {

  return (
    <section className="page-section" id="about-me">
      <div className="about-box">
        <div className="container about-con">
          <div className="text-center">
            <h1 className="about-title">My Journey</h1>
            <h4 className="description">How I got here!</h4>
            <ul className="timeline">
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid school_img" src={school_img} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>May 2020</h4>
                                <h4 className="subheading">Graduated from the University of Tennessee with a B.A. in Psychology</h4>
                            </div>
                            <div className="timeline-body"><p >After 4 years, I graduated as a psychology major with a business administration minor. While enrolled I took part in alternative spring break programs as a way to serve communities in need.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid americorps" src={americorps} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>August 2020</h4>
                                <h4 className="subheading">Left home to serve a term as an AmeriCorps member in Montana</h4>
                            </div>
                            <div className="timeline-body"><p>While I love my hometown, I felt like it was the perfect time to find out who I could be in a new environment. I served as a youth substance abuse prevention specialist in a small town called Sidney, Montana. While I was there, I led coalition meeting, helped with grant writing, and met with youth in the community about ways to prevent teens from turning towards drugs and alcohol. This small town will always have a place in my heart!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid " src={boot_camp} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2021</h4>
                                <h4 className="subheading">Started attending Vanderbilt Coding Boot Camp</h4>
                            </div>
                            <div className="timeline-body"><p>After spending years going down the path to be a full time healthcare worker, I realized that it wasn't my calling. I wanted something new and challenging. I've always had a passion for technology, but never thought I could succeed in the field. But, due to my past experiences, I've grown more confident in myself and I now believe the old saying that 'you can do anything you set your mind to!' </p></div>
                        </div>
                    </li>
                </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About;
import React from 'react'

const EXPERIENCES = [
  {
    position: 'Software Engineer',
    organization: 'Harmonic Inc',
    location: 'Hong Kong',
    duration: 'Aug 2014 - Now',
    desc: 'Worked in the cloud team to develop a software-based media processing platform as the next generation proudct for the company.'
  },
  {
    position: 'Graduate Trainee',
    organization: 'PCCW Solutions',
    location: 'Hong Kong',
    duration: 'Aug 2012 - Jan 2014',
    desc: 'Employed as Graduate Trainee by PCCW Solutions. I worked as a programmer in the development of a Java System for Social Security Department of HKSAR Government. Working in data conversion team, I help to collect, migrate and convert the raw data into the system.'
  },
  {
    position: 'Developer Intern',
    organization: 'Perugia University',
    location: 'Italy',
    duration: 'Jun 2012 - Aug 2012',
    desc: 'Joined IT department of the university as an intern and responsible to research on building mobile applications with web technologies to cross platforms and develop such mobile web applications for campus.'
  },
  {
    position: 'Placement',
    organization: 'HSBC',
    location: 'Hong Kong',
    duration: 'May 2010 - May 2011',
    desc: 'Worked as a placement in the Enterprise Architecture team.  My main duties were to develop processes to automatically analyze data and generate reports to support the management.'
  }
]

const MAIN_SKILLS = [
  {name: 'Javascript', progress: 80},
  {name: 'Java', progress: 60},
  {name: 'Photoshop', progress: 65}
]

const SKILLS = [
  'Node.js',
  'React',
  'Redux',
  'Python',
  'C',
  'AngularJS',
  'Electron',
  'jQuery',
  'Cordova',
  'Bootstrap',
  'PHP',
  'MongoDB'
]

const Resume = () => {
  return (
    <div id='resume'>
      <div className='container'>
        <div className='row'>
          <div id='resume-content' className='col-lg-10 col-sm-12'>
            <div className='container-fluid'>
              <section id='education-section' name='education' />
              <div className='row'>
                <div className='col-md-2'>
                  <p className='resume-item-name'>EDUCATION</p>
                </div>

                <div className='col-md-7'>
                  <p><t>Bachelor of Science in Computing Studies</t><br />
                    Hong Kong Baptist University<br />
                  </p>
                </div>
                <div className='col-md-3'>
                  <p>Sep 2007 - May 2012 <br />
                    Suspended in 2010 for placement</p>
                </div>
              </div>

              <section id='job-section' name='job' />
              <hr />
              {
                EXPERIENCES.map((exp, index) => (
                  <div key={index} className='row'>
                    <div className='col-md-2'>
                      <p className='resume-item-name'>JOB</p>
                    </div>
                    <div className='col-md-7'>
                      <t>{exp.position}</t>
                      <br />
                      {exp.organization}
                    </div>
                    <div className='col-md-3'>
                      {exp.duration}
                    </div>
                    <div className='col-md-7 col-md-offset-2'>
                      <p className='resume-description'>
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))
              }

              <section id='award-section' name='award' />
              <hr />

              <div className='row'>
                <div className='col-md-2'>
                  <p className='resume-item-name'>AWARD</p>
                </div>
                <div className='col-md-7'>
                  <p><t>Silver Award</t><br />
                    HKEIA Innovation & Technology Project Competition<br />
                  </p>
                </div>
                <div className='col-md-3'>
                  <p>Nov 2012</p>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-7 col-md-offset-2'>
                  <p className='resume-description'>Held by Hong Kong Electronic Industries Association and aims to recognize and reward bachelor or higher diploma graduates of electronic engineering or related engineering fields with outstanding projects demonstrating excellence in technology and innovation</p>
                </div>
              </div>

              <section id='skill-section' name='skill' />
              <hr />

              <div className='row'>
                <div className='col-md-2'>
                  <p className='resume-item-name'>SKILL</p>
                </div>
                <div className='col-md-9'>
                  {MAIN_SKILLS.map((skill, index) => (
                    <div key={index} className='main-skill-bar'>
                      <p>{skill.name}</p>
                      <div className='progress progress-striped'>
                        <div className='progress-bar progress-bar-info' role='progressbar' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width: `${skill.progress}%`}}>
                          <span className='sr-only'>{skill.progress}% Complete</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className='invisible-hr' />
              <div className='row'>
                <div className='col-md-9 col-md-offset-2'>
                  {SKILLS.map((skill, index) => <p key={index} className='skill-tag'>{skill}</p>)}
                </div>
              </div>
            </div>
          </div>

          <div id='resume-catalog' className='col-lg-2 visible-lg'>
            <ul>
              <li id='cl-item-edu' className='cl-item'><a href='#resume'>Education</a></li>
              <li id='cl-item-job' className='cl-item'><a href='#job-section'>Jobs</a></li>
              <li id='cl-item-award' className='cl-item'><a href='#award-section'>Awards</a></li>
              <li id='cl-item-skill' className='cl-item'><a href='#skill-section'>Skills</a></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Resume

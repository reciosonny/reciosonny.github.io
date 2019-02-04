import React from 'react'
import { Link } from 'gatsby'
import Slider from 'react-slick'

import VueImage from '../components/images/vueImage'
import ReactImage from '../components/images/reactImage'
import AspnetImage from '../components/images/aspnet'
import JavaScriptImage from '../components/images/javascriptImg'
import NodeImage from '../components/images/nodeImg'
import LaravelImage from '../components/images/laravelImage'
import Image from '../components/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.js'
import ProjectDetails from '../components/ProjectDetails'
import ClientTestimonies from '../components/ClientTestimonies'

import clientsDB from '../DB/clientsDB'
import projectDetailsDB from '../DB/projectDetailsDB'
import OpenSourceDetails from '../components/OpenSourceDetails'

import imgSonny from '../images/sonny.jpg'

const Intent = ({ name }) => (
  <div className="row">
    <div className="col-8 intent-header">
      <h1>{name}</h1>
    </div>
  </div>
)

const Bar = () => (
  <div className="row">
    <div className="col-2 content-bar" />
  </div>
)

const ImgLoader = ({ name, imgComponent, classNames }) => {
  const Img = imgComponent
  return (
    <div className="col-4">
      <div className={`row ${classNames}`}>
        <div className="tech-stacks-div">
          <Img />
        </div>
        <div className="col-12 text-center">
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

const jobTitles = [
  'Fullstack Web Developer',
  'Software Engineer',
  'Tech Consultant',
]
class IndexPage extends React.Component {
  state = {
    hideUnderscore: false,
    underscoreChar: '_',
    jobTitleDisplay: 'Web Developer',
    strLength: 0,
    jobTitleIndex: 0,
    btnHoverClass: '',
    displayModal: 'none',
  }
  constructor(props) {
    super(props)
    this.modalRef = React.createRef()
  }

  timer = undefined
  componentDidMount() {
    window.onclick = event => {
      const modal = this.modalRef.current
      if (event.target == modal) {
        this.setState({ displayModal: 'none' })
      }
    }

    setInterval(() => {
      if (this.state.underscoreChar.length > 0) {
        this.setState({ underscoreChar: '' })
      } else {
        this.setState({ underscoreChar: '_' })
      }
    }, 100)

    setInterval(() => {
      const { strLength, jobTitleIndex } = this.state
      let jobTitle = jobTitles[jobTitleIndex]

      if (jobTitle && strLength < jobTitle.length) {
        const newLength = strLength + 1
        this.setState({
          jobTitleDisplay: jobTitle.substring(0, newLength),
          strLength: newLength,
        })
      } else if (
        jobTitle &&
        strLength === jobTitle.length &&
        jobTitles.length - 1 >= jobTitleIndex
      ) {
        this.setState({
          jobTitleIndex: jobTitleIndex + 1,
        })

        setTimeout(() => {
          const newLength = 0
          jobTitle = jobTitles[jobTitleIndex]

          this.setState({
            jobTitleDisplay: jobTitle.substring(0, newLength),
            strLength: newLength,
          })
        }, 3000)
      } else if (jobTitleIndex > jobTitles.length - 1) {
        if (!this.timer) {
          this.timer = setTimeout(() => {
            this.setState({ jobTitleIndex: 0, strLength: 0 })
            this.timer = undefined
          }, 3000)
        }
      }
    }, 150)
  }

  showModal = () => {
    this.setState({ displayModal: 'block' })
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    }

    const Projects = projectDetailsDB.map(project => (
      <ProjectDetails
        key={project.id}
        onClick={this.showModal}
        name={project.name}
        shortDesc={project.shortDesc}
        img={project.img}
      />
    ));
    const OpenSourceProjects = projectDetailsDB.map(project => (
      <OpenSourceDetails
        key={project.id}
        onClick={this.showModal}
        name={project.name}
        shortDesc={project.shortDesc}
        img={project.img}
      />
    ));

    const Clients = clientsDB.map(client => (
      <ClientTestimonies
        key={client.id}
        name={client.name}
        testimony={client.testimony}
        image={client.image}
      />
    ))

    return (
      <div className="body">
        <div
          id="myModal"
          className="modal"
          style={{ display: this.state.displayModal }}
          ref={this.modalRef}
        >
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="close"
                onClick={() => this.setState({ displayModal: 'none' })}
              >
                &times;
              </span>
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <p>Some text in the Modal Body</p>
              <p>Some other text...</p>
            </div>
            <div className="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>

        <nav className="row">
          <div className="col-12">
            <h1>Sonny Recio</h1>
          </div>
        </nav>

        <div className="element">
            <div className="row">
                <div className="col-12">
                    <a href="https://twitter.com/YellowFlashDev" target="_blank">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                </div>
                <div className="col-12">
                    <a href="https://www.instagram.com/yellowflashdev/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="col-12">
                    <a href="https://medium.com/@reciosonny" target="_blank">
                        <i class="fab fa-medium"></i>
                    </a>
                </div>
                <div className="col-12">
                    <a href="https://github.com/reciosonny" target="_blank">                
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div className="col-12">
                    <a href="https://www.linkedin.com/in/sonny-recio-36819673" target="_blank">                
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="col-12">
                    <a href="https://stackoverflow.com/story/reciosonny" target="_blank">
                        <i class="fab fa-stack-overflow"></i>
                    </a>
                </div>
            </div>
        </div>

        <div className="row title-header text-center">
          <div className="col-12">
            <img src={imgSonny} className="profile-img" />
          </div>
          <div className="col-12" style={{ height: '125px' }}>
            <h1
              className="title-font"
              style={{ display: 'inline-block', margin: '0' }}
            >
              {this.state.jobTitleDisplay}
            </h1>
            <h1
              className="title-font"
              style={{
                display: 'inline-block',
                height: '80px',
                width: '80px',
                margin: '0',
              }}
            >
              {this.state.underscoreChar}
            </h1>
          </div>
          <div className="col-12 text-center">
            <h3>
              Making elegant and high quality source code like a classical
              music. ♪♫♪♫♪♫
            </h3>
            <h3>Translating your business needs into a piece of code.</h3>
          </div>
        </div>

        <div className="row text-center title-header">
          <button
            onClick={() =>
              (window.location.href = 'mailto:reciosonny@gmail.com')
            }
            className="btn-hire-me"
          >
            HIRE ME
          </button>
        </div>

        <Intent name={'Who Am I'} />
        <div className="row intent-content">
          <div className="col-12">
            <h2>I'm Sonny Recio{this.state.underscoreChar}</h2>
            <p>
              I develop / create both back and front-end web apps that will be
              of great use for clients with high quality delivery. I also
              contribute during business requirements and
              features/functionalities of it before I tackle it. Always
              available to tackle on new projects and exciting ideas.
            </p>
            <p>
              6 years of developing web apps using ASP.net MVC, along with
              front-end technologies. I can also do NodeJS, Laravel for simple
              apps. For Enterprise Apps I'm more experienced in using ASP.net.
            </p>
            <p>
              Nowadays you'll see me focusing on front-end technologies such as
              VueJS, ReactJS, and constantly learning new and old ways in
              JavaScript (ES5, ES6, ES7, ESNext, etc.). I also show big
              interests in User Experience Design and taking courses related to
              it to gain basic knowledge while integrating it in my front-end
              projects.
            </p>
          </div>
        </div>

        <Bar />

        <Intent name={'What I Do'} />
        <div className="row intent-content">
          <div className="col-4">
            <div className="row">
              <h3 className="text-center">Develop and launch Apps for you</h3>
            </div>
            <div className="row" style={{ textAlign: 'center' }}>
              <i className="fas fa-rocket fa-3x" style={{ color: 'white' }} />
            </div>
            <div className="row text-center service-desc">
              <span>
                I can develop and launch Apps for you regardless of your tech
                stacks
              </span>
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <h3 className="text-center">Software Consultation</h3>
            </div>
            <div className="row" style={{ textAlign: 'center' }}>
              <i className="fas fa-th-list fa-3x" style={{ color: 'white' }} />
            </div>
            <div className="row text-center service-desc">
              <span>
                I give software consultations, recommendations, tech stacks that
                are suitable to your use-case, budget, and business model. I can
                also suggest and recommend some suitable workflow for your team
                to be productive at all times
              </span>
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <h3 className="text-center">Code Review</h3>
            </div>
            <div className="row" style={{ textAlign: 'center' }}>
              <i className="fas fa-search fa-3x" style={{ color: 'white' }} />
            </div>
            <div className="row text-center service-desc">
              <span>
                I can do code review with your team, improve some of your code
                workflows, correct and apply better code architecture for your
                project
              </span>
            </div>
          </div>
        </div>

        <Bar />

        <Intent name={'Tech Stacks'} />

        <div className="row intent-content">
          <ImgLoader name="JavaScript" imgComponent={JavaScriptImage} />
          <ImgLoader name="VueJS" imgComponent={VueImage} />
          <ImgLoader name="ReactJS" imgComponent={ReactImage} />
          <ImgLoader name="ASP.net" imgComponent={AspnetImage} />
          <ImgLoader
            name="NodeJS"
            imgComponent={NodeImage}
            classNames="img-nodejs"
          />
          <ImgLoader name="Laravel" imgComponent={LaravelImage} />
        </div>

        <Bar />

        <Intent name={'Apps Developed'} />
        <div className="row intent-content">{Projects}</div>

        <Intent name={'Open-Source Projects'} />
        <div className="row intent-content">{OpenSourceProjects}</div>

        <Intent name={'What Clients Say'} />
        <div className="row intent-content">
          <div className="col-10">
            <Slider {...settings}>{Clients}</Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage

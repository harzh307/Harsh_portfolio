import Header from '../../component/Header';
import Footer from '../../container/Footer';
import PortText from '../../component/PortText';

const Skills = () => (
  <div className="light-theme">
    <Header>
      <PortText variant="portSingleBlog">Resume</PortText>
      <a className="backAlign" href="javascript:history.go(-1)">
        Back
      </a>
    </Header>
    <div className="resumeMain">
      <div className="blockTable">
        <PortText PortText variant="portHeadingText">
          Technologies
        </PortText>
        <div className="day">
          {/* <div className="dayRow"> */}
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              92%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">HTML5</PortText>
              <div className="Skillbar">
                <div className="Skillht1" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              80%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">JAVASCRIPT</PortText>
              <div className="Skillbar">
                <div className="Skillht2" />
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="dayRow"> */}
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              72%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">SASS</PortText>
              <div className="Skillbar">
                <div className="Skillht3" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              92%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">REACT</PortText>
              <div className="Skillbar">
                <div className="Skillht1" />
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="dayRow"> */}
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              80%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">NEXTJS</PortText>
              <div className="Skillbar">
                <div className="Skillht2" />
              </div>
            </div>
          </div>
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              72%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">REACT-NATIVE</PortText>
              <div className="Skillbar">
                <div className="Skillht3" />
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="Skillbars">
            <PortText variant="portEduPercent" component="h1">
              85%
            </PortText>
            <div className="Skillblock">
              <PortText variant="portHeadingCaption">TAILWINDCSS</PortText>
              <div className="Skillbar">
                <div className="Skillht4" />
              </div>
            </div>
          </div>
        </div>
        {/* <PortText variant="portAboutCaption">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>ReactNative</li>
          <li>TailwindCSS</li>
        </PortText> */}
      </div>
      <div className="workEp">
        <div className="workExp">
          <PortText variant="portHeadingText">Work experience</PortText>
        </div>
        <div className="workPara">
          <PortText variant="portHeadingCaption">
            <b>FRONT-END DEVELOPER </b> (from Nov 2020 to present)
          </PortText>
          <PortText variant="portAboutCaption">
            At{' '}
            <a style={{ color: 'blue' }} href="https://www.upgmp.com/">
              UpGMP.inc
            </a>
            , as Front-End developer from Novemver 2020 to present. Contributed in developing 2
            mobile application IOS & ANDROID, 1. It was a recipe app, a famous youtuber in gujarat
            needed a mobile application which can provide their recipe videos to all over the world.
            2. There was a survay application needed by VKC footwere company to get a proper
            feedback application from thir retailers. As working there I used to enjoy working as a
            front-end dev. I am taking the training of back-end as well.
          </PortText>
        </div>
      </div>
      <div className="blockTable">
        <PortText PortText variant="portHeadingText">
          Education
        </PortText>
        <div className="education">
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">
              <b>Bachelor of Electronics and Communication Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText">2018-2022</PortText>
            <PortText variant="portEduLeftText">
              At{' '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">
              <b>Bachelor of Electronics and Communication Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText">2018-2022</PortText>
            <PortText variant="portEduLeftText">
              At{' '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">
              <b>Bachelor of Electronics and Communication Engineering</b>
            </PortText>
            <PortText variant="portEduLeftText">2018-2022</PortText>
            <PortText variant="portEduLeftText">
              At{' '}
              <a className="college" href="https://silveroakuni.ac.in/">
                SilverOak University
              </a>
            </PortText>
          </div>
          {/* <div className="leftTextAlign">
            <PortText variant="portEduLeftText">2020-2021</PortText>
            <PortText variant="portEduLeftText">
              <b>ReactJS</b>
            </PortText>
            <PortText variant="portEduLeftText">UpGmp inc</PortText>
          </div>
          <div className="leftTextAlign">
            <PortText variant="portEduLeftText">2020-2021</PortText>
            <PortText variant="portEduLeftText">
              <b>ReactNative</b>
            </PortText>
            <PortText variant="portEduLeftText">UpGmp inc</PortText>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;

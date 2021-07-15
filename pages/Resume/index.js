/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import Header from '../../component/Header';
import PortText from '../../component/PortText';
import useEducationSkills from '../../hooks/useEducationSkills';

const Skills = () => {
  const { data: educationSkillsData } = useEducationSkills();
  return (
    // const { data: educationData } = useEducation();
    <div className="light-theme">
      <Header>
        <PortText variant="portSingleBlog">Resume</PortText>
        <a className="backAlign" href="/">
          Back
        </a>
      </Header>
      <div className="resumeMain">
        <div className="blockTable">
          <PortText PortText variant="portHeadingText">
            Technologies
          </PortText>
          <div className="day">
            {educationSkillsData?.skills?.map(x => (
              <div className="Skillbars">
                <PortText variant="portEduPercent" component="h1">
                  {`${x.rating}%`}
                </PortText>
                <div className="Skillblock">
                  <PortText variant="portHeadingCaption">{x.title}</PortText>
                  <div className="Skillbar">
                    <div style={{ width: `${x.rating}%` }} className="Skillht1" />
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="dayRow"> */}
            {/* <div className="Skillbars">
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
            </div> */}
            {/* </div> */}
            {/* <div className="dayRow"> */}
            {/* <div className="Skillbars">
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
            </div> */}
            {/* </div> */}
            {/* <div className="dayRow"> */}
            {/* <div className="Skillbars">
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
            </div> */}
            {/* </div> */}
            {/* <div className="Skillbars">
              <PortText variant="portEduPercent" component="h1">
                85%
              </PortText>
              <div className="Skillblock">
                <PortText variant="portHeadingCaption">TAILWINDCSS</PortText>
                <div className="Skillbar">
                  <div className="Skillht4" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {educationSkillsData?.experiences?.map(x => (
          <div className="workEp">
            <div className="workExp">
              <PortText variant="portHeadingText">Work experience</PortText>
            </div>
            <div className="workPara">
              <PortText variant="portHeadingCaption">{x?.role} (from Nov 2020 to present)</PortText>
              <PortText variant="portAboutCaption">
                At{' '}
                <a style={{ color: 'blue' }} href={x?.companyLink}>
                  {x?.companyName}
                </a>
                {x?.description}
              </PortText>
            </div>
          </div>
        ))}

        <div className="blockTable">
          <PortText PortText variant="portHeadingText">
            Education
          </PortText>
          <div className="education">
            {educationSkillsData?.educations?.map(x => (
              <div key={x.id} className="leftTextAlign">
                <PortText variant="portEduLeftText">{x.degree}</PortText>
                <PortText className="dateMargin" variant="portEduLeftText">
                  {`${x.startDate} to ${x.endDate}`}
                </PortText>
                <PortText variant="portEduLeftText">
                  At{' '}
                  <a className="college" href="https://silveroakuni.ac.in/">
                    {x.institute}
                  </a>
                </PortText>
              </div>
            ))}
            {/* <div className="leftTextAlign">
              <PortText variant="portEduLeftText">
                <b>Bachelor of Electronics and Communication Engineering</b>
              </PortText>
              <PortText className="dateMargin" variant="portEduLeftText">
                2018-2022
              </PortText>
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
              <PortText className="dateMargin" variant="portEduLeftText">
                2018-2022
              </PortText>
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
              <PortText className="dateMargin" variant="portEduLeftText">
                2018-2022
              </PortText>
              <PortText variant="portEduLeftText">
                At{' '}
                <a className="college" href="https://silveroakuni.ac.in/">
                  SilverOak University
                </a>
              </PortText>
            </div> */}
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
};
export default Skills;

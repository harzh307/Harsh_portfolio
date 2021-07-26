/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../component/Header';
import PortText from '../../component/PortText';
import useEducationSkills from '../../hooks/useEducationSkills';

const Skills = () => {
  const { data: educationSkillsData } = useEducationSkills();
  const router = useRouter();
  return (
    // const { data: educationData } = useEducation();

    <div className="light-theme">
      <Header>
        <PortText variant="portSingleBlog">Resume</PortText>
        <a className="backAlign" tabIndex="10" role="button" onClick={() => router.back()}>
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
          </div>
        </div>
        {educationSkillsData?.experiences?.map(x => (
          <div className="workEp">
            <div className="workExp">
              <PortText variant="portHeadingText">Work experience</PortText>
            </div>
            <div className="workPara">
              <PortText className="boldText" variant="portHeadingCaption">
                {x?.role} (from Nov 2020 to present)
              </PortText>
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
                <PortText variant="portEduLeftText">{`${x.startDate} to ${x.endDate}`}</PortText>
                <PortText className="margin" variant="portEduLeftText">
                  {x.degree}
                </PortText>
                <PortText variant="portEduLeftText">
                  {/* At{' '} */}
                  <a className="college boldText" href="https://silveroakuni.ac.in/">
                    {x.institute}
                  </a>
                </PortText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

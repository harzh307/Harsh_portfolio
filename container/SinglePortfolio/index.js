import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../../component/Header';
import PortText from '../../component/PortText';
// import Contact from '../../container/Contact';
import Button from '../../component/Button';

const Project = ({ data }) => {
  const router = useRouter();

  return (
    // const { data: portfolioData } = usePortfolio();
    <>
      <div className="light_theme">
        <Header>
          <PortText variant="portSingleBlog" className="portSingleBlog">
            Project Details
          </PortText>
          <a className="backAlign" role="button" onClick={() => router.back()}>
            Back
          </a>
        </Header>
        <div className="mainDiv">
          <div className="singleImg">
            {data?.media?.map(x => (
              <Image height={900} width={900} src={x?.url} className="sImg" alt="" />
            ))}
          </div>
          <div className="textDiv">
            <div>
              <PortText variant="portHeadingText">{data?.title}</PortText>
            </div>
            <div className="content">
              <div>
                <h3 className="head">Role</h3>
                <p className="detail">{data?.role}</p>
              </div>
              <div>
                <h3 className="head">Project Categories</h3>
                {data?.category?.map(y => (
                  <p className="detail">{y?.title}</p>
                ))}
              </div>
              {data?.technologyUsed?.map(y => (
                <>
                  <h3 className="head">Technology Used</h3>
                  <a role="button" href={data.link} className="detail">
                    <Button>{y?.title}</Button>
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>

        {/* <Contact /> */}
      </div>
    </>
  );
};
export default Project;

import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const proficientSkills = [
    'Algorithms',
    'Data Structures',
    'OOP',
    'Java',
    'Spring',
    'SQL',
    'DBMS',
    'Python',
    'Git',
    'REST',
    'Javascript',
    'Bash/Shell',
    'NodeJS',
    'Linux',
    'Real-time',
    'Design Patterns',
    'Jekyll',
    'Flask',
    'Fast API',
  ];
  const familiarSkills = [
    'Simulation',
    'Angular',
    'C/C++',
    'Docker',
    'Blockchain',
    'Django',
    'Sensors',
    'React',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              As a passionate software engineer with a deep-rooted interest in technology,
              automation, and problem-solving, I have dedicated over a decade to honing my technical
              expertise. From my early fascination with computers to my career in software
              development, I have consistently focused on mastering the evolving landscape of
              technology. With a diverse experience spanning cloud-native applications,
              microservices, real-time systems, and insurance domain software, I have built
              scalable, reliable, and efficient solutions that impact millions of users worldwide.
            </p>
            <p>
              I am driven by the desire to leverage my skills in backend development, cloud
              services, and operational excellence to create impactful systems that drive business
              success and customer satisfaction. As I continue to grow professionally, my goal is to
              remain at the forefront of technological innovation, solving complex problems, and
              delivering high-quality solutions in an ever-changing industry.
            </p>

            <p>Here are a few technologies that I’m proficient in:</p>

            <p>
              <ul className="skills-list">
                {proficientSkills && proficientSkills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </p>

            <p>Here are a few technologies that I’m familiar with:</p>

            <p>
              <ul className="skills-list">
                {familiarSkills && familiarSkills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

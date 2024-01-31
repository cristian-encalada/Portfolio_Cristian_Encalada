import { useTranslation } from 'next-i18next';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import { RiMapPin2Line, RiMailLine } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';

import LinkItem from './LinkItem';
import { Container, Name, BasicInfo, AboutMe, LinksList } from './styles';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Name>Cristian Encalada</Name>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Full stack developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Electronics Engineer',
          1000,
        ]}
        wrapper="span"
        speed={40}
        style={{ fontSize: '1.5em', display: 'inline-block' }}
        repeat={Infinity}
      />

      <BasicInfo>
        <li>
          <a href="mailto:cris.encalada.camargo@gmail.com">
            <RiMailLine /> cris.encalada.camargo@gmail.com
          </a>
        </li>
        <li>
          <RiMapPin2Line /> {t('homeLocation')}
        </li>
      </BasicInfo>

      <AboutMe>{t('homeDescription1')}</AboutMe>
      <AboutMe>{t('homeDescription2')}</AboutMe>

      <LinksList>
        <LinkItem
          title="Linkedin"
          href="https://www.linkedin.com/in/cristian-encalada-45099616a/"
        >
          <AiFillLinkedin />
        </LinkItem>
        <LinkItem title="Github" href="https://github.com/cristian-encalada">
          <AiFillGithub />
        </LinkItem>
        <LinkItem
          title="Curriculum"
          // eslint-disable-next-line max-len
          href="/assets/pdf/CV_Cristian_Encalada_Full_Stack_Developer.pdf"
        >
          <AiFillFileText />
        </LinkItem>
      </LinksList>
    </Container>
  );
};

export default About;

import { useTranslation } from 'next-i18next';

import { Project } from '../projects';
import { Container } from './styles';

type Props = {
  project: Project;
};

const Card: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation('common');

  return (
    <Container href={project.link} target="_blank">
      <div className="img-wrapper">
        <video width="100%" height="165" autoPlay muted loop playsInline>
          <source src={project.video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text">
        <h3>{project.name}</h3>
        <span>{t(project.stack)}</span>
      </div>
    </Container>
  );
};

export default Card;

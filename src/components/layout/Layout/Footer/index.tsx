import Separator from '@components/Separator';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <Separator />
    <span>&copy; {new Date().getFullYear()} - Cristian Encalada</span>
  </Container>
);

export default Footer;

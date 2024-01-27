/* eslint-disable max-len */
import Image from 'next/image';

import CodePic from '@assets/imgs/success.png';

import { Container } from './styles';

const ProfilePicture = () => (
  <Container>
    <div className="wrapper">
      <Image
        src={CodePic}
        alt="success code"
        height="400"
        width="400"
        priority
      />
    </div>
  </Container>
);

export default ProfilePicture;

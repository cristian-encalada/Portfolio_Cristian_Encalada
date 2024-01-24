/* eslint-disable max-len */
import { CodeBlock, github } from 'react-code-blocks';

import { Container } from './styles';

const ProfilePicture = () => (
  <Container>
    <div className="border">
      <div className="wrapper">
        <CodeBlock
          text={`"About me": {
        "Name": "Cristian Encalada",
        "From": "Bolivia",
        "Living in": "Montevideo - Uruguay",
      },
      "IT Experience": {
        "QA Software Engineer": ["Jalasoft", "Bolivia"],
        "IT Support": ["Soft Computers", "Bolivia"]
      }`}
          language="json"
          theme={github}
          codeContainerStyle={{ whiteSpace: 'pre' }}
        />
      </div>
    </div>
    <div></div>
  </Container>
);

export default ProfilePicture;

import * as yup from 'yup';

const makeSchema = (language: string) => {
  const checkLanguage = (es: string, en: string) =>
    language.includes('es') ? es : en;

  const nameRequired = checkLanguage(
    'Nombre es un campo obligatorio',
    'Name is a required field'
  );
  const emailFormat = checkLanguage(
    'Email debe tener un formato válido',
    'Email needs to be valid'
  );
  const emailRequired = checkLanguage(
    'Email es un campo obligatorio',
    'Email is a required field'
  );
  const messageRequired = checkLanguage(
    'Mensaje es un campo obligatorio',
    'Message is a required field'
  );

  return yup.object().shape({
    name: yup.string().required(nameRequired),
    email: yup.string().email(emailFormat).required(emailRequired),
    message: yup.string().required(messageRequired),
  });
};

export default makeSchema;

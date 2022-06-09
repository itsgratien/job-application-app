import { object, string } from 'yup';

const requiredMessage = "This Field Can't be Left Blank";

export const ApplicationSchema = object().shape({
  names: string().required(requiredMessage),
  email: string().required(requiredMessage).email('Email must be valid'),
  location: string().required(requiredMessage),
  resume: string().required(requiredMessage),
  phoneNumber: string().required(requiredMessage),
});

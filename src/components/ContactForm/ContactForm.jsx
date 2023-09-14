import * as yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  StyledForm,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessageStyled,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

function ContactForm({ onSubmit }) {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <FormLabel>
            {'Name'}
            <FormInput type="text" name="name" />
            <ErrorMessageStyled name="name" component="div" />
          </FormLabel>
          <FormLabel>
            {'Number '}
            <FormInput type="text" name="number" />
            <ErrorMessageStyled name="number" component="div" />
          </FormLabel>
          <FormButton type="submit" disabled={isSubmitting}>
            Add contact
          </FormButton>
        </StyledForm>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

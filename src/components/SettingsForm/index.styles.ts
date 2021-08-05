import styled from "styled-components";
import { ErrorMessage as FormikErrorMessage, Field, Form } from "formik";

export const SettingsForm = styled(Form)`
  margin-bottom: 3rem;
`;

export const Label = styled.label`
  font-weight: 800;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #585858;
`;

export const Input = styled(Field)`
  background-color: #ebebeb;
  width: 100%;
  color: black;
  border-radius: 4px;
  padding: 0.5rem 0.5rem;

  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 0.8rem;
  color: #f02929;
  font-weight: 600;
  margin-top: -1rem;
  margin-bottom: 0.5rem;
`;

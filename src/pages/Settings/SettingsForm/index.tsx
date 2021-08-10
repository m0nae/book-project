import { Formik } from "formik";
import {
  SettingsForm as SettingsFormContainer,
  Label,
  Input,
  ErrorMessage,
} from "./index.styles";

interface SettingsFormValues {
  displayName: string;
  currentPassword: string;
  newPassword: string;
}

type SettingsFormErrors = SettingsFormValues;

export default function SettingsForm() {
  const CURRENTPASSWORD = "password";

  return (
    <>
      <Formik
        initialValues={{
          displayName: "Jane Doe",
          currentPassword: "",
          newPassword: "",
        }}
        onSubmit={() => console.log("submitted")}
        validate={(values) => {
          const errors: SettingsFormErrors = {} as SettingsFormErrors;

          if (!values.displayName || values.displayName.length < 4) {
            errors.displayName = "Display Name is required!";
          }

          if (!values.currentPassword) {
            errors.currentPassword = "Current password is required!";
          }

          // TODO: this will be matching with a REAL password
          // from an actual API. so remember to look up how
          // validation works with async requests!!!

          if (values.currentPassword !== CURRENTPASSWORD) {
            errors.currentPassword = "Password is incorrect";
          }

          if (values.newPassword.length < 8) {
            errors.newPassword = "Password must be at least 8 characters.";
          }

          return errors;
        }}
      >
        {() => (
          <SettingsFormContainer autoComplete="off">
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              type="text"
              id="displayName"
              name="displayName"
              placeholder="Insert text here"
            />
            <ErrorMessage name="displayName" component="p" />
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Insert text here"
            />
            <ErrorMessage name="currentPassword" component="p" />

            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Insert text here"
            />
            <ErrorMessage name="newPassword" component="p" />
          </SettingsFormContainer>
        )}
      </Formik>
    </>
  );
}

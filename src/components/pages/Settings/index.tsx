import { useState, useRef } from "react";
import ChangeAvatar from "components/ChangeAvatar";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import Header from "components/Header";
import {
  Buttons,
  ButtonsLeft,
  ButtonsRight,
  Container,
  Content,
  SettingsContainer,
  BackButton,
  Button,
  DeleteButton,
  SaveButton,
} from "./index.styles";
import { useHistory } from "react-router-dom";
import icon from "components/icons";
import SettingsForm from "components/SettingsForm";

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const history = useHistory();

  // TODO: include a "reset" button to reset all
  // form values back to their original values
  return (
    <>
      <Header staticPosition />
      <Container>
        <Content>
          <BackButton
            onClick={() => history.goBack()}
            icon={<icon.LeftArrow />}
          />
          <ChangeAvatar />
          <SettingsContainer>
            <SettingsForm />
          </SettingsContainer>
          <Buttons>
            <ButtonsLeft>
              <DeleteButton onClick={() => setIsOpen(true)}>
                Delete Account
              </DeleteButton>
            </ButtonsLeft>
            <ButtonsRight>
              <SaveButton>Save</SaveButton>
            </ButtonsRight>
          </Buttons>
        </Content>
      </Container>
      <DeleteAccountDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={onClose}
        cancelRef={cancelRef}
      />
    </>
  );
}

function DeleteAccountDialog({ isOpen, setIsOpen, onClose, cancelRef }: any) {
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete your account? This action cannot
              be undone!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                style={{ marginRight: "1rem" }}
              >
                Cancel
              </Button>
              <DeleteButton onClick={onClose}>Delete</DeleteButton>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

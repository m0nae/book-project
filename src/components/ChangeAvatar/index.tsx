import icon from "components/icons";
import { ProfileAvatarContainer, ProfileAvatar } from "./index.styles";

export default function ChangeAvatar() {
  return (
    <ProfileAvatarContainer>
      <label htmlFor="photo-upload">
        <icon.Edit />
      </label>
      <input type="file" id="photo-upload" name="photo-upload" />
      <ProfileAvatar
        src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt="Profile picture"
      />
    </ProfileAvatarContainer>
  );
}

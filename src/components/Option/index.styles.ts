import styled from "styled-components";

export const Label = styled.label`
  border-left: ${(props: any) =>
    props.selectedOption === props.optionName
      ? "3px solid var(--dark-red)"
      : ""};
  font-weight: ${(props: any) =>
    props.selectedOption === props.optionName ? "600" : ""};
  padding-left: 1rem;
`;

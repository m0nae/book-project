import { FaHeart } from "react-icons/fa";
import { FaRegComment, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

interface HeartProps {
  color: string;
}

export const Heart = styled(FaHeart)`
  cursor: pointer;
  /* color: ${(props: HeartProps) => props.color}; */
  /* fill: ${(props: HeartProps) => props.color}; */
  stroke: black;
  stroke-width: 45;
  width: 25px;
  /* svg {
    fill: ${(props: HeartProps) => props.color};
  } */
`;
export const Comment = styled(FaRegComment)`
  cursor: pointer;
`;

export const Star = styled(FaRegStar)`
  cursor: pointer;
`;

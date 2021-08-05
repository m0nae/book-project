import { FaHeart, FaRegEdit, FaRegComment, FaRegStar } from "react-icons/fa";
import { CgCheck } from "react-icons/cg";
import { HiDotsHorizontal, HiArrowLeft } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

import styled from "styled-components";

export const Heart = styled(FaHeart)`
  cursor: pointer;
  stroke: black;
  stroke-width: 45;
  width: 25px;
`;
export const Comment = styled(FaRegComment)`
  cursor: pointer;
`;

export const Star = styled(FaRegStar)`
  cursor: pointer;
`;

export const Check = styled(CgCheck)`
  cursor: pointer;
`;

export const Edit = styled(FaRegEdit)`
  cursor: pointer;
`;

export const HorizontalDots = styled(HiDotsHorizontal)`
  cursor: pointer;
`;

export const Send = styled(IoSend)`
  cursor: pointer;
`;

export const LeftArrow = styled(HiArrowLeft)`
  cursor: pointer;
`;

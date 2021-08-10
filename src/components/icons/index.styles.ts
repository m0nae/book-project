import { FaHeart, FaRegEdit, FaRegComment } from "react-icons/fa";
import { CgCheck } from "react-icons/cg";
import { HiDotsHorizontal, HiArrowLeft } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

export const Star = styled(IoIosStar)`
  cursor: pointer;
  color: #b3b3b3;
  font-size: 1.1rem;
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

export const LeftChevron = styled(FiChevronLeft)`
  cursor: pointer;
`;

export const RightChevron = styled(FiChevronRight)`
  cursor: pointer;
`;

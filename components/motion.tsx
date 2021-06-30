import {
  Box,
  BoxProps,
  Grid,
  GridProps,
  GridItem,
  GridItemProps,
  Button,
  ButtonProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionButton = motion<ButtonProps>(Button);
export const MotionBox = motion<BoxProps>(Box);
export const MotionGrid = motion<GridProps>(Grid);
export const MotionGridItem = motion<GridItemProps>(GridItem);

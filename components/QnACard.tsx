import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useAnimate } from "hooks";
import React, { FC } from "react";

interface QnACardProps {
  justifyContent: string;
  animation: string;
  title: string;
  description: string;
  color: string;
  colorDark: string;
}

const QnACard: FC<QnACardProps> = ({
  justifyContent,
  animation,
  title,
  description,
  color,
  colorDark,
}) => {
  const { isAnimated, dom } = useAnimate();

  const { colorMode } = useColorMode();

  return (
    <Flex
      ref={dom}
      w="60%"
      justifyContent={justifyContent}
      className={isAnimated ? "animate__animated animate__" + animation : ""}
    >
      <Flex
        w={["full", "full", "100%"]}
        rounded="2xl"
        m={2}
        px={16}
        py={4}
        justifyContent="center"
        flexDir="column"
        shadow="lg"
      >
        <Text fontSize={["md", "md", "1xl"]} fontWeight="bold">
          {title}
        </Text>
        <Text mt={2} fontSize={["xs", "xs", "md"]}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default QnACard;
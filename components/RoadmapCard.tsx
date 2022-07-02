import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useAnimate } from "hooks";
import React, { FC } from "react";

interface RoadmapCardProps {
  justifyContent: string;
  animation: string;
  title: string;
  description: string;
}

const RoadmapCard: FC<RoadmapCardProps> = ({
  justifyContent,
  animation,
  title,
  description,
}) => {
  const { isAnimated, dom } = useAnimate();

  const { colorMode } = useColorMode();

  return (
    <Flex
      ref={dom}
      w="80%"
      justifyContent={justifyContent}
      className={isAnimated ? "animate__animated animate__" + animation : ""}
    >
      <Flex
        w={["full", "full", "50%"]}
        bgGradient={
          colorMode === "light"
            ? `linear(to-b, yellow.100, yellow.200, yellow.300, yellow.400)`
            : `linear(to-b, purple.300, purple.500, purple.700, purple.900)`
        }
        rounded="2xl"
        m={2}
        px={16}
        py={4}
        justifyContent="center"
        flexDir="column"
        shadow="lg"
      >
        <Text fontSize={["md", "md", "2xl"]} fontWeight="bold">
          {title}
        </Text>
        <Text mt={2} fontSize={["xs", "xs", "md"]}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RoadmapCard;

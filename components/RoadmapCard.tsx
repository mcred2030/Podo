import { Box, Flex, Text, Image, useColorMode } from "@chakra-ui/react";
import { useAnimate } from "hooks";
import React, { FC } from "react";

interface RoadmapCardProps {
  justifyContent: string;
  animation: string;
  title: string;
  description: string;
  color: string;
  colorDark: string;
  images: string;
}

const RoadmapCard: FC<RoadmapCardProps> = ({
  justifyContent,
  animation,
  title,
  description,
  color,
  colorDark,
  images
}) => {
  const { isAnimated, dom } = useAnimate();

  const { colorMode } = useColorMode();

  return (
    <Flex
      ref={dom}
      w="100%"
      justifyContent={justifyContent}
      maxW={"1024px"}
      className={isAnimated ? "animate__animated animate__" + animation : ""}
    >
      <Flex
        w={["full", "full", "100%"]}
        m={2}
        px={16}
        py={4}
        justifyContent="center"
        flexDir="column"
      >
        
        <Image
            src={`../images/${images}`}
            borderRadius="2xl"
            alt="roadmap"
          />
        
      </Flex>
    </Flex>
  );
};

export default RoadmapCard;

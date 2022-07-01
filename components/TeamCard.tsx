import { Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import "animate.css";
import { useAnimate } from "hooks";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  color: string;
}

const TeamCard: FC<TeamCardProps> = ({ name, position, image, color }) => {
  const { colorMode } = useColorMode();

  const { isAnimated, dom } = useAnimate();

  return (
    <Flex
      m={8}
      className={`${isAnimated && "animate__animated animate__tada"}`}
      ref={dom}
      bgGradient={
        colorMode === "light"
          ? `linear(to-b, ${color}.500, ${color}.400, ${color}.300, ${color}.200)`
          : `linear(to-b, ${color}.100, ${color}.300, ${color}.500, ${color}.700)`
      }
      w={250}
      h={350}
      rounded="xl"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      shadow="lg"
    >
      <Image src={`images/${image}.png`} w={175} rounded="full" />
      <Text mt={4} fontSize="4xl">
        {name}
      </Text>
      <Text mt={2} fontSize="2xl" fontWeight="bold">
        {position}
      </Text>
    </Flex>
  );
};

export default TeamCard;

import { Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import "animate.css";
import { useAnimate } from "hooks";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  color: string;
  animation: string;
}

const TeamCard: FC<TeamCardProps> = ({
  name,
  position,
  image,
  color,
  animation,
}) => {
  const { colorMode } = useColorMode();

  const { isAnimated, dom } = useAnimate();

  return (
    <Flex
      m={[8, 8, 8, 4]}
      className={`${isAnimated && "animate__animated animate__" + animation}`}
      ref={dom}
      w={180}
      py={6}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Image src={`../images/${image}`} w={175} alt="team" />
    </Flex>
  );
};

export default TeamCard;

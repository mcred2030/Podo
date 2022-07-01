import { Box, Flex, Image } from "@chakra-ui/react";
import { useAnimate } from "hooks";
import { FC } from "react";

const Title: FC = () => {
  const { isAnimated, dom } = useAnimate();

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      id="Title"
      mx={8}
    >
      <Box
        className={`${isAnimated && "animate__animated animate__fadeIn"}`}
        ref={dom}
      >
        <Image src="images/projectlion.png" />
      </Box>
    </Flex>
  );
};

export default Title;

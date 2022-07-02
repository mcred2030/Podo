import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Title: FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Flex
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      id="Title"
      px={4}
      w="full"
    >
      <Box></Box>
      <Box position="relative">
        <Image
          src="images/projectlion.png"
          position="absolute"
          opacity={isHover ? 0 : 1}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        <Image src="images/projectlion.gif" />
      </Box>
      <ScrollLink to="Story" spy={true} smooth={true}>
        <Button
          variant="ghost"
          fontSize="4xl"
          mb={8}
          className="animate__animated animate__heartBeat animate__infinite"
        >
          ↓
        </Button>
      </ScrollLink>
    </Flex>
  );
};

export default Title;

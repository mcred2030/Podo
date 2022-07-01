import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      py="4"
      bgColor={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Text fontSize="sm">
        Team ProjectLion NFT | 443, Teheran-ro, Gangnam-gu, Seoul, Republic of
        Korea | E-Mail h662@olbm.app
      </Text>
      <Text fontSize="xs" mt={1}>
        COPYRIGHT &copy; Team ProjectLion NFT. ALL RIGHT RESERVED
      </Text>
    </Flex>
  );
};

export default Footer;

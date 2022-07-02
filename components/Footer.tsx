import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p={[4, 4, 2]}
      bgColor={colorMode === "light" ? "gray.100" : "gray.900"}
    >
      <Text fontSize={["xs", "xs", "sm"]}>
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

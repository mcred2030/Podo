import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Story: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      id="Story"
      flexDir={["column", "column", "row"]}
    >
      <Flex w={["full", "full%", "50%"]}>
        <Box w={["full", "full%"]} p={8}>
          <Text textAlign="center" mb={8} fontSize="4xl" fontWeight="bold">
            {t("story")}
          </Text>
          <Image src="images/lion.gif" borderRadius="2xl" />
        </Box>
      </Flex>
      <Flex
        w={["full", "full%", "50%"]}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          mx={8}
          bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
          px={4}
          py={8}
          borderRadius="2xl"
        >
          <Text>{t("storyTitle1")}</Text>
          <Text mt={2}>{t("story1")}</Text>
          <Text mt={8}>{t("storyTitle2")}</Text>
          <Text mt={2}>{t("story2")}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Story;

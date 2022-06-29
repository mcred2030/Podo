import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Story: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" id="Story">
      <Flex w="50%" minH="100vh">
        <Box w="90%" p={8}>
          <Text textAlign="center" mb={8} fontSize="4xl" fontWeight="bold">
            {t("story")}
          </Text>
          <Image src="images/lion.gif" borderRadius="2xl" />
        </Box>
      </Flex>
      <Flex w="50%" minH="100vh" justifyContent="center" alignItems="center">
        <Box
          w="90%"
          bgColor={colorMode === "light" ? "gray.100" : "gray.700"}
          minH="90vh"
          p={4}
          borderRadius="2xl"
        >
          <Text mt={8}>{t("storyTitle1")}</Text>
          <Text mt={2}>{t("story1")}</Text>
          <Text mt={8}>{t("storyTitle2")}</Text>
          <Text mt={2}>{t("story2")}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Story;

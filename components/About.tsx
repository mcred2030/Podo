import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const aboutImage = "02_About_cut.png";
const storyConfig = [
  {
    mt: 0,
    title: "storyTitle1",
    description: "story1",
  },
  {
    mt: 8,
    title: "storyTitle2",
    description: "story2",
  },
];

const About: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
   
    <Flex
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      id="About"
      px={4}
      w="full"
      >
      <Box height={20}></Box>
      <Box position="relative">
      <Image
            src={`../images/${aboutImage}`}
            borderRadius="2xl"
            alt="About"
          />
      </Box>

    </Flex>
  );
};

export default About;

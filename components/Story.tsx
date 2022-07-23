import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const storyImage = "03_Story_cut.png";
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

const Story: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
    <Flex
    alignItems="center"
      flexDir="column"
      id="Story"
      px={4}
      w="full"
      >
      <Box fontSize="6xl" fontWeight="bold" mt={4} mb={16} height="160">
        {t("")}
      </Box>
      <Box position="relative">
      <Image
            src={`../images/${storyImage}`}
            borderRadius="2xl"
            alt="Story"
          />
      </Box>

    </Flex>
  );
};

export default Story;

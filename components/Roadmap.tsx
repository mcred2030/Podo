import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import RoadmapCard from "./RoadmapCard";

// @ 로드맵에 맞게 추가, 삭제하여 작성해주시면 됩니다. 로드맵의 타이틀과 설명은 public/locales 의 json 파일을 작성 후 NextJS를 재 실행 해야 합니다.
const roadmapCardConfig = [
  {
    justifyContent: "",
    animation: "slideInLeft",
    title: "roadmapTitle1",
    description: "roadmap1",
    color: "yellow",
    colorDark: "purple",
    images: "roadmapImage1",
  },
  {
    justifyContent: "end",
    animation: "slideInRight",
    title: "roadmapTitle2",
    description: "roadmap2",
    color: "yellow",
    colorDark: "purple",
    images: "roadmapImage2",
  },
  {
    justifyContent: "",
    animation: "slideInLeft",
    title: "roadmapTitle3",
    description: "roadmap3",
    color: "yellow",
    colorDark: "purple",
    images: "roadmapImage3",
  },
];

const Roadmap: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex
      alignItems="center"
      id="Roadmap"
      flexDir="column"
      mb={24}
    >
      <Box fontSize="6xl" fontWeight="bold" mt={4} mb={16} height="160">
        {t("")}
      </Box>
      {roadmapCardConfig.map((v, i) => {
        return (
          <RoadmapCard
            key={i}
            justifyContent={v.justifyContent}
            animation={v.animation}
            title={t(v.title)}
            description={t(v.description)}
            color={v.color}
            colorDark={v.colorDark}
            images={t(v.images)}
          />
        );
      })}
    </Flex>
  );
};

export default Roadmap;

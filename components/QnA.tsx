import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import QnACard from "./QnACard";

// @ 로드맵에 맞게 추가, 삭제하여 작성해주시면 됩니다. 로드맵의 타이틀과 설명은 public/locales 의 json 파일을 작성 후 NextJS를 재 실행 해야 합니다.
const QnACardConfig = [
  {
    justifyContent: "",
    animation: "slideInLeft",
    title: "qna1",
    description: "qnare1",
    color: "yellow",
    colorDark: "purple",
  },
  {
    justifyContent: "end",
    animation: "slideInRight",
    title: "qna2",
    description: "qnare2",
    color: "yellow",
    colorDark: "purple",
  },
  {
    justifyContent: "",
    animation: "slideInLeft",
    title: "qna3",
    description: "qnare3",
    color: "yellow",
    colorDark: "purple",
  },
  {
    justifyContent: "end",
    animation: "slideInRight",
    title: "qna4",
    description: "qnare4",
    color: "yellow",
    colorDark: "purple",
  },
  {
    justifyContent: "",
    animation: "slideInLeft",
    title: "qna5",
    description: "qnare5",
    color: "yellow",
    colorDark: "purple",
  },
];

const QnA: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex
      alignItems="center"
      id="Q&A"
      flexDir="column"
      mb={24}
    >
      <Box fontSize="6xl" fontWeight="bold" mt={4} mb={16} height="160">
        {t("")}
      </Box>
      {QnACardConfig.map((v, i) => {
        return (
          <QnACard
            key={i}
            justifyContent={v.justifyContent}
            animation={v.animation}
            title={t(v.title)}
            description={t(v.description)}
            color={v.color}
            colorDark={v.colorDark}
          />
        );
      })}
    </Flex>
  );
};

export default QnA;

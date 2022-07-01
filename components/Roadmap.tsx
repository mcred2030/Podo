import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import RoadmapCard from "./RoadmapCard";

const Roadmap: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex
      minH="100vh"
      alignItems="center"
      id="Roadmap"
      flexDir="column"
      mb={24}
    >
      <Box fontSize="6xl" fontWeight="bold" mt={4} mb={16}>
        {t("roadmap")}
      </Box>
      <RoadmapCard
        justifyContent=""
        animation="slideInLeft"
        title={t("roadmapTitle1")}
        description={t("roadmap1")}
      />
      <RoadmapCard
        justifyContent="end"
        animation="slideInRight"
        title={t("roadmapTitle2")}
        description={t("roadmap2")}
      />
      <RoadmapCard
        justifyContent=""
        animation="slideInLeft"
        title={t("roadmapTitle3")}
        description={t("roadmap3")}
      />
      <RoadmapCard
        justifyContent="end"
        animation="slideInRight"
        title={t("roadmapTitle4")}
        description={t("roadmap4")}
      />
      <RoadmapCard
        justifyContent=""
        animation="slideInLeft"
        title={t("roadmapTitle5")}
        description={t("roadmap5")}
      />
      <RoadmapCard
        justifyContent="end"
        animation="slideInRight"
        title={t("roadmapTitle6")}
        description={t("roadmap6")}
      />
      <RoadmapCard
        justifyContent=""
        animation="slideInLeft"
        title={t("roadmapTitle7")}
        description={t("roadmap7")}
      />
    </Flex>
  );
};

export default Roadmap;

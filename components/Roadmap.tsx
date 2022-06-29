import { Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Roadmap: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" id="Roadmap">
      {t("roadmap")}
    </Flex>
  );
};

export default Roadmap;

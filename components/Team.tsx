import { Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Team: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" id="Team">
      {t("team")}
    </Flex>
  );
};

export default Team;

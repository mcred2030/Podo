import { Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Title: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" id="Title">
      {t("title")}
    </Flex>
  );
};

export default Title;

import { Box, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import TeamCard from "./TeamCard";

const Team: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" alignItems="center" id="Team" flexDir="column">
      <Box fontSize="6xl" fontWeight="bold" mt={4}>
        {t("team")}
      </Box>
      <Flex mt={16}>
        <TeamCard
          name="h662"
          position="Product Manager"
          image="h662"
          color="purple"
        />
        <TeamCard name="h663" position="Frontend" image="h662" color="red" />
        <TeamCard
          name="h664"
          position="Graphic Design"
          image="h662"
          color="blue"
        />
        <TeamCard
          name="h665"
          position="Smart Contract"
          image="h662"
          color="yellow"
        />
      </Flex>
    </Flex>
  );
};

export default Team;

import { Box, Flex, Grid } from "@chakra-ui/react";
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
      <Grid
        mt={16}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        <TeamCard
          name="h662"
          position="Product Manager"
          image="h662"
          color="blue"
        />
        <TeamCard name="h663" position="Frontend" image="h663" color="yellow" />
        <TeamCard
          name="h664"
          position="Graphic Design"
          image="h664"
          color="green"
        />
        <TeamCard
          name="h665"
          position="Smart Contract"
          image="h665"
          color="red"
        />
      </Grid>
    </Flex>
  );
};

export default Team;

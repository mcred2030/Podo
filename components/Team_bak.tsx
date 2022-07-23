import { Box, Flex, Grid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import TeamCard from "./TeamCard";

// @ name: 팀원 이름, position: 포지션, image: public/images에 있는 이미지 이름, color: color 이름 (모든 색상이 가능하지는 않습니다.)
const teamCardConfig = [
  {
    name: "JS Park",
    position: "Product Manager",
    image: "team1.png",
    color: "blue",
    animation: "tada",
  },
  {
    name: "DN Choi",
    position: "Marketing",
    image: "team3.png",
    color: "green",
    animation: "tada",
  },
  {
    name: "WJ Jeon",
    position: "Graphic Design",
    image: "team2.png",
    color: "yellow",
    animation: "tada",
  },
  {
    name: "JH Lee",
    position: "Brand Design",
    image: "team3.png",
    color: "purple",
    animation: "tada",
  },
  
  {
    name: "BR Song",
    position: "Smart Contract",
    image: "team4.png",
    color: "red",
    animation: "tada",
  },
];

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
          "repeat(5, 1fr)",
        ]}
      >
        {teamCardConfig.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              image={v.image}
              color={v.color}
              animation={v.animation}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Team;

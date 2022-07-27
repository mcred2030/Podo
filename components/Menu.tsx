import { FC } from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
const logo = "logo_podo.png";

const logoImage = "logo01.png";
const logoImageDark = "logo01.png";
const openseaURL = "https://testnets.opensea.io/collection/projectlion-nft";
const discordURL = "https://discord.gg/fndEYmt7";
const instagramURL = "https://www.instagram.com/projectlion.io/";

const Menu: FC = () => {
  const scrollLink = ["About","Story", "Roadmap", "Team", "Q&A"];

  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      w="100%"
      top="65px"
      justifyContent="space-between"
      alignItems="center"
      flexDir={["column", "column"]}
      px={4}
      minH="10vh"
      zIndex={1}
      bgColor="white"
      height={"100px"}
      paddingTop={"40px"}
      paddingBottom={"150px"}
      >
     
     <Box position="relative">
     <Link href="/">
        <Image
            src={`../images/${logo}`}
            alt="logo"
            w={110} 
          />
        </Link>
      
      </Box>

      <Box >
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v} spy={true} smooth={true}>
              <Button variant="ghost" mx={[0, 0, 8]} size={["xs", "sm", "md"]}>
                {v}
              </Button>
            </ScrollLink>
          );
        })}
      </Box>

      
    </Flex>
  );
};

export default Menu;

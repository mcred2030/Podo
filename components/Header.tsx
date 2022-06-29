import { FC } from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex, Image, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header: FC = () => {
  const scrollLink = ["Story", "Roadmap", "Team"];

  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      w="100%"
      top="0"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      shadow="md"
    >
      <Box fontWeight="bold" fontSize="lg" cursor="pointer">
        <Link href="/">
          <Image
            w={200}
            src={
              colorMode === "light"
                ? "images/logo_black.png"
                : "images/logo_white.png"
            }
            alt="ProjectLion NFT"
          />
        </Link>
      </Box>
      <Box>
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v} spy={true} smooth="true">
              <Button variant="ghost" mx={8}>
                {v}
              </Button>
            </ScrollLink>
          );
        })}
      </Box>
      <Flex alignItems="center">
        <Link href="https://discord.gg/JV4whBWNPs">
          <Button variant="ghost" size="sm">
            <FaDiscord size={24} />
          </Button>
        </Link>
        <Link href="https://www.instagram.com/projectlion.io/">
          <Button variant="ghost" size="sm">
            <FaInstagram size={24} />
          </Button>
        </Link>
        <Box onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Button variant="ghost" size="sm">
              <IoMoon size={24} />
            </Button>
          ) : (
            <Button variant="ghost" size="sm">
              <IoSunny size={24} />
            </Button>
          )}
        </Box>
        <Box>
          <Link
            href={router.asPath}
            locale={router.locale === "en" ? "ko" : "en"}
          >
            <Button variant="ghost" size="sm">
              {router.locale === "en" ? "EN" : "KO"}
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;

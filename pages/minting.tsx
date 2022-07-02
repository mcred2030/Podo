import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { MINT_NFT_ADDRESS } from "caverConfig";
import { useCaver } from "hooks";
import { NextPage } from "next";
import { useState } from "react";

const Minting: NextPage = () => {
  const [account, setAccount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newNFT, setNewNFT] = useState<any>(undefined);

  const { caver, mintNFTContract } = useCaver();

  const { colorMode } = useColorMode();

  const onClickKaikas = async () => {
    try {
      const accounts = await window.klaytn.enable();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMint = async () => {
    try {
      // const response = await mintNFTContract?.methods.mintNFT().send({
      //   from: account,
      //   value: caver?.utils.convertToPeb(2, "KLAY"),
      //   gas: 3000000,
      // });

      setIsLoading(true);

      const response = await caver?.klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: account,
        to: MINT_NFT_ADDRESS,
        value: caver.utils.convertToPeb(2, "KLAY"),
        gas: 3000000,
        data: mintNFTContract?.methods.mintNFT().encodeABI(),
      });

      if (response?.status) {
        const balanceOf = await mintNFTContract?.methods
          .balanceOf(account)
          .call();

        if (balanceOf) {
          const myNewNFT = await mintNFTContract?.methods
            .tokenOfOwnerByIndex(account, balanceOf - 1)
            .call();

          if (myNewNFT) {
            const tokenURI = await mintNFTContract?.methods
              .tokenURI(myNewNFT)
              .call();

            if (tokenURI) {
              const imageResponse = await axios.get(tokenURI);

              if (imageResponse.statusText === "OK") {
                setNewNFT(imageResponse.data);
              }
            }
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      flexDir="column"
    >
      {account === "" ? (
        <Button onClick={onClickKaikas} size="lg" colorScheme="orange">
          <Image
            src={
              colorMode === "light"
                ? "images/kaikas-white.png"
                : "images/kaikas.png"
            }
            w={8}
            mr={2}
          />
          Connect to Kaikas
        </Button>
      ) : (
        <Flex>
          <Button fontSize="2xl" colorScheme="orange" variant="ghost">
            Account - {account}
          </Button>
          <Button onClick={() => setAccount("")} colorScheme="orange">
            Disconnect
          </Button>
        </Flex>
      )}
      <Flex mt="8">
        <Flex
          justifyContent="center"
          alignItems="center"
          w={512}
          h={512}
          border="2px"
          borderColor={colorMode === "light" ? "gray.300" : "gray.500"}
          borderRadius="lg"
        >
          {newNFT ? (
            <Image src={newNFT.image} borderRadius="lg" />
          ) : (
            <Box>ProjectLion NFT</Box>
          )}
        </Flex>
        <Flex ml={8} direction="column" minH={512} minW={300}>
          <Text>Price : 2 Klay</Text>
          <Button
            size="lg"
            colorScheme="green"
            onClick={onClickMint}
            disabled={account === "" || isLoading}
            isLoading={isLoading}
            loadingText="Loading ..."
          >
            Minting
          </Button>
          {newNFT && (
            <>
              <Text fontSize="xl" mt={4}>
                Name : {newNFT.name}
              </Text>
              <Text fontSize="xl" mt={4}>
                Description : {newNFT.description}
              </Text>
              <Text fontSize="xl" mt={4}>
                Attributes
              </Text>
              {newNFT.attributes.map((v: any, i: number) => {
                return (
                  <Text key={i} mt={2}>
                    {v.trait_type} : {v.value}
                  </Text>
                );
              })}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Minting;

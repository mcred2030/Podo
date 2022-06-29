import Caver, { Contract } from "caver-js";
import { MINT_NFT_ABI, MINT_NFT_ADDRESS } from "caverConfig";
import { useEffect, useState } from "react";

export const useAccount = () => {
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    try {
      const accounts = await window.klaytn.enable();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (window.klaytn) {
      getAccount();
    }
  }, []);

  return { account };
};

export const useCaver = () => {
  const [caver, setCaver] = useState<Caver | undefined>(undefined);
  const [mintNFTContract, setmintNFTContract] = useState<Contract | undefined>(
    undefined
  );

  useEffect(() => {
    if (window.klaytn) {
      setCaver(new Caver(window.klaytn));
    }
  }, []);

  useEffect(() => {
    if (!caver) return;

    setmintNFTContract(caver.contract.create(MINT_NFT_ABI, MINT_NFT_ADDRESS));
  }, [caver]);

  return { caver, mintNFTContract };
};

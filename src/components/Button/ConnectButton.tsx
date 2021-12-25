import { useEffect, useMemo, useState } from "react";

import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { Button } from "@chakra-ui/react";
import Address from "../custom/Address";

const sdk = new ThirdwebSDK("rinkeby");

function ConnectButton() {
  const {
    connectWallet,
    disconnectWallet,
    connector,
    address,
    error,
    provider,
  } = useWeb3();

  const signer = provider ? provider.getSigner() : undefined;

  if (!address) {
    return <Button onClick={() => connectWallet("injected")}>Connect</Button>;
  }

  return <Address />;
}

export default ConnectButton;

import { useWeb3 } from "@3rdweb/hooks";
import {
  Button,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import { MdCheckCircle, MdContentCopy } from "react-icons/md";

import useCustomColor from "hooks/useCustomColor";

// A fancy function to shorten someones wallet address, no need to show the whole thing.
const shortenAddress = (str: string) => {
  return `${str.substring(0, 6)}...${str.substring(str.length - 4)}`;
};

const AddressModal = (props: any) => {
  const { isOpen, onClose, coloredText } = props;
  const { address, disconnectWallet } = useWeb3();
  const { hasCopied, onCopy } = useClipboard(address || "");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Connected with MetaMask
          <Text textStyle="small" color={coloredText}>
            You can copy the address or view on explorer
          </Text>
          <HStack
            my="8"
            layerStyle="solid-card"
            py="1"
            px="2"
            justify="space-between"
          >
            <Text textStyle="small"> {address && shortenAddress(address)}</Text>
            <IconButton
              size="sm"
              variant="ghost"
              onClick={onCopy}
              aria-label="Copy Address"
              icon={
                hasCopied ? (
                  <Icon color="aqua.300" as={MdCheckCircle} />
                ) : (
                  <MdContentCopy />
                )
              }
            />
          </HStack>
        </ModalBody>

        <ModalFooter>
          {/* <Button w="full" onClick={() => disconnectWallet()}>
            Log out
          </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function Address() {
  const { address } = useWeb3();

  const { hasCopied, onCopy } = useClipboard(address || "");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { coloredText } = useCustomColor();

  return (
    <HStack layerStyle="solid-card" cursor="pointer" py="1" px="4">
      <Text onClick={onOpen} textStyle="small">
        {address && shortenAddress(address)}
      </Text>
      <IconButton
        size="sm"
        variant="ghost"
        onClick={onCopy}
        aria-label="Copy Address"
        icon={
          hasCopied ? (
            <Icon color="aqua.300" as={MdCheckCircle} />
          ) : (
            <MdContentCopy />
          )
        }
      />
      <AddressModal
        isOpen={isOpen}
        onClose={onClose}
        coloredText={coloredText}
      />
    </HStack>
  );
}

export default Address;

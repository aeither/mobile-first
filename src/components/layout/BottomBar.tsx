import { IconButton, Link, HStack, Icon } from "@chakra-ui/react";
import {
  HiOutlineHome,
  HiOutlineBookmark,
  HiOutlineLightningBolt,
  HiOutlinePlusCircle,
  HiOutlineUser,
} from "react-icons/hi";
import { useRouter } from "next/router";
import NextLink from "next/link";
import useCustomColor from "../../hooks/useCustomColor";

const LinkItem = ({ href, children, ...props }: any) => {
  const { pathname } = useRouter();
  const { primaryColor } = useCustomColor();

  let isActive = false;
  if (href === pathname) {
    isActive = true;
  }

  return (
    <NextLink href={href}>
      <Link
        py="3"
        px="2"
        borderTopWidth="2px"
        borderTopColor={isActive ? primaryColor : "transparent"}
        color={isActive ? primaryColor : ""}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const LinkItems = () => {
  return (
    <>
      <LinkItem href="/">
        <Icon boxSize={6} as={HiOutlineHome} />
      </LinkItem>
      <LinkItem href="/create">
        <Icon boxSize={6} as={HiOutlineLightningBolt} />
      </LinkItem>
      <LinkItem href="/profile">
        <Icon boxSize={6} as={HiOutlinePlusCircle} />
      </LinkItem>
      <LinkItem href="/create">
        <Icon boxSize={6} as={HiOutlineBookmark} />
      </LinkItem>
      <LinkItem href="/create">
        <Icon boxSize={6} as={HiOutlineUser} />
      </LinkItem>
    </>
  );
};

function BottomBar() {
  const { getNeutralAlphaColor } = useCustomColor();

  return (
    <HStack
      display={["flex", "none", "none"]}
      w="full"
      p="2"
      right="0"
      left="0"
      bottom="0"
      position="fixed"
      // transition="all 1s"
      align="center"
      justify="center"
      zIndex="sticky"
    >
      <HStack
        px="4"
        w="xs"
        // py="1"
        boxShadow="full"
        borderRadius="full"
        bg={getNeutralAlphaColor}
        border="1px solid rgba( 50, 50, 50, 0.75 )"
        backdropFilter="blur(10px)"
        justify="space-around"
      >
        <LinkItems />
      </HStack>
    </HStack>
  );
}

export default BottomBar;

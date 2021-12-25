import { Box, SimpleGrid, VStack, HStack, Text, Icon } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { HiOutlineChevronRight } from "react-icons/hi";

import Swiper from "../components/Swiper";
import Quest from "../components/Quest";
const Home = () => {
  return (
    <VStack>
      <Marquee pauseOnHover gradientColor={[20, 26, 30]}>
        Here you can learn, earn and connect among friends in the community.{" "}
      </Marquee>
      <SimpleGrid
        padding={[4, 8, 16]}
        w="full"
        columns={2}
        spacingX="20px"
        spacingY="20px"
      >
        <Box
          layerStyle="solid-hover3"
          py="4"
          textAlign="center"
          bg="tomato"
          w="full"
        >
          Guide 1
        </Box>
        <Box
          layerStyle="solid-hover3"
          py="4"
          textAlign="center"
          bg="tomato"
          w="full"
        >
          Guide 2
        </Box>
        <Box
          layerStyle="solid-hover3"
          py="4"
          textAlign="center"
          bg="tomato"
          w="full"
        >
          Community
        </Box>
        <Box
          layerStyle="solid-hover3"
          py="4"
          textAlign="center"
          bg="tomato"
          w="full"
        >
          Blog
        </Box>
      </SimpleGrid>
      <HStack padding={[4, 8, 16]} py="4" w="full" justify="space-between">
        <Text textStyle="h1" fontWeight="Bold">
          Projects
        </Text>
        <Icon boxSize={8} as={HiOutlineChevronRight} />
      </HStack>

      <HStack w="full">
        <Swiper />
      </HStack>

      <HStack padding={[4, 8, 16]} py="4" w="full" justify="space-between">
        <Text textStyle="h1" fontWeight="Bold">
          Quests
        </Text>
        <Icon boxSize={8} as={HiOutlineChevronRight} />
      </HStack>

      <VStack w="full" spacing={4}>
        <Quest />
        <Quest />
        <Quest />
        <Quest />
      </VStack>
    </VStack>
  );
};

export default Home;

// https://api.coingecko.com/api/v3/coins/defipulse-index/market_chart?vs_currency=usd&days=90

// https://api.coingecko.com/api/v3/coins/defipulse-index/history?date=30-07-2021'

// market_data.current_price.usd

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { VStack, Image, Text, Box } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import useCustomColor from "../hooks/useCustomColor";

SwiperCore.use([FreeMode, Pagination]);

export default () => {
  const { coloredText } = useCustomColor();
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      freeMode
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3].map((el) => {
        return (
          <SwiperSlide>
            <VStack
              align="start"
              marginX={[4, 8, 16]}
              layerStyle="solid-card"
              w="full"
              p="4"
            >
              <Image src="https://bit.ly/dan-abramov" />
              <Box w="150px">
                <Text textStyle="h2" isTruncated>
                  Tezos
                </Text>
                <Text textColor={coloredText}>23 Members</Text>
              </Box>
            </VStack>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

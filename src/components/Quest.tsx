import { Box, Tag, HStack, Image, VStack, Text } from "@chakra-ui/react";
import useCustomColor from "../hooks/useCustomColor";

function Quest() {
  const { coloredText } = useCustomColor();

  return (
    <Box paddingX={[4, 8, 16]} w="full">
      <HStack w="full">
        <Image
          borderRadius="lg"
          boxSize={16}
          src="https://bit.ly/dan-abramov"
        />
        <VStack px="2" w="full" align="start">
          <Text textColor={coloredText}>Tezos</Text>
          <Text textStyle="h2">Discover how to X asdfasdf</Text>
        </VStack>
        <VStack align="end">
          <Tag colorScheme="red" borderRadius="full">
            Sample
          </Tag>
          <Text textColor={coloredText}>12.12.21</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Quest;

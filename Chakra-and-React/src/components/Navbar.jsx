import {
  Box,
  Image,
  Text,
  // ButtonGroup,
  Container,
  // Flex,
  HStack,
  // IconButton,
  // useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
// import { FiMenu } from "react-icons/fi";

function Navbar() {
  const data = {
    imageUrl: Logo,
  };
  return (
    <>
      <Box
        as="section"
        pb={{
          base: "12",
          md: "24",
        }}
      >
        <Box as="nav" bg="bg.surface" boxShadow="sm">
          <Box maxW="sm" borderWidth="2px" borderRadius="lg" m="auto" mt="20">
          <Image  m="auto" src={data.imageUrl}> </Image>

          </Box>


          <Text>hiiii</Text>
          <Container
            py={{
              base: "4",
              lg: "5",
            }}
          >
            <HStack spacing="10" justify="space-between"></HStack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;

import { Box, Text, Image } from "@chakra-ui/react";
import "./App.css";
import Image2 from "./assets/logo.png";
import Navbar from "./components/Navbar";
function App() {
  const data = {
    imageUrl: Image2,
    imageALT: "test",
    title: "test",
  };

  return (
    <>
      {/*  حاولت والله بس جتني مشكلة وما قدرت أحلها  */}
      <Navbar></Navbar>
      <Box maxW="sm" borderWidth="2px" borderRadius="lg" m="auto" mt="20">
        <Image m="auto" src={data.imageUrl}></Image>
        <Box borderRadius="lg" m="auto" p="4" bg="gray.400" boxShadow="lg">
          <Text mt="1" dir="rtl" fontWeight="bold">
            {data.title}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default App;

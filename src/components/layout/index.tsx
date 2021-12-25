import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import BottomBar from "components/layout/BottomBar";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box margin="0 auto" maxWidth="7xl" transition="0.5s ease-out">
        {/* <Box margin={[4, 8, 16]}> */}
        <Box as="main">{children}</Box>
        <BottomBar />
        <Footer />
      </Box>
      {/* </Box> */}
    </>
  );
};

export default Layout;

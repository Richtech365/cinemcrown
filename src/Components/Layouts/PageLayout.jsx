import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../SideBar/SideBar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Flex>
        {/* SideBar */}
        {pathname !== "/auth" ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <SideBar />
          </Box>
        ) : null}
        {/* Movie Content */}{" "}
        <Box
          flex={1}
          w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;

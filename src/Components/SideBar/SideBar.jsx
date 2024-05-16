import { Box, Tooltip } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Flex, Img, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { CgLogOut } from "react-icons/cg";

const SideBar = () => {
  const sidebar = [
    {
      icon: <FaHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <FaRegHeart size={25} />,
      text: "Favorite",
      link: "/",
    },
    {
      icon: <FiTrendingUp size={25} />,
      text: "Trending",
      link: "/",
    },
    {
      icon: <CiCalendarDate size={25} />,
      text: "Comming Soon",
      link: "/",
    },
    {
      icon: <RiTeamLine size={25} />,
      text: "Community",
      link: "/",
    },
    {
      icon: <BiMessageRoundedDots size={25} />,
      text: "Social ",
      link: "/",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={0} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={0}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <Img src="/public/full-logo.png" />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={1}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <Img src="/public/half-logo.png" />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebar.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "base", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>{" "}
        <Box mt={"auto"}>
          <Tooltip
            hasArrow
            label={"settings"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              to={"/"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <VscSettings />
              <Box display={{ base: "none", md: "block" }}>Settings</Box>
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label={"Logout"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "base", md: "none" }}
          >
            <Link
              display={"flex"}
              to={"/"}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <CgLogOut />

              <Box display={{ base: "none", md: "block" }}>Log Out</Box>
            </Link>
          </Tooltip>
        </Box>
      </Flex>{" "}
    </Box>
  );
};

export default SideBar;

import { Avatar, Flex, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";

export const NavBar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <div
        className={`top-0 z-10 fixed p-1 rounded-lg w-full h-16 ${
          show ? "bg-slate-900" : "bg-transparent"
        }`}
        style={{ textDecoration: "none" }}
      >
        <Flex alignContent={""} justify={"space-between"}>
          <Flex
            justify={"flex-start"}
            mb={5}
            className="text-2xl"
            cursor={"pointer"}
          >
            <Flex mr={2}>
              <Link>Movies</Link>
            </Flex>
            <Flex mr={2}>
              <Link>Series</Link>
            </Flex>
            <Flex mr={2}>
              <Link>Documentation</Link>
            </Flex>
          </Flex>
          <Flex
            right={4}
            position={"fixed"}
            cursor={"pointer"}
            justify={"space-between"}
            top={0}
            paddingY={1}
          >
            <GoSearch
              size={28}
              style={{ marginRight: "10px", marginTop: "5px" }}
            />
            <IoMdNotificationsOutline
              size={28}
              style={{ marginRight: "10px", marginTop: "5px" }}
            />
            <Avatar mb={5} w={8} h={8} src="/public/profilepic.png" />
          </Flex>
        </Flex>
      </div>
    </>
  );
};

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"13px"}>
      <Image src={logo} boxSize="50px" borderRadius={"10px"}></Image>
      {/* <Text>Navbar</Text> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

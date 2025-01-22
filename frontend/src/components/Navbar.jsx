import { Button } from "@/components/ui/button"
import { Container, Flex, Text, HStack, Icon} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { CiSquarePlus } from "react-icons/ci";
import {useColorMode} from "@/components/ui/color-mode.jsx";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
            h={16}
            alignItems="center"
            justifyContent="space-between"
            flexDir={{
                base: "column",
                sm: "row"
            }}
            >
                <Text
                    fontSize={{ base: "22px", sm: "28px"}}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                    bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
                    bgClip="text"
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>

                <HStack gap={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button variant="ghost">
                            <Icon>
                                <CiSquarePlus/>
                            </Icon>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode} variant="ghost">
                        {colorMode === "light" ? <IoMoon /> : <IoSunnyOutline />}
                    </Button>

                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar;
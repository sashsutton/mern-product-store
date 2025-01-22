import {useState} from "react";
import { Container, VStack, Heading, Box, Input} from "@chakra-ui/react"
import {useColorModeValue} from "@/components/ui/color-mode.jsx";
import { Button } from "@/components/ui/button"
import { useProductStore } from "../store/product.js"
import {toaster } from "@/components/ui/toaster"

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    const {createProduct} = useProductStore();
    const handleAddProduct = async () => {
       const {success, message} = await createProduct(newProduct);
       if (!success) {
           toaster.create({
               "title": "Error",
               "description": message,
               status: "error",
               isClosable: true
           })
       } else{
           toaster.create({
               "title": "Success",
               "description": message,
               status: "success",
               isClosable: true
           })
       }
       setNewProduct({name: "", price: "",image: ""});

    };
    return (
        <Container maxW={"sm"}>
            <VStack gap="8">
                <Heading as="h1" size="2xl" textAlign="center" mb={8} >
                    Create new Product
                </Heading>
                <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack gap={4}>
                        <Input placeholder='Product Name'
                               name='name'
                               value={newProduct.name}
                               onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input
                        placeholder='Product Price'
                        name='price'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
                        <Input
                            placeholder='Product Image'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
                        <Button colorPalette='blue' onClick={handleAddProduct} w='full'>
                            Add Product
                        </Button>
                    </VStack>

                </Box>

            </VStack>

        </Container>
    )
}

export default CreatePage;
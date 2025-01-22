import {Box, Heading, HStack, Text, Image, IconButton, Input, Stack} from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {useColorModeValue} from "@/components/ui/color-mode.jsx";
import {useProductStore} from "@/store/product.js";
import {toaster} from "@/components/ui/toaster.jsx";
import {
    DialogActionTrigger,
    DialogBody,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    DialogCloseTrigger
} from "@/components/ui/dialog"
import { useState } from "react";
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button"



const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct, updateProduct} = useProductStore();

    const handleDeleteProduct = async (pid) => {
       const {success, message} = await deleteProduct(pid);

       if (!success) {
           toaster.create({
               title: "Error",
               description: message,
               status: "error",
               duration: 3000,
               isClosable: true
           })
       } else{
           toaster.create({
               title: "Success",
               description: message,
               status: "success",
               duration: 3000,
               isClosable: true
           })
       }
    }
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        if (!success) {
            toaster.create({
                title: "Error",
                description: m,
                status: "error",
                duration: 3000,
                isClosable: true
            });
        } else{
            toaster.create({
                title: "Success",
                description: "Product updated successfully",
                status: "success",
                duration: 3000,
                isClosable: true
            });
        }
    };
    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{transform: "translateY(-5px)", shadow: "xl"}}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={"48"} w="full" objectFit="cover" />
            <Box p={4} >
                <Heading as="h3" size="md" mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
                    £{product.price}
                </Text>

                <HStack gap={2}>

                    <DialogRoot>
                        <DialogTrigger asChild >
                            <Button variant="outline" colorPalette="blue">
                                <FaEdit />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Update Product
                                </DialogTitle>
                            </DialogHeader>
                            <DialogBody pb="4">
                                <Stack gap={4}>
                                    <Field label="Product Name">
                                        <Input
                                            placeholder='Product Name'
                                            name='name'
                                            value={updatedProduct.name}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                        />
                                    </Field>
                                    <Field label="Price">
                                        <Input
                                            placeholder='Price'
                                            name='price'
                                            type='number'
                                            value={updatedProduct.price}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                        />
                                    </Field>
                                    <Field label="Image URL">
                                        <Input
                                            placeholder='Image URL'
                                            name='image'
                                            value={updatedProduct.image}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                        />
                                    </Field>
                                </Stack>
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                                <DialogActionTrigger asChild>
                                    <Button colorPalette="blue" mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)} >Update</Button>
                                </DialogActionTrigger>

                            </DialogFooter>
                        </DialogContent>
                    </DialogRoot>

                    <IconButton colorPalette="red" onClick={() => handleDeleteProduct(product._id)}>
                        <MdDeleteForever />
                    </IconButton>

                </HStack>
            </Box>

        </Box>
    )
};

export default ProductCard;
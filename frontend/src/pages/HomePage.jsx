import { Container, VStack, Text, SimpleGrid} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react";
import {useProductStore} from "@/store/product.js";
import ProductCard from "@/components/ProductCard.jsx";

const HomePage = () => {
    const {fetchProducts, products} = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    console.log("products:",products);

    return (
        <Container
        maxW={'xl'} py={12}>
            <VStack gap={8}>
                <Text
                fontSize="30px"
                fontWeight="bold"
                bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
                bgClip="text"
                textAlign="center">
                    Current Products 🚀
                </Text>

                <SimpleGrid columns={[1,2,3]} gap={10} w="full" >
                    {products.map((product) => (
                        <ProductCard  key={product._id} product={product}/>
                    ))}
                </SimpleGrid>

                <Text
                    fontSize="xl"
                    textAlign="center"
                    fontWeight="bold"
                    color="gray.500"
                >
                    No products found 😢{" "}
                    <Link to={"/create"}>
                        <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
                            Create Product
                        </Text>
                    </Link>
                </Text>
            </VStack>
        </Container>
    )
}

export default HomePage;
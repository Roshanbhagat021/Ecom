import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useNavigate, Link as RouterLink, Link } from "react-router-dom";
import "../index.css";

function ProductsCard({
  id,
  image,
  category,
  rating,
  price,
  title,
  description,
}) {
  return (
    <Card maxW="sm" m={4}>
      <CardBody>
        <VStack align="stretch">
          <div className="relative  overflow-hidden">
            <Link to={`/products/${id}`}>
              <Image
                boxSize="300px"
                borderRadius={"10"}
                src={image}
                alt={title}
                className="transition-transform duration-500  transform hover:scale-110 p-6 mx-auto"
              />
            </Link>
          </div>

          <Stack mt="6" spacing="3">
            {/* Add Heading and Text tags here */}
            <Heading size="md">{title}</Heading>
            <Text
              noOfLines={1}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {description}
            </Text>

            <div className="text-blue-400 text-2xl">
              <h2>INR:{price}</h2>
            </div>
            <div className=" flex gap-2">
              <Link to={`/products/${id}`}>
                <Button onClick={() => handelDeletClick(id)} colorScheme="blue">
                  View Details
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => handelDeletClick(id)}
                colorScheme="red"
              >
                Add to Cart
              </Button>
            </div>
          </Stack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default ProductsCard;

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
import { useNavigate, Link as RouterLink } from "react-router-dom";
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
          <Image boxSize="300px" borderRadius={"10"} src={image} alt={title} />

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
              <Button onClick={() => handelDeletClick(id)} colorScheme="blue">
                View Details
              </Button>
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

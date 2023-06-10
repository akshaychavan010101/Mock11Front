import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";

function CardComp(props) {
  const { item, state } = props;
  return (
    <Card maxW="sm" border="2px solid silver" borderRadius={"7px"}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">Name : {item.name}</Heading>
          <Text>Email : {item.email}</Text>
          <Text>Destination : {item.destination}</Text>
          <Text color="blue.600" fontSize="2xl">
            Budget : {item.budget_per_person}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => {
              try {
                fetch(`http://localhost:3000/api/delete/${item._id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((res) => {
                    alert(res.msg);
                    state(true);
                  })
                  .catch((err) => console.log(err));
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardComp;

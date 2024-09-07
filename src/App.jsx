import { useState } from "react";
import { useApp } from "./ThemedApp";
import { Box, Container, Typography } from "@mui/material";

import Header from "./components/Header";
import Form from "./components/Form";
import Item from "./components/Item";

export default function App() {
  const { showForm } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data.length > 0 ? data[0].id + 1 : 1;
    setData([{ id, content, name }, ...data]);
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}
        {data.length === 0 ? (
          <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>
            No items yet. Add something!
          </Typography>
        ) : (
          data.map((item) => (
            <Item key={item.id} item={item} remove={remove} />
          ))
        )}
      </Container>
    </Box>
  );
}

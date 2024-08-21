import List from "./List";
import Item from "./Item";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>React</h1>
      <List>
        <Item content="Hello, World!" name="Kyaw Min Htway" />
        <Item content="React is fun." name="Bob" />
      </List>
    </div>
  );
}
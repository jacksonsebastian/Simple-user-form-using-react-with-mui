import "./App.css";
import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import FormSide from "./components/FormSide/FormSide";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl">
      <Stack margin="1% 2% 0" spacing={3}>
        <Header />
        <FormSide />
      </Stack>
    </Container>
  );
}

export default App;

import { ThemeProvider } from "@mui/material";
import "./App.css";
import { useAtom } from "jotai";
import { isDarkModeAtom } from "./services/UiService";
import { lightTheme, darkTheme } from "./themes/MainTheme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";

function App() {
  const [darkMode] = useAtom(isDarkModeAtom);
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

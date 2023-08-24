import { IconButton, Typography, Box } from "@mui/material";
import { alpha } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { useTheme } from "./themeContext";

const Card = ({ pokemon, loading, infoPokemon }) => {
  const { darkMode } = useTheme();
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333" : "#f5f5f5",
      },
      border: {
        default: darkMode ? "solid 5px #747474" : "solid 5px #333",
      },
      text: {
        primary: darkMode ? "#fff" : "#333",
      },
    },
  });
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
            >
              <IconButton sx={{ borderRadius: 100 }}>
                <Box
                  sx={{
                    height: "150px",
                    width: "150px",
                    backgroundColor: "#a51b13",
                    border: theme.palette.border.default,
                    // border: "solid 5px #333",
                    display: "flex",
                    borderRadius: "100px",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={item.id}
                  onClick={() => infoPokemon(item)}
                >
                  <Box
                    sx={{
                      height: "150px",
                      width: "150px",
                      backgroundColor: alpha("#fff", 0.1),
                      position: "absolute",
                      borderRadius: "100px",
                      zIndex: 1,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      height: "5px",
                      width: "150px",
                      position: "absolute",
                      // backgroundColor: "#333",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      height: "75px",
                      width: "150px",
                      backgroundColor: "#fffefa",
                      position: "absolute",
                      bottom: 0,
                      borderRadius: "0 0 100px 100px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      fontSize: "20px",
                      fontWeight: "900",
                      position: "absolute",
                      top: "-23%",
                      left: "-5%",
                      width: "220px",
                      display: "flex",
                      // color: "#333",
                      color: theme.palette.text.primary,
                    }}
                  >
                    <Typography
                      fontSize={"20px"}
                      sx={{ fontWeight: "500", textTransform: "uppercase" }}
                    >
                      {item.id}: {item.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ height: "140px", width: "140px", zIndex: 1 }}
                    component="img"
                    src={item.sprites.front_default}
                    alt=""
                  />
                </Box>
              </IconButton>
            </Box>
          );
        })
      )}
    </>
  );
};

export default Card;

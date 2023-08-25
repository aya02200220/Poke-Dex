import React from "react";
import { Box, Typography } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { useTheme } from "./themeContext";

const Pokeinfo = ({ data }) => {
  // console.log(data);
  const { darkMode } = useTheme();
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333" : "#f5f5f5",
      },
      backgroundType: {
        default: darkMode ? "#4b63d8" : "#b74555",
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
      {!data ? (
        <Box mt={10}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              color: theme.palette.text.primary,
            }}
          >
            Select a Pokémon
          </Typography>
        </Box>
      ) : (
        <Box sx={{ maxWidth: "80%", minWidth: "80%" }}>
          <Box
            sx={{
              ml: 2,
              mt: 0,
              mb: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "solid 1px #cac6ba",
              height: "500px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              position: "relative",
              // minWidth: "300px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                textTransform: "uppercase",
                color: theme.palette.text.primary,
                position: "absolute",
                top: 10,
              }}
            >
              <Typography
                sx={{ fontSize: "30px", width: "100%", fontWeight: "900" }}
              >
                {data.name}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "70%",
                maxWidth: "100%",
                height: "auto",
                objectFit: "scale-down",
              }}
              component="img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {data.abilities.map((item) => {
              return (
                <>
                  <Box
                    sx={{
                      // color: theme.palette.text.primary,
                      color: "#fff",
                      textTransform: "uppercase",
                      lineHeight: "14px",
                      fontWeight: "500",
                      width: "auto",
                      backgroundColor: theme.palette.backgroundType.default,
                      p: 1,
                      borderRadius: 2,
                    }}
                  >
                    <Box component={"p"} sx={{ fontSize: "14px" }}>
                      {item.ability.name}
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box mt={2} display="flex" flexDirection="row" flexWrap="wrap">
            {data.stats.map((item) => {
              return (
                <Box
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: "uppercase",
                    display: "flex",
                    width: "auto", // もしくは具体的な値
                    ml: 2,
                    flexDirection: "row",
                    mr: 1,
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: "800", lineHeight: "16px" }}>
                    {item.stat.name}
                  </Typography>
                  <Typography sx={{ fontWeight: "400", lineHeight: "16px" }}>
                    :{item.base_stat}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Pokeinfo;

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
        " "
      ) : (
        <Box
          sx={{
            mt: 4,
            mb: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // minWidth: "300px",
          }}
        >
          <Box
            // component={"h1"}
            sx={{
              width: "100%",
              textTransform: "uppercase",
              color: theme.palette.text.primary,
            }}
          >
            <Typography
              sx={{ fontSize: "30px", width: "100%", fontWeight: "900" }}
            >
              {data.name}
            </Typography>
          </Box>
          <Box
            sx={{ width: "70%", maxWidth: "100%", height: "auto" }}
            component="img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />

          <div className="abilities">
            {data.abilities.map((item) => {
              return (
                <>
                  <Box
                    className="group"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    <h2>{item.ability.name}</h2>
                  </Box>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((item) => {
              return (
                <>
                  <Box sx={{ color: theme.palette.text.primary }}>
                    {item.stat.name}:{item.base_stat}
                  </Box>
                </>
              );
            })}
          </div>
        </Box>
      )}
    </>
  );
};

export default Pokeinfo;

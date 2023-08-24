import React from "react";
import { Box } from "@mui/material";

const Pokeinfo = ({ data }) => {
  console.log(data);

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
            minWidth: "300px",
          }}
        >
          <Box component={"h1"} sx={{ textTransform: "uppercase" }}>
            {data.name}
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
                  <div className="group">
                    <h2>{item.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((item) => {
              return (
                <>
                  <h3>
                    {item.stat.name}:{item.base_stat}
                  </h3>
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

import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useMatch, useNavigate } from "@tanstack/react-location";
import { Pokemon } from "../components/Pokemon";
import pokemons from "../data/pokemons.json";

const useStyles = makeStyles({
  main__container: {
    height: "100vh",
    background: "#ECEFF1",
    color: "#546E7A",
  },
  main__header: {
    margin: 0,
    padding: "1rem",
    "& button": {
      fontWeight: 700,
      fontSize: "1.5rem",
      color: "#546E7A",
    },
  },
  main__body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",

    "& h1": {
      fontWeight: 700,
      fontSize: "2.5rem",
      margin: 0,
    },
  },
  evolutions__container: {
    //   height: "100vh",
    background: "#ECEFF1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
  },
});

export function Evolutions() {
  const classes = useStyles();
  const {
    params: { pokemonName },
  } = useMatch();
  const navigate = useNavigate();

  const onClick = (pokemonName) => {
    navigate({
      to: `/evolutions/${pokemonName}`,
      replace: true,
      fromCurrent: false,
    });
  };
  const goBack = () => {
    navigate({
      to: `/`,
      replace: true,
      fromCurrent: false,
    });
  };

  const evolutions = pokemons[pokemonName].evolutions;
  return (
    <div className={classes.main__container}>
      <header className={classes.main__header}>
        <Button onClick={() => goBack()}>
          <ArrowBackIosIcon /> Back
        </Button>
      </header>
      <section className={classes.main__body}>
        <h1>{pokemons[pokemonName].name}</h1>
        <div className={classes.evolutions__container}>
          {evolutions.map((pokemon) => (
            <Pokemon
              onClick={() => onClick(pokemon)}
              pokemon={pokemons[pokemon]}
              key={`${pokemon}-card`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

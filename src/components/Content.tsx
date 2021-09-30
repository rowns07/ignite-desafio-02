import { useEffect, useState } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentMoviesProps {
  generoSelecionado: GenreResponseProps,
  filmes: MovieProps[]
}

export function Content({ generoSelecionado, filmes }: ContentMoviesProps) {

  return (

    <div className="container">
      <header>
        <span className="category">Categoria:<span> {generoSelecionado.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {filmes.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>

  )
}
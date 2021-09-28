import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props:any) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  // const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  // useEffect(() => {
    // api.get<GenreResponseProps[]>('genres').then(response => {
      // setGenres(response.data);
    // });
    // setGenres(props.)
  // }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    console.log(selectedGenreId)
  }
  
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.generos.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}
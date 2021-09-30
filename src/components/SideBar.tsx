import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  generos: GenreResponseProps[],
  idGeneroSelecionado: number,
  handleClickButton: (id:number) => {}
}

export function SideBar({ generos, idGeneroSelecionado, handleClickButton }: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {generos.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={idGeneroSelecionado === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
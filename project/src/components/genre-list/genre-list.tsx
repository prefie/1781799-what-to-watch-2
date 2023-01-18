import { Dispatch, FC, SetStateAction } from 'react';
import { setActiveGenre } from '../../store/action';
import { Genre } from '../../types/genre.enum';
import { useAppDispatch, useAppSelector } from '../hooks/store-helpers';

type Props = {
  genres: string[];
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>;
}

export const GenreList: FC<Props> = (props) => {
  const { activeGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(setActiveGenre({ newGenre: genre as Genre }));
    props.setVisibleFilmsCount(8);
  };

  return (
    <ul className="catalog__genres-list">
      {
        props.genres.map((genre) => (
          <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
            key={genre} onClick={() => handleChangeActiveGenre(genre)}
          >
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
};
import { IPokedexSummary } from '../../api.types';
import styles from './PokeMainCard.module.scss';

/* eslint-disable-next-line */
export interface PokeMainCardProps {
  summary: IPokedexSummary;
}

export function PokeMainCard({ summary }: PokeMainCardProps) {
  return (
    <div className={styles['container']}>
      <img src={summary.ThumbnailImage} alt={summary.ThumbnailImage}></img>
      <div>#{summary.number}</div>
      <div>{summary.name}</div>
      {summary.type.map((typeName) => {
        return <div>{typeName}</div>;
      })}
    </div>
  );
}

export default PokeMainCard;

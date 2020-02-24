import React from 'react';
import isNull from 'lodash/isNull';
import styles from './Counter.module.css';

interface Props {
  name: string;
  isLoading: boolean;
  value: number | null;
}

const Counter = (props: Props) => (
  <div className={`text-center ${styles.counterWrapper}`}>
    {props.isLoading ? (
      <div className="h3"><div className="spinner-grow text-primary" /></div>
    ) : (
      <div className="h3">
        {isNull(props.value) || props.value === 0 ? '-' : props.value }
      </div>
    )}
    <small className="text-uppercase">{props.name}</small>
  </div>
);

export default Counter;
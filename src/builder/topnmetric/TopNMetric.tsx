import React from 'react';
import { QueryBuilderComponentProps } from '../abstract';
import { QueryBuilderComponentSelector } from '../abstract';
import { AlphaNumeric, Dimension, Inverted, Lexicographic, Numeric } from './';

export const TopNMetric = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    {...props}
    label="TopNMetric"
    components={{
      AlphaNumeric: AlphaNumeric,
      Dimension: Dimension,
      Inverted: Inverted,
      Lexicographic: Lexicographic,
      Numeric: Numeric,
    }}
  />
);

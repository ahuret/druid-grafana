import React from 'react';
import { QueryBuilderComponentProps } from '../abstract';
import { QueryBuilderComponentSelector } from '../abstract';
import { AlphaNumeric, Lexicographic, Numeric, StrLen, Version } from './';

export const SearchSortSpec = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    {...props}
    label="SearchSortSpec"
    components={{
      AlphaNumeric: AlphaNumeric,
      Lexicographic: Lexicographic,
      Numeric: Numeric,
      StrLen: StrLen,
      Version: Version,
    }}
  />
);

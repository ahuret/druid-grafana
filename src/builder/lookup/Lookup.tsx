import React from 'react';
import { QueryBuilderComponentProps } from '../abstract';
import { QueryBuilderComponentSelector } from '../abstract';
import { Map } from './';

export const Lookup = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector {...props} label="Lookup" components={{ Map: Map }} />
);

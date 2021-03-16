import React from 'react';
import { QueryBuilderProps, QueryBuilderComponentSelector } from '../abstract';
import { Default } from './';

export const LimitSpec = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector {...props} label="LimitSpec" components={{ Default: Default }} />
);

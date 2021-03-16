import React from 'react';
import { QueryBuilderComponentProps } from '../abstract';
import { QueryBuilderComponentSelector } from '../abstract';
import { Expression } from './';

export const VirtualColumn = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector {...props} label="VirtualColumn" components={{ Expression: Expression }} />
);

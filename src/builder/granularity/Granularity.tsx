import React from 'react';
import { QueryBuilderComponentProps } from '../abstract';
import { QueryBuilderComponentSelector } from '../abstract';
import { Duration, Period, Simple } from './';

export const Granularity = (props: QueryBuilderProps) => (
  <QueryBuilderComponentSelector
    {...props}
    label="Granularity"
    components={{ Duration: Duration, Period: Period, Simple: Simple }}
  />
);

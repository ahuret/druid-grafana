import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Select } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Simple = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Simple);
  return (
    <InlineFieldRow>
      <Select
        {...scopedProps(undefined)}
        label="Granularity"
        description="Specifies the granularity to use to bucket timestamps"
        entries={{
          all: 'All',
          none: 'None',
          second: 'Second',
          minute: 'Minute',
          fifteen_minute: 'Fifteen minutes',
          thirty_minute: 'Thirty minutes',
          hour: 'Hour',
          day: 'Day',
          week: 'Week',
          month: 'Month',
          quarter: 'Quarter',
          year: 'Year',
        }}
      />
    </InlineFieldRow>
  );
};
Simple.type = 'simple';
Simple.fields = [];

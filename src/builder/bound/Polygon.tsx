import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Polygon = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Polygon);
  return (
    <InlineFieldRow>
      <Input
        {...scopedProps('abscissa')}
        label="Abscissa"
        description="Horizontal coordinate for corners of the polygon"
        type="number"
      />
      <Input
        {...scopedProps('ordinate')}
        label="Ordinate"
        description="Vertical coordinate for corners of the polygon"
        type="number"
      />
    </InlineFieldRow>
  );
};
Polygon.type = 'polygon';
Polygon.fields = ['abscissa', 'ordinate'];

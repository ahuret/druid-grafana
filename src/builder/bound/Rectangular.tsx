import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Rectangular = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Rectangular);
  return (
    <>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('minCoords')}
          label="Minimum Coordinates"
          description="Coordinates in the form [x, y, z, ...]"
          component={Input}
          componentExtraProps={{
            label: 'Coordinate',
            description: 'Coordinate. e.g: 10.0',
            type: 'number',
          }}
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('maxCoords')}
          label="Maximum Coordinates"
          description="Coordinates in the form [x, y, z, ...]"
          component={Input}
          componentExtraProps={{
            label: 'Coordinate',
            description: 'Coordinate. e.g: 10.0',
            type: 'number',
          }}
        />
      </InlineFieldRow>
    </>
  );
};
Rectangular.type = 'rectangular';
Rectangular.fields = ['minCoords', 'maxCoords'];

import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Radius = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Radius);
  return (
    <>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('coords')}
          label="Coordinates"
          description="Origin coordinates in the form [x, y, z, ...]"
          component={Input}
          componentExtraProps={{
            label: 'Coordinate',
            description: 'Coordinate. e.g: 10.0',
            type: 'number',
          }}
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('radius')} label="Radius" description="The float radius value" type="number" />
      </InlineFieldRow>
    </>
  );
};
Radius.type = 'radius';
Radius.fields = ['coords', 'radius'];

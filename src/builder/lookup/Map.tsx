import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Map = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Or);
  return (
    <>
      <InlineFieldRow>
        <KeyValue
          {...scopedProps('map')}
          label="Map"
          description="The lookup inline map"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('isOneToOne')}
          label="Is one to one?"
          description="Specifies if the map is one to one"
        />
      </InlineFieldRow>
    </>
  );
};
Map.type = 'map';
Map.fields = ['map', 'isOneToOne'];

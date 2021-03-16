import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { DateTime } from '../date';

export const Duration = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Duration);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('duration')} label="Duration" description="The duration in milliseconds" type="number" />
      </InlineFieldRow>
      <InlineFieldRow>
        <DateTime
          {...scopedProps('origin')}
          label="Origin"
          description="Defines where to start counting time buckets from"
        />
      </InlineFieldRow>
    </>
  );
};
Duration.type = 'duration';
Duration.fields = ['duration', 'origin'];

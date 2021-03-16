import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { DateTime } from '../date';

export const Period = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Period);
  return (
    <>
      <InlineFieldRow>
        <Input
          {...scopedProps('period')}
          label="Period"
          description="The period in ISO8601 format (e.g. P2W, P3M, PT1H30M, PT0.750S)"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('timeZone')}
          label="Timezone"
          description="The timezone (e.g. Europe/Paris)"
          type="text"
        />
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
Period.type = 'period';
Period.fields = ['period', 'timeZone', 'origin'];

import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Granularity } from '../granularity';

export const TimeFormat = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, TimeFormat);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('format')} label="Format" description="The format" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('timeZone')} label="Time zone" description="The time zone" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('locale')} label="Locale" description="The locale" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('asMillis')}
          label="As millis?"
          description="Treat input strings as millis rather than ISO8601 strings"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Granularity {...scopedProps('granularity')} />
      </InlineFieldRow>
    </>
  );
};
TimeFormat.type = 'timeFormat';
TimeFormat.fields = ['format', 'timeZone', 'locale', 'asMillis', 'granularity'];

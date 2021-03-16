import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Time = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Time);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('timeFormat')} label="Time format" description="the time format" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('resultFormat')} label="Result format" description="the result format" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox {...scopedProps('joda')} label="Joda" description="Specifies if joda format is used." />
      </InlineFieldRow>
    </>
  );
};
Time.type = 'time';
Time.fields = ['timeFormat', 'resultFormat', 'joda'];

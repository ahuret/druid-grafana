import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Regex = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Regex);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('expr')} label="Expression" description="The regular expression" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('index')} label="Index" description="The index" type="number" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('replaceMissingValue')}
          label="Replace missing value"
          description="Specifies if the missing value should be replaced"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('replaceMissingValueWith')}
          label="Replace missing value with"
          description="The missing value replacement"
          type="text"
        />
      </InlineFieldRow>
    </>
  );
};
Regex.type = 'regex';
Regex.fields = ['expr', 'index', 'replaceMissingValue', 'replaceMissingValueWith'];

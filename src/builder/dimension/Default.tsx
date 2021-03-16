import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Default = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Default);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('outputName')} label="Output name" description="The, optionnal, dimension output name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Select
          {...scopedProps('outputType')}
          label="Output type"
          description="The output type"
          entries={{ STRING: 'String', LONG: 'Long', FLOAT: 'Float' }}
        />
      </InlineFieldRow>
    </>
  );
};
Default.type = 'default';
Default.fields = ['dimension', 'outputName', 'outputType'];

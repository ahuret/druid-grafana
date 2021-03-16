import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Select } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const StringFormat = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, StringFormat);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('format')} label="Format" description="The sprintf expression" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Select
          {...scopedProps('nullHandling')}
          label="Null handling"
          description="How to handle null value"
          entries={{ NULLSTRING: 'Null string', EMPTYSTRING: 'Empty string', RETURNNULL: 'Return null' }}
        />
      </InlineFieldRow>
    </>
  );
};
StringFormat.type = 'stringFormat';
StringFormat.fields = ['format', 'nullHandling'];

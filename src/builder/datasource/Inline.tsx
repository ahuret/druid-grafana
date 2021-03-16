import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Inline = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Inline);
  return (
    <InlineFieldRow>
      <Table
        {...scopedProps(undefined)}
        label="Data"
        description="the inline datasource CSV-like formated. header line should be formated like 'label:string,weight:float'. e.g: 'label:string,weight:float\nexample,10.3'"
        namesFieldName="columnNames"
        typesFieldName="columnTypes"
        rowsFieldName="rows"
      />
    </InlineFieldRow>
  );
};
Inline.type = 'inline';
Inline.fields = ['columnNames', 'columnTypes', 'rows'];

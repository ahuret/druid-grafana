import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Dimension } from '../Dimension';

export const ListFiltered = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, ListFiltered);
  return (
    <>
      <InlineFieldRow>
        <Dimension {...scopedProps('delegate')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('values')}
          label="Values"
          description="List of values"
          component={Input}
          componentExtraProps={{
            label: 'Value',
            description: 'The value',
            type: 'text',
          }}
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('isWhitelist')}
          label="Is whitelist?"
          description="Specifies if the filtered dimension spec acts as a whitelist"
        />
      </InlineFieldRow>
    </>
  );
};
ListFiltered.type = 'listFiltered';
ListFiltered.fields = ['delegate', 'values', 'isWhitelist'];

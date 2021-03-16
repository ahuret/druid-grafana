import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { SearchQuerySpec } from '../searchqueryspec';

export const SearchQuery = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, SearchQuery);
  return (
    <InlineFieldRow>
      <SearchQuerySpec {...scopedProps('query')} />
    </InlineFieldRow>
  );
};
SearchQuery.type = 'searchQuery';
SearchQuery.fields = ['query'];

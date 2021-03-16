import React from 'react';
import { InlineField, Select as SelectField } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { onBuilderChange } from '.';
import { QueryBuilderProps } from '../types';

interface Props extends QueryBuilderProps {
  entries: Record<string | number, string>;
}

export const Select = (props: Props) => {
  const onChange = (option: SelectableValue<string>) => {
    const value = option.value;
    if (value !== props.options.builder) {
      props.onChange !== undefined ? props.onChange(value) : onBuilderChange(props, value);
    }
  };
  const entries = Object.entries(props.entries).map((entry) => {
    return { label: entry[0], value: String(entry[1]) };
  });
  return (
    <InlineField label={props.label} tooltip={props.description} grow>
      <SelectField options={entries} value={props.options.builder} onChange={onChange} isClearable={true} />
    </InlineField>
  );
};

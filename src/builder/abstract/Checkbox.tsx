import React, { ChangeEvent } from 'react';
import { Checkbox as CheckboxField } from '@grafana/ui';
import { onBuilderChange } from '.';

export const Checkbox = (props: QueryBuilderProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.checked;
    if (value !== props.options.builder) {
      props.onChange !== undefined ? props.onChange(value) : onBuilderChange(props, value);
    }
  };
  return (
    <CheckboxField
      label={props.label}
      description={props.description}
      value={props.options.builder}
      onChange={onChange}
    />
  );
};

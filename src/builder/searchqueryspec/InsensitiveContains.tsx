import React, { PureComponent, ChangeEvent } from 'react';
import { LegacyForms } from '@grafana/ui';
import { css } from 'emotion';
import { QueryBuilderComponentProps } from '../abstract';

const { FormField } = LegacyForms;

export class InsensitiveContains extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    this.resetBuilder(['type', 'value']);
    const { builder } = props.options;
    builder.type = 'insensitive_contains';
  }

  resetBuilder = (properties: string[]) => {
    const { builder } = this.props.options;
    for (let key of Object.keys(builder)) {
      if (!properties.includes(key)) {
        delete builder[key];
      }
    }
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { options, onOptionsChange } = this.props;
    const { builder } = options;
    let value: any = event.target.value;
    if ('number' === event.target.type) {
      value = Number(value);
    }
    builder[event.target.name] = value;
    onOptionsChange({ ...options, builder: builder });
  };

  render() {
    const { builder } = this.props.options;
    return (
      <>
        <div className="gf-form">
          <div
            className={css`
              width: 300px;
            `}
          >
            <FormField
              label="Value"
              name="value"
              type="text"
              placeholder="the value that has to be contained"
              value={builder.value}
              onChange={this.onInputChange}
            />
          </div>
        </div>
      </>
    );
  }
}

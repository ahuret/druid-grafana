import React, { PureComponent } from 'react';
import { css } from 'emotion';
import { QueryBuilderComponentProps } from '../abstract';

export class All extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    this.resetBuilder(['type']);
    const { builder } = props.options;
    builder.type = 'all';
  }

  resetBuilder = (properties: string[]) => {
    const { builder } = this.props.options;
    for (let key of Object.keys(builder)) {
      if (!properties.includes(key)) {
        delete builder[key];
      }
    }
  };

  render() {
    return (
      <>
        <div className="gf-form">
          <div
            className={css`
              width: 300px;
            `}
          >
            All. Whatever it does.
          </div>
        </div>
      </>
    );
  }
}

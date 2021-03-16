import { PureComponent } from 'react';
import { QueryBuilderComponentProps } from '../abstract';

export class Numeric extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    const { options, onOptionsChange } = props;
    const { builder } = options;
    builder.type = 'numeric';
    onOptionsChange({ ...options, builder: builder });
  }
  render() {
    return null;
  }
}

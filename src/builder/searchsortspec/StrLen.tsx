import { PureComponent } from 'react';
import { QueryBuilderComponentProps } from '../abstract';

export class StrLen extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    const { options, onOptionsChange } = props;
    const { builder } = options;
    builder.type = 'strlen';
    onOptionsChange({ ...options, builder: builder });
  }
  render() {
    return null;
  }
}

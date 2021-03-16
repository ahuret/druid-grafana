import { PureComponent } from 'react';
import { QueryBuilderComponentProps } from '../abstract';

export class Version extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    const { options, onOptionsChange } = props;
    const { builder } = options;
    builder.type = 'version';
    onOptionsChange({ ...options, builder: builder });
  }
  render() {
    return null;
  }
}

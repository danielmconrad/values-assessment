import React from 'react';
import { observer } from 'mobx-react';

import ValueCard from './ValueCard';

export default observer(props => {
  if (props.store.current)
    return <ValueCard value={props.store.current} {...props} />;

  return (
    <div>
      <button onClick={() => props.store.reviewImportant()} >Review Important</button>
      <button onClick={() => props.store.reviewVeryImportant()} >Review Very Important</button>
      <button onClick={() => props.store.complete()} >Finished</button>
    </div>
  )
});

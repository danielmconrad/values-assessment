import React from 'react';
import { observer } from 'mobx-react';

import Intro from './Intro';
import Started from './Started';
import Complete from './Complete';

export default observer(props => (
  <div className="App">
    {props.store.state === 'not_started' && <Intro {...props} />}
    {props.store.state === 'started' && <Started {...props} />}
    {props.store.state === 'complete' && <Complete {...props} />}

    <section>
      <h3>NOT IMPORTANT</h3>
      {props.store.notImportantValues.map(val => <p key={val.id}>{val.label}</p>)}

      <h3>IMPORTANT</h3>
      {props.store.importantValues.map(val => <p key={val.id}>{val.label}</p>)}

      <h3>VERY IMPORTANT</h3>
      {props.store.veryImportantValues.map(val => <p key={val.id}>{val.label}</p>)}

      <h3>UNASSIGNED</h3>
      {props.store.unassignedValues.map(val => <p key={val.id}>{val.label}</p>)}

    </section>
  </div>
));

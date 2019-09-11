import React from 'react';
import { observer } from 'mobx-react';

export default observer(props => (
  <div className="Intro">
    Intro
    <button onClick={() => props.store.start()}>Start</button>
  </div>
));

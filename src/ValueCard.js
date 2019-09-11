import React from 'react';
import { observer } from 'mobx-react';

export default observer(props => (
  <div className="ValueCard">
    {props.value.label}
    <button onClick={() => props.store.setCurrentNotImportant()}>Not Important</button>
    <button onClick={() => props.store.setCurrentImportant()}>Important</button>
    <button onClick={() => props.store.setCurrentVeryImportant()}>Very Important</button>
  </div>
));

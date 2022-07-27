import React from 'react';

export default function AlertContainer(props) {
  const { status, message } = props.alert;
  return (
    <div>
      <div class={`alert alert-${status}`} role='alert'>
        Alert : {message}
      </div>
    </div>
  );
}

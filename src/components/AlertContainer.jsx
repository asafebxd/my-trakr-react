import React from 'react';
import { Alert } from './styles/Alert.styles';

export default function AlertContainer(props) {
  const { status, message } = props.alert;
  return (
    <div>
      <Alert status={status}>
        <span>{message}</span>
      </Alert>
      <div class={`alert alert-${status}`} role='alert'>
        Alert : {message}
      </div>
    </div>
  );
}

import React from 'react';

import styles from './ConfirmDialog.module.css';

export const ConfirmDialog = ({ message, onYes, onNo }) => {

  let msg = '';
  
  if (message) {
    msg = message;
  } else {
    msg = 'Are you sure?';
  }

  return <form className={styles.contentCenter}>
    <p>{msg}</p>
    <fieldset className={styles.noBorder}>
      <button type="button" onClick={() => onYes(1)}>Yes</button>
      <button type="button" onClick={() => onNo(2)} className={styles.noGap}>No</button>
    </fieldset>
  </form>

};
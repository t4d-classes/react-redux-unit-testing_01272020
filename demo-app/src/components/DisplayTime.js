import React from 'react';

import dateTimeSvc from '../services/datetime';

export const DisplayTime = () => {

  return <div>Current Time: {dateTimeSvc.now()}</div>

};

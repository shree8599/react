import React from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar from 'bpk-component-calendar';
import format from 'date-fns/format';
import startOfDay from 'date-fns/startOfDay';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const App = () => {
  const handleDateSelect = (date) => {
    console.log('Date selected:', date);
  };

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
            Flight Schedule
          </BpkText>
        </div>
      </header>

      <main className={getClassName('App__main')}>
        <BpkText tagName="p" className={getClassName('App__text')}>
          To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
        </BpkText>

        <div className={getClassName('App__calendar')}>
          <BpkCalendar
            id="calendar"
            onDateSelect={handleDateSelect}
            selectedDate={startOfDay(new Date())}
            formatDate={(date) => format(date, 'dd MMM yyyy')}
            daysOfWeek={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
          />
        </div>

        <BpkButton onClick={() => alert('It works!')} className={getClassName('App__button')}>
          Continue
        </BpkButton>
      </main>
    </div>
  );
};

export default App;
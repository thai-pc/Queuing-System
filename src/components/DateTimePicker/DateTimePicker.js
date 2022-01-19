import * as React from 'react';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import styles from './DateTimePicker.module.scss';
import './Customized.scss';
import clsx from 'clsx';

function DateTimePicker({ listService, detailService, listNumber }) {
  const [value, setValue] = React.useState([null, null]);
  return (
    <div>
      <h3>Chọn thời gian</h3>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateRangePicker
          calendars={1}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <div
                className={clsx(styles.startDay, {
                  [styles.listService]: listService,
                  [styles.detailService]: detailService,
                  [styles.listNumber]: listNumber,
                })}
              >
                <input ref={startProps.inputRef} {...startProps.inputProps} />
                <i className="fal fa-calendar-alt"></i>
              </div>
              <Box sx={{ mx: 1 }}>
                <i className="fas fa-caret-right"></i>
              </Box>
              <div
                className={clsx(styles.endDay, {
                  [styles.listService]: listService,
                  [styles.detailService]: detailService,
                  [styles.listNumber]: listNumber,
                })}
              >
                <input ref={endProps.inputRef} {...endProps.inputProps} />
                <i className="fal fa-calendar-alt"></i>
              </div>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DateTimePicker;

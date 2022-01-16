import React, { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import CustomPickerHeader from './CustomPickerHeader'

import ChevronDown from '../Icons/ChevronDown'
import ChevronUp from '../Icons/ChevronUp'

import 'react-datepicker/dist/react-datepicker.css'

function Filter() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const CustomDateRangeInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <button className="Filter-datepicker-custom" onClick={onClick} ref={ref}>
        {console.log(value)}
        <p className="Filter-datepicker-custom-title">CHECK-IN</p>
        <div className="Moment">
          <p className="Moment-day">{moment(startDate).format('DD')}</p>
          <div className="Moment-chevron">
            <p className="Moment-chevron-month">
              {moment(startDate).format('MMMM').substring(0, 3)}
            </p>
            <ChevronDown className="icon" />
          </div>
        </div>
      </button>
      <button className="Filter-datepicker-custom" onClick={onClick} ref={ref}>
        {console.log(value)}
        <p className="Filter-datepicker-custom-title">CHECK-OUT</p>
        <div className="Moment">
          <p className="Moment-day">
            {endDate ? moment(endDate).format('DD') : ''}
          </p>
          <div className="Moment-chevron">
            <p className="Moment-chevron-month">
              {endDate ? moment(endDate).format('MMMM').substring(0, 3) : ''}
            </p>
            <ChevronDown className="icon" />
          </div>
        </div>
      </button>
    </>
  ))

  return (
    <div className="Filter">
      <div className="Filter-datepicker">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          wrapperClassName="Filter-datepicker-wrapper"
          popperClassName="Filter-datepicker-popper"
          dayClassName={(date) => 'Filter-datepicker-day'}
          selectsRange
          monthsShown={2}
          showPopperArrow={false}
          customInput={<CustomDateRangeInput />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
            customHeaderCount
          }) => (
            <CustomPickerHeader
              date={date}
              changeYear={changeYear}
              changeMonth={changeMonth}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
              prevMonthButtonDisabled={prevMonthButtonDisabled}
              nextMonthButtonDisabled={nextMonthButtonDisabled}
              customHeaderCount={customHeaderCount}
            />
          )}
        />
      </div>
      <div className="Filter-family">
        <div className="Filter-family-input">
          <div>
            <p className="Filter-family-input-title">ADULTS</p>
          </div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="iconAbsoluteWrapper">
            <ChevronUp className="icon" />
            <ChevronDown className="icon" />
          </div>
        </div>
        <div className="Filter-family-input">
          <div>
            <p className="Filter-family-input-title">Childs</p>
          </div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="iconAbsoluteWrapper">
            <ChevronUp className="icon" />
            <ChevronDown className="icon" />
          </div>
        </div>
      </div>
      <button className="Filter-check">
        <span>CHECK AVAILABILITY</span>
      </button>
    </div>
  )
}

export default Filter

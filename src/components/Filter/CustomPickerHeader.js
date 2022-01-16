import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'
import Triangle from '../Icons/Triangle'

function CustomPickerHeader({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  customHeaderCount
}) {
  const years = [2021, 2020, 2019]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return (
    <div className="PickerHeader">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
      >
        <ChevronLeft className="icon" />
      </button>
      <div className="PickerHeader-select-area">
        <div className="PickerHeader-select">
          <select
            value={months[date.getMonth()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Triangle className="icon-triangle" />
        </div>
        <div className="PickerHeader-select">
          <select
            value={years[date.getYear()]}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Triangle className="icon-triangle" />
        </div>
      </div>

      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        style={customHeaderCount === 0 ? { visibility: 'hidden' } : null}
      >
        <ChevronRight className="icon" />
      </button>
    </div>
  )
}

export default CustomPickerHeader

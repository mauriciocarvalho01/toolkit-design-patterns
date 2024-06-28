import moment from 'moment'

export class Moment {
  private momentString!: moment.MomentInput | undefined
  constructor (momentString?: moment.MomentInput) {
    moment.locale('pt-br')
    this.momentString = momentString 
  }

  now = (): Moment => {
    this.momentString = moment()
    return this
  }

  lastDayOf = (timeUnit: moment.unitOfTime.StartOf): Moment => {
    this.momentString = moment(this.momentString).endOf(timeUnit)
    return this
  }

  firstDayOf = (timeUnit: moment.unitOfTime.StartOf): Moment => {
    this.momentString = moment(this.momentString).startOf(timeUnit)
    return this
  }

  subtract = (value: moment.DurationInputArg1, timeUnit: moment.unitOfTime.DurationConstructor | undefined): Moment => {
    this.momentString = moment(this.momentString).subtract(value, timeUnit)
    return this
  }

  add = (value: moment.DurationInputArg1, timeUnit: moment.unitOfTime.DurationConstructor | undefined): Moment => {
    this.momentString = moment(this.momentString).add(value, timeUnit)
    return this
  }

  isBetween = (initial: string, final: string): boolean => {
    return moment(this.momentString).isBetween(initial, final)
  }

  isBefore = (dateString: string): boolean => {
    return moment(this.momentString).isBefore(dateString)
  }

  isAfter = (dateString: string): boolean => {
    return moment(this.momentString).isAfter(dateString)
  }

  format = (format: string): string => {
    return moment(this.momentString).format(format)
  }

  isValid = (): Boolean => {
    return moment(this.momentString, 'YYYY-DD-MM', true).isValid()
  }
}
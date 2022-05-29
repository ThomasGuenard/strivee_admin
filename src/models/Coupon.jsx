class Coupon {
  constructor(
    code,
    bonReduction,
    conditions,
    utilisation,
    program,
    expiration
  ) {
    this.code = code
    this.bonReduction = bonReduction
    this.conditions = conditions
    this.utilisation = utilisation
    this.program = program
    this.expiration = expiration
    this._nextId++
  }
}

export default Coupon

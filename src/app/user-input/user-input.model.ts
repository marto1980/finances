enum INPUT_TYPE {
  INITIAL_INVESTMENT = 'INITIAL INVESTMENT',
  ANNUAL_INVESTMENT = 'ANNUAL INVESTMENT',
  EXPECTED_RETURN = 'EXPECTED RETURN',
  DURATION = 'DURATION',
}

const INPUT_TYPES = Object.entries(INPUT_TYPE).map(([key, value]) => ({
  id: key,
  label: value,
}))

type InputData = {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

export { INPUT_TYPE, INPUT_TYPES }
export type { InputData }

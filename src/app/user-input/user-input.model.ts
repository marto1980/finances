type InputData = {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

type InputFormData = { [key in keyof InputData]: number | undefined }

const isInputData = (obj: InputFormData): obj is InputData =>
  Object.entries(obj).every((entry) => typeof entry[1] === 'number')

const INPUT_TYPES: { id: keyof InputData; label: string }[] = [
  {
    id: 'initialInvestment',
    label: 'INITIAL INVESTMENT',
  },
  { id: 'annualInvestment', label: 'ANNUAL INVESTMENT' },
  { id: 'expectedReturn', label: 'EXPECTED RETURN' },
  { id: 'duration', label: 'DURATION' },
]
export { INPUT_TYPES, isInputData }
export type { InputData, InputFormData }

export const chartColors: Array<any> = [
  {
    backgroundColor: [
      '#CFF8F6',
      '#A6F2EE',
      '#82EDE8',
      '#5EE8E1',
      '#3BE3DB',
      '#1FD6CD',
      '#19B3AB',
      '#148F89',
      '#0F6B67',
      '#0A4744'
    ],
    borderColor: [
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)',
      'rgba(245,245,245,0.25)'
    ]
  }
]

export class ChartData {
  constructor(
    public bgColor: string,
    public label: string,
    public value: number,
    public percent: number
  ){}
}

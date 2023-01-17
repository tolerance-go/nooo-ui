import { OptionItem } from './widgets'

export type MultipleConfig = {
   title: string
   type: 'radio' | 'select' | 'multiple-select' | 'checkbox'
   options: OptionItem[]
}

export type FormConfigs = {
   categories: MultipleConfig
   type: MultipleConfig
}

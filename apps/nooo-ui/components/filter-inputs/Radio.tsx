import { useController, useFormContext } from 'react-hook-form'
import { InputControlCommon } from 'typings/filter-inputs'
import { OptionItem } from 'typings/widgets'

const RadioInput = (props: {
   name: string
   options: OptionItem[]
   onChange: (value: string) => void
   onBlur: () => void
   value: string
}) => {
   return (
      <div className='flex items-center space-x-4 h-full'>
         {props.options.map((item) => {
            return (
               <div className='flex items-center' key={item.value}>
                  <input
                     id={item.value}
                     checked={props.value === item.value}
                     type='radio'
                     className='w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                     name={props.name}
                     onChange={() => {
                        props.onChange(item.value)
                     }}
                     onBlur={props.onBlur}
                  />
                  <label
                     htmlFor={item.value}
                     className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                     {item.label}
                  </label>
               </div>
            )
         })}
      </div>
   )
}

export const Radio = (
   props: InputControlCommon & {
      options: OptionItem[]
   },
) => {
   const { control } = useFormContext()

   const {
      field,
      fieldState: { invalid, isTouched, isDirty },
      formState: { touchedFields, dirtyFields },
   } = useController({
      name: props.name,
      control,
   })

   return (
      <div className='flex items-stretch border-b'>
         <div
            aria-label='left-area'
            className='w-52 bg-gray-50 flex items-center justify-center p-2'
         >
            {props.title}
         </div>
         <div className='flex-grow p-2' aria-label='right-area'>
            <RadioInput
               options={props.options}
               onChange={field.onChange}
               onBlur={field.onBlur}
               value={field.value}
               name={field.name}
            />
         </div>
      </div>
   )
}

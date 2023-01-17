'use client'

import { createContext, PropsWithChildren, useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormConfigs } from 'typings/formConfigs'
import { getDefaultFormValuesFromFormConfigs } from 'utils/getDefaultFormValuesFromFormConfigs'
import { defaultFormConfigs } from 'utils/getFormConfigs'

export const FormConfigsContext = createContext<{
   formConfigs: FormConfigs
}>({
   formConfigs: defaultFormConfigs,
})

export const useFormConfigsContext = () => {
   return useContext(FormConfigsContext)
}

export const FilterFormProvider = ({
   formConfigs,
   children,
}: PropsWithChildren<{
   formConfigs: FormConfigs
}>) => {
   const methods = useForm({
      defaultValues: getDefaultFormValuesFromFormConfigs(formConfigs),
   })

   return (
      <FormConfigsContext.Provider value={{ formConfigs }}>
         <FormProvider {...methods}>{children}</FormProvider>
      </FormConfigsContext.Provider>
   )
}

'use client'

import { formConfigs } from 'constants/formConfigs'
import { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { getDefaultFormValuesFromFormConfigs } from 'utils/getDefaultFormValuesFromFormConfigs'

export const FilterFormProvider = (props: PropsWithChildren) => {
   const methods = useForm({
      defaultValues: getDefaultFormValuesFromFormConfigs(formConfigs),
   })

   return <FormProvider {...methods}>{props.children}</FormProvider>
}

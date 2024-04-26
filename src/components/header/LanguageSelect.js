import { FormControl, Select, } from '@mui/material'
import React from 'react'



export const languageCodes ={
    en:"English",
    ka: "Georgian",
}
export const LanguageSelect = () => {
  return <FormControl sx= {{minWidth:120, m:1}}>
    <Select>

    </Select>

  </FormControl>;


}



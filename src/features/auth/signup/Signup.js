import React from 'react'
import { AuthContainer } from '../components/AuthContainer'
import { Stack } from '@mui/material'
import { Text } from '../../../components/atoms/Texts'
import { SignupForm } from './SignupForm';
import { Snackbar } from '../../../components/atoms';
import { useUser } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { clearError } from '../../../redux/slices';

export const Signup = () => {
const {error} = useUser();
const dispatch =useDispatch();
  return (
    <>
    
     <AuthContainer>
        <Stack>
            <Text>
                Sign up
            </Text>
            <SignupForm/>
        </Stack>
     </AuthContainer>
     <Snackbar message={error} severity="error" onClose ={()=> {
      dispatch(clearError());
     }} />
    </> );

};


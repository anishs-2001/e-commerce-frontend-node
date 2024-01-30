import React, { useEffect, useState } from 'react'
import { FormInput, RegisterFunction } from './types';
import RegistrationPage from './RegistrationPage';
import { postSupplierRegistration } from './api/postSupplier';


const RegistrationHandler = () => {
    const [reg_detail, setReg_details] = useState<FormInput>({
        client_type: null,
        full_name: null,
        e_mail: null,
        password: null,
        profile_pic: null,
    });

    const register: RegisterFunction = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target as HTMLFormElement);
        setReg_details({
            client_type: formData.get("client_type") as FormInput["client_type"],
            full_name: formData.get("full_name") as string,
            e_mail: formData.get("e_mail") as string,
            password: formData.get("password") as string,
            profile_pic: (formData.get("profile_pic") as File),
        })
        // console.log(for.entries(formData));
        // console.log({ ...formData });

    }
    useEffect(() => {
        if (reg_detail.client_type === 'supplier')
            postSupplierRegistration(reg_detail)
    }, [reg_detail])
    return (
        <RegistrationPage register={register} />
    )
}

export default RegistrationHandler

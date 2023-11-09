import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';
import FormInput from '../formInput';
import SelectInput from '../selectInput';
import Buttons from '../Button';
import { formDataObject } from '../utils/formDataObject';
import { useFetchApi } from '../../api/axios';
import { groupSizeData } from '../utils/groupSizeData';

export default function RegistrationForm({ setSuccess, success }) {
  const { GET_CATEGORY_LIST, CREATE_REGISTRATION_APPLICATION } = useFetchApi();
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    team_name: '', email: '', phone_number: '', group_size: '', project_topic: '', category: '', privacy_poclicy_accepted: false,
  };
  const [registrationData, setRegistrationData] = useState(initialValues);
  const [validateFields, setValidateFields] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchCategoryList = async () => {
      const response = await GET_CATEGORY_LIST();
      setCategoryList(response.data);
    };
    fetchCategoryList();
  }, []);

  const handleSubmit = async () => {
    console.log({ registrationData });
    setLoading(true);
    if (!registrationData.team_name || !registrationData.email || !registrationData.phone_number || !registrationData.project_topic || !registrationData.category
    ) {
      setValidateFields(true);
      setLoading(false);
      return;
    }
    const formData = formDataObject(registrationData);
    try {
      const res = await CREATE_REGISTRATION_APPLICATION(formData);
      if (res?.status === 201) {
        setLoading(false);
        setSuccess(!success);
        setRegistrationData(initialValues);
      } else {
        setLoading(false);
        enqueueSnackbar('Error submitting Form!', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } catch (error) {
      setLoading(false);
      console.error('Error submitting contact details', error);

      if (error.response && error.response.data) {
        if (error.response.data.email && error.response.data.email[0] === 'email already exists.') {
          enqueueSnackbar('Email already exists!', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        } else if (error.response.data.phone_number && error.response.data.phone_number[0] === 'Ensure this field has no more than 13 characters.') {
          enqueueSnackbar('Please enter no more than 13 characters in this field', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        } else {
          enqueueSnackbar('Error submitting Form!', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        }
      } else {
        enqueueSnackbar('An unknown error occurred!', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    }
  };

  return (
    <form className="lg:mt-[33px] mt-[23px] flex flex-col w-full">
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-[18px] w-full">
        <FormInput
          placeholder="Enter the name of your group"
          label="Team’s Name"
          type="name"
          name="team_name"
          value={registrationData.team_name}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.value }));
          }}
          errorMessage={validateFields && !registrationData.team_name}
        />
        <FormInput
          placeholder="Enter your phone number"
          label="Phone"
          type="tel"
          name="phone_number"
          value={registrationData.phone_number}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.value }));
          }}
          errorMessage={validateFields && !registrationData.phone_number}
        />
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-[18px] mt-[29px] w-full">
        <FormInput
          placeholder="Enter your email address"
          label="Email"
          type="email"
          name="email"
          value={registrationData.email}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.value }));
          }}
          errorMessage={validateFields && !registrationData.email}
        />
        <FormInput
          placeholder="What is your group project topic"
          label="Project Topic"
          name="project_topic"
          value={registrationData.project_topic}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.value }));
          }}
          errorMessage={validateFields && !registrationData.project_topic}
        />
      </div>
      <div className="flex lg:gap-8 gap-[19px] mt-[29px] w-full">
        <SelectInput
          width="[60%]"
          label="Category"
          placeholder="Select your category"
          name="category"
          options={categoryList}
          value={registrationData.category}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.value }));
          }}
          errorMessage={validateFields && !registrationData.category}
        />
        <SelectInput
          label="Group Size"
          placeholder="Select"
          name="group_size"
          options={groupSizeData}
          value={registrationData.group_size}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.value }));
          }}
          errorMessage={validateFields && !registrationData.category}
        />
      </div>
      <p className="lg:mt-[23px] mt-[15px] lg:text-[12px] text-[9px] italic text-tertiary lg:mb-4 mb-3">Please review your registration details before submitting</p>
      <div className="flex gap-[10px] items-center lg:mb-[22px] mb-[14px]">
        <input
          type="checkbox"
          className="lg:w-[14px] lg:h-[14px] w-3 h-3"
          name="privacy_poclicy_accepted"
          value={registrationData.privacy_poclicy_accepted}
          onChange={(e) => {
            setRegistrationData((val) => ({ ...val, [e.target.name]: e.target.checked }));
          }}
        />
        <p className="lg:text-[12px] text-[10px]">I agreed with the event terms and conditions  and privacy policy</p>
      </div>
      <div className="lg:hidden">
        <Buttons icon={loading && <CircularProgress size="27px" style={{ color: 'white' }} />} functions={handleSubmit} text={loading ? '' : 'Submit'} width="100%" bgColor="linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)" />
      </div>
      <div className="hidden lg:flex">
        <Buttons icon={loading && <CircularProgress size="27px" style={{ color: 'white' }} />} functions={handleSubmit} text={loading ? '' : 'Register Now'} width="100%" bgColor="linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)" />
      </div>
    </form>
  );
}

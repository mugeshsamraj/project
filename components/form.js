import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form() {

    const {handleSubmit,register,formState: { errors },} = useForm();
    const onSubmit = (data)=> {
        console.log(data)
    }

  return (
    <>
     

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input {...register("firstName", 
            { required: true,  
            minLength: { value: 3, message: 'Must be at least 3 characters' } ,
            maxLength: { value: 10, message: 'should be at  10 characters' } 
            })} 
        />
        </label>
        <br />
        {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
        <label>
          Second Name:
          <input {...register("secondName", { required: true, maxLength: 20,minLength:8 })} />
        </label>
        <br />
        <label>
           Phone:
           <input type='number' {...register("phone", 
            { required: true,
            minLength: { value: 10, message: 'Must be at aleast 10 characters' } ,
            maxLength: { value: 11, message: 'should be at  10 characters' } 
            })} 
        />
        </label>
        <input type="submit" />
        {/* <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Submit</button> */}
      </form>
    </>
  );
}

export default Form;

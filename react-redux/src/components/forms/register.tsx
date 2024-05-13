import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/hooks';
import registerFormSlice from 'redux/slices/registerFormSlice';
import regListSlice from 'redux/slices/regListSlice';
import { IFormInputs, IRegCardProps } from 'shared/types';
import { calculateAge } from 'shared/utils';
import s from './register.module.sass';
import Switcher from './switcher';

export function Register() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted },
  } = useForm<IFormInputs>();

  const photo = useRef(null);

  const nameRegex = /^[a-zA-Z]+$/;

  const onFormSubmit = handleSubmit((data) => {
    let photoPath = '';
    const fileList = (photo?.current as never as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      photoPath = window.URL.createObjectURL(fileList[0]);
    }
    const dataObj: IRegCardProps = {
      name: data.firstName,
      surname: data.surname,
      birth: data.birth,
      country: data.country,
      langueges: data.langueges.join(', '),
      receiving: data.receiving ? 'delivery' : 'pick up',
      photo: photoPath,
    };
    dispatch(regListSlice.actions.regList(dataObj));
    alert('The data has been successfully saved.');
    reset();
  });

  return (
    <form className={s.register} onSubmit={onFormSubmit} autoComplete="off">
      <label htmlFor="name" className={s.label}>
        Name: {errors.firstName && <span className={s.error}>{errors.firstName.message}</span>}
      </label>
      <input
        type="text"
        id="name"
        className={s.input}
        autoComplete="new-password"
        data-testid="name"
        {...register('firstName', {
          required: {
            value: true,
            message: '*this field must be filled in',
          },
          minLength: {
            value: 3,
            message: '*at least 3 characters',
          },
          maxLength: {
            value: 30,
            message: '*maximum of 30 characters',
          },
          pattern: {
            value: nameRegex,
            message: '*first name must contain only Latin characters',
          },
        })}
      />
      <label htmlFor="surname" className={s.label}>
        Surname: {errors.surname && <span className={s.error}>{errors.surname.message}</span>}
      </label>
      <input
        id="surname"
        type="text"
        className={s.input}
        autoComplete="new-password"
        data-testid="surname"
        {...register('surname', {
          required: {
            value: true,
            message: '*this field must be filled in',
          },
          minLength: {
            value: 2,
            message: '*at least 2 characters',
          },
          maxLength: {
            value: 30,
            message: '*maximum of 30 characters',
          },
          pattern: {
            value: nameRegex,
            message: '*surname must contain only Latin characters',
          },
        })}
      />
      <label htmlFor="date" className={s.label}>
        Birth: {errors.birth && <span className={s.error}>{errors.birth.message}</span>}
      </label>
      <input
        id={s.date}
        type="date"
        placeholder="DD-MM-YYYY"
        className={s.input}
        data-testid="birth"
        {...register('birth', {
          required: {
            value: true,
            message: '*this field must be filled in',
          },
          validate: {
            positive: (v) => calculateAge(v) > 18 || '*you must be over 18 years old',
          },
        })}
      />
      <label htmlFor="country" className={s.label}>
        Country: {errors.country && <span className={s.error}>{errors.country.message}</span>}
      </label>
      <select
        id={s.country}
        className={s.input}
        data-testid="country"
        {...register('country', {
          required: {
            value: true,
            message: '*country must be selected',
          },
        })}
      >
        <option value="">Choose country</option>
        <option value="Cuba">Cuba</option>
        <option value="Mexico">Mexico</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Chile">Chile</option>
      </select>
      <fieldset className={s.lang} name="lang">
        <legend className={s.label}>Languages</legend>
        <label>
          <input
            type="checkbox"
            data-testid="eng"
            value="english"
            {...register('langueges', {
              required: true,
            })}
          />
          Eng
        </label>
        <label>
          <input
            type="checkbox"
            data-testid="spa"
            value="spanish"
            {...register('langueges', {
              required: true,
            })}
          />
          Spa
        </label>
        <label>
          <input
            type="checkbox"
            data-testid="fre"
            value="french"
            {...register('langueges', {
              required: true,
            })}
          />
          Fre
        </label>
      </fieldset>
      {errors.langueges && <span className={s.error}>*at least one languege must be selected</span>}
      <Switcher />
      <label htmlFor="image" className={s.label}>
        Photo:
      </label>
      <input
        ref={photo}
        id={s.image}
        type="file"
        className={s.input}
        accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
        name="photo"
        data-testid="photo"
      />
      <input
        type="submit"
        className={s.submit}
        value="SEND"
        data-testid="submit"
        disabled={(!isDirty || !isValid) && isSubmitted}
      />
    </form>
  );
}

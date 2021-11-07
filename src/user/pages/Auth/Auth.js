import React from 'react';

import './Auth.css';

import Card from '../../../shared/components/UIElements/Card/Card';
import Button from '../../../shared/components/FormElements/Button/Button';
import Input from '../../../shared/components/FormElements/Input/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../../shared/components/Util/validators';
import { useForm } from '../../../shared/hooks/form-hook';

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();

    console.log(formState.inputs); //TODO : Send Data to Backend
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, (at least 5 characters.)"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Auth;

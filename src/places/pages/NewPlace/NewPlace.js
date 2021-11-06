import React, { useCallback } from 'react';
import Input from '../../../shared/components/FormElements/Input/Input';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../../shared/components/Util/validators';

import './NewPlace.css';

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description (at least 5 characters.)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;

import React from 'react';
import { useParams } from 'react-router';
import { DUMMY_PLACES } from '../UserPlaces/UserPlaces';

import Input from '../../../shared/components/FormElements/Input/Input';
import Button from '../../../shared/components/FormElements/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../../shared/components/Util/validators';

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        type="text"
        element="input"
        label="Title"
        errorText="Please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
        value={identifiedPlace}
        valid={true}
        onInput={() => {}}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description (at least 5 characters.)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        value={identifiedPlace}
        valid={true}
        onInput={() => {}}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;

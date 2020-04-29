import { useInput } from '@git-api/ui/src/lib/user-form/use-input-hook';
import React from 'react';

import './user-form.scss';

// eslint-disable-next-line no-console
export interface UiProps {
  fetchUserData: (val) => void;
}

export const UserForm = (props: UiProps) => {
  const { value, bind, reset } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();
    props.fetchUserData(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input placeholder="Enter user name" type="text" {...bind} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;

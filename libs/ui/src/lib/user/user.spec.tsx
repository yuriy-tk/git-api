import React from 'react';
import { render } from '@testing-library/react';

import User from './user';

describe(' Ui', () => {
  it('should render successfully', () => {
    const mockUser = {
      name: 'test',
      id: 1
    };
    const { baseElement } = render(<User repos={[]} user={mockUser} />);
    expect(baseElement).toBeTruthy();

    const nameEl = baseElement.querySelectorAll('.user-name-test')[0].textContent;
    expect(nameEl).toBe(`Name: ${mockUser.name}`);
  });
});

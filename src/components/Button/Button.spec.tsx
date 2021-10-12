import { render } from '@test';

import Button from './Button';

describe('Button component testing', () => {
  it('renders without crashing', () => {
    const component = render(<Button />);

    expect(component).toBeTruthy();
  });
});

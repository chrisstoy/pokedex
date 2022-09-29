import { render } from '@testing-library/react';

import PokeMainCard from './PokeMainCard';

describe('PokeMainCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokeMainCard />);
    expect(baseElement).toBeTruthy();
  });
});

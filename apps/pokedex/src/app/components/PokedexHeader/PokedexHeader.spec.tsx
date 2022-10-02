import { render } from '@testing-library/react';

import PokedexHeader from './PokedexHeader';

describe('PokedexHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokedexHeader />);
    expect(baseElement).toBeTruthy();
  });
});

import { render as baseRender, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

interface AllTheProvidersProps {
  children: ReactNode;
}

export const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };

import React from 'react';
import {
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiHeader,
} from '@elastic/eui';

const Header = () => {
  const leftSectionItems = [
    <EuiHeaderLogo iconType="logoBusinessAnalytics">
      {process.env.REACT_APP_NAME}
    </EuiHeaderLogo>,
  ];

  return (
    <EuiHeader
      theme="dark"
      position="fixed"
      sections={[
        {
          items: leftSectionItems,
          borders: 'right',
        },
        {
          items: [
            <EuiHeaderLinks aria-label="App navigation dark theme example">
              <EuiHeaderLink isActive>Docs</EuiHeaderLink>
              <EuiHeaderLink>Code</EuiHeaderLink>
              <EuiHeaderLink iconType="help"> Help</EuiHeaderLink>
            </EuiHeaderLinks>,
          ],
        },
      ]}
    />
  );
};

export default Header;

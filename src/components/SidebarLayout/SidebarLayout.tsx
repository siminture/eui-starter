import React, { ReactNode } from 'react';
import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageBody,
} from '@elastic/eui';
import Sidebar from './Sidebar';
import Header from './Header';

type SidebarLayoutProps = {
  children?: ReactNode;
};

const SidebarLayout = (props: SidebarLayoutProps) => {
  return (
    <>
      <Header />
      <EuiPage paddingSize="none" style={{ minHeight: 'calc(100vh - 48px)' }}>
        <Sidebar />
        <EuiPageBody>
          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            color="transparent"
            paddingSize="m"
            borderRadius="none">
            <EuiPageContentBody restrictWidth={false}>
              {props.children}
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default SidebarLayout;

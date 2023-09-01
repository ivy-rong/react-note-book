/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Layout } from 'antd'
import BaseHeader from '@/components/BaseHeader'
import BaseSider from '@/components/BaseSider'
import BaseFooter from '@/components/BaseFooter'
import { useSiderStore } from '@/store'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  color: '#333333',
  height: 64,
  padding: 0,
  backgroundColor: '#ffffff'
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  width: 64,
  color: '#333333',
  backgroundColor: '#ffffff'
}

export default function BaseLayout(): JSX.Element {
  const [collapsed, toggleCollapsed] = useSiderStore((state) => [
    state.collapsed,
    state.toggleCollapsed
  ])
  return (
    <>
      <Layout className="h-screen bg-green-300 relative">
        <Header
          style={headerStyle}
          className="border-b"
        >
          <BaseHeader />
        </Header>
        <Layout
          hasSider
          className="bg-pink-300 overflow-y-auto  h-[calc(100%-134px)]"
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            style={siderStyle}
            className="border-r"
          >
            <BaseSider />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer className="border-t text-center">
          <BaseFooter />
        </Footer>
      </Layout>
    </>
  )
}

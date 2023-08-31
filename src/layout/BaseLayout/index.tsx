import React from 'react'
import { Layout } from 'antd'
import BaseHeader from '@/components/BaseHeader'
import BaseSider from '@/components/BaseSider'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea'
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9'
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea'
}

const App: React.FC = () => (
  <Layout>
    <Header style={headerStyle}>
      <BaseHeader />
    </Header>
    <Layout hasSider>
      <Sider style={siderStyle}>
        <BaseSider />
      </Sider>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
)

export default App

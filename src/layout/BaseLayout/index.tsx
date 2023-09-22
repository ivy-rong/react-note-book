/* eslint-disable react-hooks/rules-of-hooks */
import React, { Suspense } from 'react'
import { Layout } from 'antd'
import BaseHeader from '@/components/BaseHeader'
import BaseSider from '@/components/BaseSider'
import BaseFooter from '@/components/BaseFooter'
import { useSiderStore } from '@/store'
import SvgSpinnersBarsScale from '~icons/svg-spinners/bars-scale'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  color: '#333333',
  height: 64,
  padding: 0,
  backgroundColor: '#ffffff'
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  width: 64,
  color: '#333333',
  backgroundColor: '#ffffff'
}

export default function BaseLayout(): JSX.Element {
  const { collapsed, toggleCollapsed, hasSider } = useSiderStore()

  return (
    <>
      <Suspense
        fallback={
          <div className="w-full h-full justify-center flex items-center">
            <SvgSpinnersBarsScale className="text-blue-200  text-5xl" />
          </div>
        }
      >
        <Layout className="h-screen bg-green-300 relative">
          <Header
            style={headerStyle}
            className="border-b"
          >
            <BaseHeader />
          </Header>
          <Layout
            hasSider={hasSider}
            // className="bg-pink-300 overflow-y-auto  h-[calc(100%-134px)]"
          >
            {hasSider && (
              <Sider
                width={160}
                collapsedWidth={60}
                collapsible
                collapsed={collapsed}
                onCollapse={toggleCollapsed}
                style={siderStyle}
                className="border-r"
              >
                <BaseSider />
              </Sider>
            )}
            <Content className="h-[calc(100vh-114px)] bg-red-500 overflow-auto">
              <Outlet />
            </Content>
          </Layout>
          <Footer
            className={`flex justify-end items-center border-t h-9  !w-[calc(100%-0px)]`}
          >
            <BaseFooter />
          </Footer>
        </Layout>
      </Suspense>
    </>
  )
}

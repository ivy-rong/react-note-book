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
        <Layout
          className="h-  bg-green-300 relative"
          hasSider={hasSider}
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
              <div className="flex justify-center space-x-2 items-center py-4">
                <img
                  src="src/assets/animal.png"
                  className="h-8 w-8 hover:animate-spin"
                />
                {!collapsed && (
                  <span className="text-lg font-semibold select-none">
                    NoteBook
                  </span>
                )}
              </div>
              <BaseSider />
            </Sider>
          )}

          <Layout className="!h-screen relative">
            <Header
              style={headerStyle}
              className="border-b"
            >
              <BaseHeader />
            </Header>
            <Content className="h-[calc(100%-112px)] overflow-y-auto p-4 ">
              <Card
                bordered={false}
                hoverable
                className=" min-h-full rounded w-full bg-white"
              >
                <Outlet />
              </Card>
            </Content>
            <Footer className="h-12 w-full flex border-t  !bg-white">
              <BaseFooter />
            </Footer>
          </Layout>
        </Layout>
      </Suspense>
    </>
  )
}

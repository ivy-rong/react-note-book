import { LoginModel, userType, responseUser } from '@/type'

import { Link, useNavigate } from 'react-router-dom'
import LineMdAccount from '~icons/line-md/account'
import SolarLockPasswordLinear from '~icons/solar/lock-password-linear'
import AuthLayout from '@/layout/AuthLayout'
import IcBaselineFavorite from '~icons/ic/baseline-favorite'

import { useUserStore } from '@/store'

export default function Login(): JSX.Element {
  const [messageApi, contextHolder] = message.useMessage()

  const { setUser } = useUserStore()
  const navigate = useNavigate()
  const onFinish = (value: LoginModel) => {
    AuthAPI.loginByUsername(value)
      .then((res) => {
        //存储user token
        const { user, accessToken } = res as responseUser
        setUser(user as userType)
        AuthUtils.setToken(accessToken!)

        //提示登录成功
        messageApi.success('登录成功')
        navigate('/', { replace: true })
      })
      .catch(() => {
        messageApi.error('登录失败')
      })
  }

  return (
    <AuthLayout>
      {contextHolder}
      <div className="text-2xl ">登录</div>
      <div className="text-sm font-light flex justify-center items-center space-x-1">
        <IcBaselineFavorite className="text-red-300" />
        <span>欢迎到来</span>
      </div>
      <Form
        name="login"
        className="login w-full"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input
            placeholder="用户名"
            prefix={<LineMdAccount />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password
            prefix={<SolarLockPasswordLinear />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            // name="remember"
            // valuePropName="checked"
            noStyle
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Link
            to="/signup"
            className="login-form-forgot"
          >
            注册
          </Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="w-full"
            htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  )
}

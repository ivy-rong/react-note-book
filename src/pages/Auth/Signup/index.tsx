import { SignupModel, userType, responseUser } from '@/type'

import { Link, useNavigate } from 'react-router-dom'
import LineMdAccount from '~icons/line-md/account'
import SolarLockPasswordLinear from '~icons/solar/lock-password-linear'
import AuthLayout from '@/layout/AuthLayout'

import { useUserStore } from '@/store'

export default function Login(): JSX.Element {
  const [messageApi, contextHolder] = message.useMessage()

  const { setUser } = useUserStore()
  const navigate = useNavigate()
  const onFinish = (value: SignupModel) => {
    AuthAPI.signup(value)
      .then((res) => {
        //存储user token
        console.log(res)
        const { user, accessToken } = res as responseUser
        setUser(user as userType)
        AuthUtils.setToken(accessToken!)

        //提示登录成功
        messageApi.success('注册成功')
        navigate('/', { replace: true })
      })
      .catch(() => {
        messageApi.error('注册失败')
      })
  }

  return (
    <AuthLayout>
      {contextHolder}
      <div className="text-2xl ">注册</div>
      <Form
        name="signup"
        className="signup w-full"
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
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: '请确认密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次输入的密码不一致'))
              }
            })
          ]}
        >
          <Input.Password
            prefix={<SolarLockPasswordLinear />}
            type="password"
            placeholder="确实密码"
          />
        </Form.Item>
        <Form.Item>
          <div>
            <span className="pr-2">已有账号</span>
            <Link
              to="/login"
              className="login-form-forgot"
            >
              登录
            </Link>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="w-full"
            htmlType="submit"
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  )
}

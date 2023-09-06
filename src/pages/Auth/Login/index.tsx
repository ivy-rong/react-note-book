import { LoginModel } from '@/type'

import LineMdAccount from '~icons/line-md/account'
import SolarLockPasswordLinear from '~icons/solar/lock-password-linear'
import AuthLayout from '@/layout/AuthLayout'
import IcBaselineFavorite from '~icons/ic/baseline-favorite'

// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider
// } from '@tanstack/react-query'

export default function Login(): JSX.Element {
  const [messageApi, contextHolder] = message.useMessage()
  // const queryClient = new QueryClient()
  // const queryClient1 = useQueryClient()

  // // Queries
  // const query = useQuery({
  //   queryKey: [''],
  //   queryFn: AuthAPI.loginByUsername
  // })

  // // Mutations
  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: [''] })
  //   }
  // })

  const onFinish = (value: LoginModel) => {
    AuthAPI.loginByUsername(value)
      .then((res) => {
        console.log(res)
      })
      .catch(() => {
        messageApi.error('登录失败')
      })
  }

  return (
    // <QueryClientProvider client={queryClient}>
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

          <a
            className="login-form-forgot"
            href="/signup"
          >
            注册
          </a>
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
    // </QueryClientProvider>
  )
}

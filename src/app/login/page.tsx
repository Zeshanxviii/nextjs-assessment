'use client'
import '../globals.css'
import Image from 'next/image';
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FcGoogle } from 'react-icons/fc'

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen bg-black">
      <div className="hidden lg:flex lg:w-1/2 bg-black p-12 flex-col justify-between">
        <Image
          src="/login.png"
          alt="login illustration"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-white">Login</h2>
          </div>
          <Button variant="outline" className="w-full" onClick={() => console.log("Google login")}>
            <FcGoogle className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
          <div className="mt-4 flex items-center justify-between">
            <hr className="w-full border-t border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="w-full border-t border-gray-600" />
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-800 text-white"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-800 text-white"
                />
                {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <p className="mt-2 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-green-500 hover:text-green-400">
              Get Started
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
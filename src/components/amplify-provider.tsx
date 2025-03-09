"use client"

import { type ReactNode, useEffect } from "react"
import { Amplify } from "aws-amplify"

interface AmplifyProviderProps {
  children: ReactNode
}

export function AmplifyProvider({ children }: AmplifyProviderProps) {
  useEffect(() => {
    // Configure Amplify on the client side
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || "",
          userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || "",
          loginWith: {
            email: true,
            username: true,
          },
        },
      },
    })
  }, [])

  return <>{children}</>
}


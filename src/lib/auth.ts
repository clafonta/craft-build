import { Amplify } from "aws-amplify"
import {
  signUp as amplifySignUp,
  confirmSignUp as amplifyConfirmSignUp,
  resendSignUpCode,
  signIn as amplifySignIn,
  signOut as amplifySignOut,
  getCurrentUser as amplifyGetCurrentUser,
  fetchUserAttributes,
  updateUserAttributes as amplifyUpdateUserAttributes,
  updatePassword, // Changed from changePassword
  resetPassword,
  confirmResetPassword,
} from "aws-amplify/auth"

// Configure Amplify
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

// Sign up a new user
export async function signUp(username: string, email: string, password: string) {
  try {
    const { isSignUpComplete, userId, nextStep } = await amplifySignUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
        },
      },
    })

    return { isSignUpComplete, userId, nextStep }
  } catch (error) {
    console.error("Error signing up:", error)
    throw error
  }
}

// Confirm sign up with verification code
export async function confirmSignUp(username: string, code: string) {
  try {
    const { isSignUpComplete, nextStep } = await amplifyConfirmSignUp({
      username,
      confirmationCode: code,
    })

    return { isSignUpComplete, nextStep }
  } catch (error) {
    console.error("Error confirming sign up:", error)
    throw error
  }
}

// Resend confirmation code
export async function resendConfirmationCode(username: string) {
  try {
    const { deliveryDetails, destination } = await resendSignUpCode({
      username,
    })

    return { deliveryDetails, destination }
  } catch (error) {
    console.error("Error resending confirmation code:", error)
    throw error
  }
}

// Sign in a user
export async function signIn(username: string, password: string) {
  try {
    const { isSignedIn, nextStep } = await amplifySignIn({
      username,
      password,
    })

    return { isSignedIn, nextStep }
  } catch (error) {
    console.error("Error signing in:", error)
    throw error
  }
}

// Sign out the current user
export async function signOut() {
  try {
    return await amplifySignOut()
  } catch (error) {
    console.error("Error signing out:", error)
    throw error
  }
}

// Get the current authenticated user
export async function getCurrentUser() {
  try {
    const currentUser = await amplifyGetCurrentUser()
    const attributes = await fetchUserAttributes()
    return { ...currentUser, attributes }
  } catch (error) {
    console.error("Error getting current user:", error)
    throw error
  }
}

// Check if a user is authenticated
export async function isAuthenticated() {
  try {
    await amplifyGetCurrentUser()
    return true
  } catch {
    return false
  }
}

// Update user attributes
export async function updateUserAttributes(attributes: Record<string, string>) {
  try {
    const result = await amplifyUpdateUserAttributes({
      userAttributes: attributes,
    })
    return result
  } catch (error) {
    console.error("Error updating user attributes:", error)
    throw error
  }
}

// Change password - Updated to use updatePassword
export async function changePassword(oldPassword: string, newPassword: string) {
  try {
    return await updatePassword({
      oldPassword,
      newPassword,
    })
  } catch (error) {
    console.error("Error changing password:", error)
    throw error
  }
}

// Forgot password - request reset code
export async function forgotPassword(username: string) {
  try {
    const { deliveryDetails, destination } = await resetPassword({
      username,
    })
    return { deliveryDetails, destination }
  } catch (error) {
    console.error("Error requesting password reset:", error)
    throw error
  }
}

// Confirm forgot password with code and new password
export async function confirmForgotPassword(username: string, code: string, newPassword: string) {
  try {
    return await confirmResetPassword({
      username,
      confirmationCode: code,
      newPassword,
    })
  } catch (error) {
    console.error("Error confirming password reset:", error)
    throw error
  }
}


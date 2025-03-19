"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      //API Login with email password
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        setError(response.error);
      } else {
        router.push("/photos");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setError("Authentication failed. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google");
  };

  const handleFacebookLogin = async () => {
    await signIn("facebook");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Đăng Nhập</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Mật Khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Đăng Nhập
          </button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">Hoặc</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full p-2 text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Đăng Nhập Bằng Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center w-full p-2 text-white bg-blue-800 rounded-md hover:bg-blue-900"
          >
            Đăng Nhập Bằng Facebook
          </button>
        </div>
        <p className="text-sm text-center">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-blue-600">
            Đăng Ký
          </a>
        </p>
      </div>
    </div>
  );
}

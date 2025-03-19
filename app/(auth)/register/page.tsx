"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    if (!username || !email || !password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    // Gửi yêu cầu đăng ký
    console.log("Đăng ký với:", { username, email, password });
    // Reset lỗi
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Đăng Ký</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Tên Người Dùng
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
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
            Đăng Ký
          </button>
        </form>
        <p className="text-sm text-center">
          Đã có tài khoản?{" "}
          <a href="/login" className="text-blue-600">
            Đăng Nhập
          </a>
        </p>
      </div>
    </div>
  );
}

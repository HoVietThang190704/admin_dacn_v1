"use client";
import React from "react";

const mockViolations = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "a@example.com",
    reason: "Spam bình luận",
    date: "2025-10-01",
    status: "Đã xử lý",
  },
  {
    id: 2,
    name: "Tran Thi B",
    email: "b@example.com",
    reason: "Phát tán nội dung cấm",
    date: "2025-10-10",
    status: "Chưa xử lý",
  },
  {
    id: 3,
    name: "Le Van C",
    email: "c@example.com",
    reason: "Lừa đảo",
    date: "2025-09-25",
    status: "Đã xử lý",
  },
];

export default function ViolationAccountsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách tài khoản vi phạm</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Tên</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Lý do vi phạm</th>
              <th className="border px-4 py-2">Ngày vi phạm</th>
              <th className="border px-4 py-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {mockViolations.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.reason}</td>
                <td className="border px-4 py-2">{user.date}</td>
                <td className="border px-4 py-2">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

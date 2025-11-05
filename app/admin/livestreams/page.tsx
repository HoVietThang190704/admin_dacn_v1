"use client";
import React from "react";

const mockLivestreams = [
  {
    id: 101,
    title: "Bán hàng thời trang",
    creator: "Nguyen Van A",
    status: "Đang phát",
    startTime: "2025-11-01 19:00",
  },
  {
    id: 102,
    title: "Livestream mỹ phẩm",
    creator: "Tran Thi B",
    status: "Đã kết thúc",
    startTime: "2025-10-28 20:00",
  },
  {
    id: 103,
    title: "Khuyến mãi điện tử",
    creator: "Le Van C",
    status: "Sắp diễn ra",
    startTime: "2025-11-10 18:30",
  },
];

export default function LivestreamsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý Livestream</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Tiêu đề</th>
              <th className="border px-4 py-2">Người tạo</th>
              <th className="border px-4 py-2">Trạng thái</th>
              <th className="border px-4 py-2">Thời gian bắt đầu</th>
              <th className="border px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockLivestreams.map((ls) => (
              <tr key={ls.id}>
                <td className="border px-4 py-2">{ls.id}</td>
                <td className="border px-4 py-2">{ls.title}</td>
                <td className="border px-4 py-2">{ls.creator}</td>
                <td className="border px-4 py-2">{ls.status}</td>
                <td className="border px-4 py-2">{ls.startTime}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Xem</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

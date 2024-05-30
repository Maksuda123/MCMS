"use client";
import Image from "next/image";
import React, { useState } from "react";
import PopupForm from "./popupform";

interface FormData {
  fullName: string;
  rollNo: string;
  courseName: string;
  receiptNo: string;
  collectionDate: string;
  amount: string;
  totalAmount: string;
}

export default function AddMoneyButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [feeCollection, setFeeCollection] = useState<FormData[]>([]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleFormSubmit = (formData: FormData) => {
    setFeeCollection((prevCollection) => [...prevCollection, formData]);
  };

  const calculateTotal = (key: keyof FormData) => {
    return feeCollection.reduce(
      (sum, item) => sum + parseFloat(item[key] || "0"),
      0
    );
    // return feeCollection.reduce((sum, item) => sum + item[key], 0);   //for  number type value
  };

  const totalAmountSum = calculateTotal("amount");
  const totalTotalAmountSum = calculateTotal("totalAmount");

  return (
    <div>
      <button
        onClick={openPopup}
        className="flex items-center justify-center px- py-2 font-bold text-black bg-add-button rounded-md hover:bg-gradient-to-br hover:from-[#caa98d] hover:to-[#90b6ae]"
      >
        <span className="text-plus-icon m-1">
          <Image
            src="/group 66 (2).svg"
            alt="Money Icon"
            width={20}
            height={20}
          />
        </span>
        Add Money
      </button>

      <PopupForm
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handleFormSubmit}
      />

      <div className="w-full max-w-4xl">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Full Name</th>
              <th className="px-4 py-2 border">Roll No</th>
              <th className="px-4 py-2 border">Course Name</th>
              <th className="px-4 py-2 border">Money Receipt No</th>
              <th className="px-4 py-2 border">Collection Date</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {feeCollection.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{item.fullName}</td>
                <td className="px-4 py-2 border">{item.rollNo}</td>
                <td className="px-4 py-2 border">{item.courseName}</td>
                <td className="px-4 py-2 border">{item.receiptNo}</td>
                <td className="px-4 py-2 border">{item.collectionDate}</td>
                <td className="px-4 py-2 border">{item.amount}</td>
                <td className="px-4 py-2 border">{item.totalAmount}</td>
              </tr>
            ))}
            <tr>
              <td className="px-4 py-2 border font-bold" colSpan={5}>
                Total
              </td>
              <td className="px-4 py-2 border font-bold">{totalAmountSum}</td>
              <td className="px-4 py-2 border font-bold">
                {totalTotalAmountSum}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

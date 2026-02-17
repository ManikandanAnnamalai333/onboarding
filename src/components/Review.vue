<script setup>
import router from '../router'
// const router = useRouter()
const personalDetails = JSON.parse(sessionStorage.getItem('personalDetails'))
const bankDetails = JSON.parse(sessionStorage.getItem('bankdetails'))
const submitForm = async () => {
  // Here you would typically send the data to your server
  // For this example, we'll just log it to the console
  console.log('Submitting Personal Details:', personalDetails)
  console.log('Submitting Bank Details:', bankDetails)

  // Simulate API call
  // const response = await fetch(`${Api_URL}/submit`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ personalDetails, bankDetails }),
  // })
  // const data = await response.json()

  //   sessionStorage.setItem('personalDetails', JSON.stringify(personalDetails))
  //   sessionStorage.setItem('bankdetails', JSON.stringify(bankDetails))

  await router.push({ name: 'Finalpage' })

  // console.log('Server response:', data)
}
</script>
<template>
  <div class="page">
    <h2 class="title">Review Your Details</h2>
    <p class="subtitle">Please review your information before submission</p>
    <div class="review-section">
      <h3>Personal Details</h3>
      <p><strong>Name:</strong> {{ personalDetails.name }}</p>
      <p><strong>Aadhaar Name:</strong> {{ personalDetails.aadhaarName }}</p>
      <p><strong>Aadhaar Number:</strong> {{ personalDetails.aadhaarNumber }}</p>
      <p><strong>Email:</strong> {{ personalDetails.email }}</p>
      <p><strong>Mobile:</strong> {{ personalDetails.mobile }}</p>
      <p><strong>PAN:</strong> {{ personalDetails.pan }}</p>
    </div>
    <div class="review-section">
      <h3>Bank Details</h3>
      <p><strong>Account Holder Name:</strong> {{ bankDetails.accountName }}</p>
      <p><strong>Account Number:</strong> {{ bankDetails.accountNumber }}</p>
      <p><strong>Bank Name:</strong> {{ bankDetails.bankName }}</p>
      <p><strong>IFSC Code:</strong> {{ bankDetails.ifsc }}</p>
      <p><strong>Branch Name:</strong> {{ bankDetails.branch }}</p>
    </div>
    <input type="button" class="submit" @click="submitForm" value="Confirm and Submit" />
    <input type="button" class="submit" @click="previousclick" value="Previous page" />
  </div>
</template>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f0f4f8;
}
.title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}
.subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
}
.review-section {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin-bottom: 1.5rem;
}
.review-section h3 {
  margin-bottom: 1rem;
  color: #4caf50;
}
.review-section p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
}
.submit {
  background-color: #4caf50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
}
.submit:hover {
  background-color: #45a049;
}
</style>

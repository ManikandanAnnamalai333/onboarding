<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const submitted = ref(false)

const form = reactive({
  accountName: '',
  accountNumber: '',
  bankName: '',
  ifsc: '',
  branch: '',
})

const errors = reactive({})

async function submitForm() {
  submitted.value = true
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.accountName) errors.accountName = 'Please enter account holder name'
  else if (!form.accountNumber) errors.accountNumber = 'Please enter account number'
  else if (!form.bankName) errors.bankName = 'Please enter bank name'
  else if (!form.ifsc) errors.ifsc = 'Please enter IFSC code'
  else if (!form.branch) errors.branch = 'Please enter branch name'
  else {
    sessionStorage.setItem('bankdetails', JSON.stringify(form))
    await router.push({ name: 'Success' })
  }
}

const previousclick = async () => {
  await router.push({ name: 'PersonalDetails' })
}
</script>

<template>
  <div class="page">
    <div class="card">
      <h2 class="title">Bank Details</h2>
      <p class="subtitle">Securely enter your bank information</p>
      <div class="content">
        <!-- LEFT IMAGE -->
        <div class="image-section">
          <img src="../Images/BankDetails.jpg" alt="Bank Details" />
        </div>

        <!-- RIGHT FORM CARD -->

        <form class="form" @submit.prevent="submitForm">
          <div class="field">
            <label>Account Holder Name</label>
            <input v-model="form.accountName" placeholder="Enter account holder name" />
            <span class="error" v-if="errors.accountName">{{ errors.accountName }}</span>
          </div>

          <div class="field">
            <label>Account Number</label>
            <input v-model="form.accountNumber" placeholder="Enter account number" />
            <span class="error" v-if="errors.accountNumber">{{ errors.accountNumber }}</span>
          </div>

          <div class="field">
            <label>Bank Name</label>
            <input v-model="form.bankName" placeholder="Enter bank name" />
            <span class="error" v-if="errors.bankName">{{ errors.bankName }}</span>
          </div>

          <div class="field">
            <label>IFSC Code</label>
            <input v-model="form.ifsc" maxlength="11" placeholder="e.g. SBIN0001234" />
            <span class="error" v-if="errors.ifsc">{{ errors.ifsc }}</span>
          </div>

          <div class="field">
            <label>Branch Name</label>
            <input v-model="form.branch" placeholder="Enter branch name" />
            <span class="error" v-if="errors.branch">{{ errors.branch }}</span>
          </div>

          <div class="button-group">
            <button type="button" class="secondary" @click="previousclick">Previous</button>

            <button type="submit" class="submit">Submit Bank Details</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* PAGE BACKGROUND */
.page {
  /* min-height: 100vh; */
  background: linear-gradient(135deg, #eef4ff, #f8fbff);
  display: flex;
  justify-content: center;
  padding: 20px;
  font-family: 'Inter', Arial, sans-serif;
}

/* MAIN CARD */
.card {
  width: 100%;
  max-width: 900px; /* IMPORTANT → same as personal page */
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* TITLES */
.title {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}

.subtitle {
  text-align: center;
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 20px;
}

/* IMAGE LEFT + FORM RIGHT */
.content {
  display: flex;
  gap: 28px;
  align-items: center;
}

/* IMAGE */
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-section img {
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
}

/* FORM */
.form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #374151;
}

input {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

/* BUTTONS */
.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.submit {
  flex: 1;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.25);
}

.secondary {
  flex: 1;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  font-weight: 600;
  cursor: pointer;
}

/* ERROR TEXT */
.error {
  color: #e11d48;
  font-size: 12px;
  margin-top: 4px;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .image-section img {
    max-width: 180px;
  }
}
</style>

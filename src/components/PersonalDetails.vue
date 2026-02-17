<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const submitted = ref(false)

const form = reactive({
  name: '',
  aadhaarNumber: '',
  email: '',
  mobile: '',
  pan: '',
})

const errors = reactive({})

async function submitForm() {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.name) {
    errors.name = 'Please enter your name'
  } else if (!form.aadhaarNumber) {
    errors.aadhaarNumber = 'Please enter your Aadhaar number'
  } else if (!/^\d{12}$/.test(form.aadhaarNumber)) {
    errors.aadhaarNumber = 'Aadhaar number must be 12 digits'
  } else if (!form.email) {
    errors.email = 'Please enter your email address'
  } else if (!form.mobile) {
    errors.mobile = 'Please enter your mobile number'
  } else if (!/^\d{10}$/.test(form.mobile)) {
    errors.mobile = 'Mobile number must be 10 digits'
  } else if (!form.pan) {
    errors.pan = 'Please enter your PAN number'
  } else {
    submitted.value = true
    sessionStorage.setItem('personalDetails', JSON.stringify(form))
    await router.push({ name: 'BankDetails' })
  }
}
</script>

<template>
  <div class="page">
    <div class="card">
      <h2 class="title">Personal Details</h2>
      <p class="subtitle">Securely enter your KYC information</p>

      <!-- LEFT IMAGE + RIGHT FORM -->
      <div class="content">
        <!-- Left Image -->
        <div class="image-section">
          <img src="../Images/Personal.jpg" alt="personal" />
        </div>

        <!-- Right Form -->
        <form class="form">
          <div class="field">
            <label>Name</label>
            <input v-model="form.name" type="text" placeholder="Enter your full name" />
            <span class="error" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <div class="field">
            <label>Aadhaar Number</label>
            <input v-model="form.aadhaarNumber" maxlength="12" placeholder="XXXXXXXXXXXX" />
            <span class="error" v-if="errors.aadhaarNumber">{{ errors.aadhaarNumber }}</span>
          </div>

          <div class="field">
            <label>Email Address</label>
            <input v-model="form.email" type="email" placeholder="example@email.com" />
            <span class="error" v-if="errors.email">{{ errors.email }}</span>
          </div>

          <div class="field">
            <label>Mobile Number</label>
            <input v-model="form.mobile" maxlength="10" placeholder="10-digit mobile number" />
            <span class="error" v-if="errors.mobile">{{ errors.mobile }}</span>
          </div>

          <div class="field">
            <label>PAN Number</label>
            <input v-model="form.pan" maxlength="10" placeholder="ABCDE1234F" />
            <span class="error" v-if="errors.pan">{{ errors.pan }}</span>
          </div>

          <input type="button" class="submit" @click="submitForm" value="Continue" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page background */
.page {
  /* min-height: 100vh; */
  background: linear-gradient(135deg, #eef4ff, #f8fbff);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 20px;
  font-family: 'Inter', Arial, sans-serif;
}

/* Card */
.card {
  width: 100%;
  max-width: 900px;
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* Titles */
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

/* Layout: left image + right form */
.content {
  display: flex;
  gap: 28px;
  align-items: center;
}

/* Left image */
.image-section {
  flex: 2;
  display: flex;
  justify-content: center;
}

.image-section img {
  width: 100%;
  max-width: 310px;
  border-radius: 16px;
}

/* Right form */
.form {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Fields */
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

/* Button */
.submit {
  margin-top: 10px;
  padding: 14px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.25);
}

/* Error text */
.error {
  color: #e11d48;
  font-size: 12px;
  margin-top: 4px;
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .image-section img {
    max-width: 160px;
  }
}
/* ========== Large Desktop (1400px and above) ========== */
@media (min-width: 1400px) {
  .card {
    max-width: 1000px;
    padding: 36px;
  }

  .image-section img {
    max-width: 360px;
  }
}

/* ========== Laptop / Small Desktop (1024px – 1399px) ========== */
@media (max-width: 1399px) {
  .card {
    max-width: 900px;
  }

  .image-section img {
    max-width: 300px;
  }
}

/* ========== Tablet (768px – 1023px) ========== */
@media (max-width: 1023px) {
  .content {
    gap: 20px;
  }

  .image-section img {
    max-width: 240px;
  }

  .card {
    padding: 24px;
  }
}

/* ========== Mobile Large (481px – 767px) ========== */
@media (max-width: 767px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .image-section {
    margin-bottom: 10px;
  }

  .image-section img {
    max-width: 180px;
  }

  .title {
    font-size: 20px;
  }
}

/* ========== Mobile Small (up to 480px) ========== */
@media (max-width: 480px) {
  .page {
    padding: 12px;
  }

  .card {
    padding: 18px;
    border-radius: 16px;
  }

  input {
    font-size: 13px;
    padding: 10px 12px;
  }

  .submit {
    padding: 12px;
    font-size: 14px;
  }

  .image-section img {
    max-width: 140px;
  }
}
</style>

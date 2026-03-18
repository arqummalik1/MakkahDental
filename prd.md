Got it — fully static, no backend, no Supabase, pure frontend demo. Here's the complete detailed PRD:

***

# PRD: Makkah Dental Care — Static Demo Website
**Version:** 1.0 (Demo) | **Date:** March 2026
**Client:** Makkah Dental Care, Bathindi, Jammu
**Type:** Fully Static Frontend — No Backend, No Database, No Auth

***

## 1. Project Overview

**Purpose:** A pixel-perfect static demo website to present to the doctor/clinic owner showing the complete vision of the product — how the website will look, how booking works, how the admin dashboard looks, and how patient login feels. All data will be hardcoded/mocked. Nothing actually saves anywhere.

**Tech Stack:**
- **React.js** (Vite setup)
- **Tailwind CSS** (styling)
- **React Router DOM** (page navigation)
- **No API, No Supabase, No Firebase — zero backend**
- All data = hardcoded JavaScript arrays/objects

***

## 2. Brand Identity

| Element | Value |
|---|---|
| **Clinic Name** | Makkah Dental Care |
| **Tagline** | *Your Smile, Our Priority* |
| **Location** | Shop No. 2, Block C, Near Makkah Masjid Complex, Bathindi, Jammu – 181152 |
| **Primary Color** | Deep Teal `#0A7B83` |
| **Accent Color** | Gold `#D4A017` |
| **Background** | White `#FFFFFF` + Light Gray `#F7F9FA` |
| **Font (Headings)** | Poppins Bold |
| **Font (Body)** | Inter Regular |
| **Logo Concept** | Crescent moon + tooth icon, teal color |

***

## 3. Folder Structure

```
makkah-dental/
├── public/
│   └── logo.png
├── src/
│   ├── assets/           ← Images, icons
│   ├── components/       ← Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── AppointmentRow.jsx
│   │   └── PatientRow.jsx
│   ├── data/             ← All hardcoded mock data
│   │   ├── services.js
│   │   ├── appointments.js
│   │   ├── patients.js
│   │   └── testimonials.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Contact.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── AppointmentConfirmed.jsx
│   │   ├── PatientLogin.jsx
│   │   ├── PatientDashboard.jsx
│   │   └── admin/
│   │       ├── AdminLogin.jsx
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminAppointments.jsx
│   │       ├── AdminPatients.jsx
│   │       └── AdminPatientProfile.jsx
│   ├── App.jsx           ← All routes defined here
│   └── main.jsx
├── package.json
└── vite.config.js
```

***

## 4. Pages — Complete Breakdown

***

### PAGE 1: Home (`/`)

**Navbar (Sticky Top)**
- Logo (left): Makkah Dental Care crescent+tooth icon
- Nav Links: Home | Services | About Us | Contact
- Right side: "Book Appointment" button (teal filled) + "Patient Login" (outlined)

***

**Section 1 — Hero**
- Full-width hero with a soft dental clinic background image (can use free stock from Unsplash)
- Large heading: **"World-Class Dental Care in the Heart of Jammu"**
- Subtext: *Trusted by hundreds of patients in Bathindi & across Jammu since 2024*
- Two CTA buttons: **[Book Appointment]** → `/book-appointment` | **[Our Services]** → `/services`
- Small trust badges below: ⭐ 5.0 Rated on JustDial | 🦷 10+ Dental Services | 📍 Bathindi, Jammu

***

**Section 2 — About Snapshot**
- Two-column layout
- Left: Image of dental clinic interior (stock)
- Right: Short paragraph about Makkah Dental Care, its location near Makkah Masjid Complex, Bathindi, commitment to painless modern dentistry
- Small link: "Learn More About Us →"

***

**Section 3 — Services (Preview)**
- Section heading: "What We Treat"
- 3-column grid of 6 service cards (from full list of 10, showing top 6 on homepage)
- Each card: Icon + Service Name + 1-line description
- "View All Services →" link at bottom

**Services to show (top 6):**
1. 🦷 Root Canal Treatment — Painless RCT with modern rotary tools
2. 😁 Dental Braces — Metal & ceramic braces for all ages
3. 👑 Ceramic Crowns & Bridges — Natural-look tooth restoration
4. 💎 Teeth Whitening — Professional laser whitening
5. 🔬 Laser Dentistry — Minimally invasive laser procedures
6. 🦷 Dental Implants — Permanent tooth replacement

***

**Section 4 — Why Choose Us**
- 4 icon boxes in a row:
  - 🏥 Modern Equipment
  - 💉 Painless Procedures
  - 🕐 Flexible Timings
  - 📍 Central Bathindi Location

***

**Section 5 — Testimonials**
- Heading: "What Our Patients Say"
- 3 testimonial cards (hardcoded mock data)

**Hardcoded Testimonials:**
```js
// data/testimonials.js
export const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Bathindi, Jammu",
    rating: 5,
    text: "Got my root canal done here. Absolutely painless experience. Dr. sahab is very professional and the clinic is very clean."
  },
  {
    name: "Sana Mir",
    location: "Rehari Colony, Jammu",
    rating: 5,
    text: "My braces treatment is going very smoothly. The staff is cooperative and timings are very convenient."
  },
  {
    name: "Mohammad Iqbal",
    location: "Bathindi, Jammu",
    rating: 5,
    text: "Best dental clinic near Makkah Masjid. Got my wisdom tooth removed without any pain. Highly recommended!"
  }
]
```

***

**Section 6 — CTA Banner**
- Teal background
- Text: "Ready to Get Your Perfect Smile?"
- Button: "Book Your Appointment Today"

***

**Section 7 — Footer**
- Logo + tagline
- Quick links column
- Contact info column:
  - 📍 Shop No. 2, Block C, Near Makkah Masjid Complex, Bathindi, Jammu – 181152
  - 📞 [Phone from listing]
  - 🕐 Mon–Sat: 10:00 AM – 8:00 PM
- Google Maps embed (static iframe)
- Copyright: © 2026 Makkah Dental Care. All rights reserved.

***

### PAGE 2: Services (`/services`)

- Full page listing of all 10 services
- Each service has its own expanded card with:
  - Icon
  - Service Name (large)
  - 3–4 line description
  - "Book This Service →" button linking to `/book-appointment`

**All 10 Services (hardcoded):**
```js
// data/services.js
export const services = [
  { id: 1, name: "Root Canal Treatment", icon: "🦷", description: "Advanced rotary RCT to save infected teeth with minimal discomfort. We use modern equipment to ensure a completely painless procedure." },
  { id: 2, name: "Dental Braces", icon: "😁", description: "Metal and ceramic braces for teeth alignment. Suitable for children and adults. Customized treatment plan for every patient." },
  { id: 3, name: "Ceramic Crowns & Bridges", icon: "👑", description: "High-quality ceramic crowns and bridges that match your natural tooth color for a seamless smile restoration." },
  { id: 4, name: "Laser Dentistry", icon: "🔬", description: "Minimally invasive laser procedures for gum treatment, teeth whitening, and cavity removal with faster healing time." },
  { id: 5, name: "Wisdom Tooth Extraction", icon: "🪥", description: "Safe and precise wisdom tooth removal under local anesthesia with post-operative care guidance." },
  { id: 6, name: "Oral & Maxillofacial Surgery", icon: "🏥", description: "Surgical treatments for jaw, face, and mouth conditions by an experienced oral surgeon." },
  { id: 7, name: "Dental Implants", icon: "🔩", description: "Permanent titanium implants to replace missing teeth. Long-lasting and natural-looking solution." },
  { id: 8, name: "Teeth Whitening", icon: "💎", description: "Professional laser teeth whitening for a brighter smile in just one session." },
  { id: 9, name: "Cosmetic Dentistry", icon: "✨", description: "Smile makeovers including veneers, bonding, and shaping for a flawless appearance." },
  { id: 10, name: "Fixed Prosthodontics", icon: "🦾", description: "Permanent fixed dental prosthetics including crowns, bridges, and full mouth rehabilitation." }
]
```

***

### PAGE 3: About Us (`/about`)

**Sections:**
1. **Hero banner** — "About Makkah Dental Care" with clinic image
2. **Our Story** — 2-column: image left, text right
   - *"Makkah Dental Care is located in the heart of Bathindi, Jammu, near the iconic Makkah Masjid Complex. We are committed to delivering world-class dental care using modern technology in a comfortable, hygienic environment."*
3. **Our Values** — 3 cards: Patient First | Modern Technology | Affordable Care
4. **Location Info** — Address, timing table, embedded Google Map

**Clinic Timings Table (hardcoded):**
| Day | Timing |
|---|---|
| Monday – Saturday | 10:00 AM – 8:00 PM |
| Sunday | By Appointment Only |

***

### PAGE 4: Book Appointment (`/book-appointment`)

**This is a static form — no actual submission. On submit, redirect to `/appointment-confirmed`.**

**Form Fields:**
| Field | Type | Required |
|---|---|---|
| Full Name | Text input | ✅ |
| Phone Number | Tel input | ✅ |
| Email Address | Email input | Optional |
| Select Service | Dropdown (all 10 services) | ✅ |
| Preferred Date | Date picker | ✅ |
| Preferred Time Slot | Dropdown | ✅ |
| Additional Notes | Textarea | Optional |

**Time Slots (hardcoded dropdown):**
- 10:00 AM – 11:00 AM
- 11:00 AM – 12:00 PM
- 12:00 PM – 1:00 PM
- 2:00 PM – 3:00 PM
- 3:00 PM – 4:00 PM
- 4:00 PM – 5:00 PM
- 5:00 PM – 6:00 PM
- 6:00 PM – 7:00 PM

**On Submit:**
- Basic validation (required fields not empty)
- No API call — just `navigate('/appointment-confirmed')`

***

### PAGE 5: Appointment Confirmed (`/appointment-confirmed`)

- Green checkmark ✅ animation
- Heading: "Appointment Request Received!"
- Subtext: "Thank you, [Name]! We will confirm your appointment shortly via phone call."
- Details box showing: Name, Service, Date, Time (pulled from form state or hardcoded for demo)
- Button: "Back to Home"
- Button: "Book Another Appointment"

***

### PAGE 6: Patient Login (`/patient/login`)

**This is a fake login — hardcode one demo patient credential.**

**UI:**
- Centered card with logo on top
- Email field
- Password field
- "Login" button
- Link: "New patient? Register here" (can go to a simple register form page, also fake)
- Link: "Admin Login →" (small, at bottom)

**Demo Credentials (hardcoded in component):**
```js
const DEMO_PATIENT = {
  email: "patient@demo.com",
  password: "patient123"
}
```

On correct credentials → navigate to `/patient/dashboard`
On wrong credentials → show red error: "Invalid email or password"

***

### PAGE 7: Patient Dashboard (`/patient/dashboard`)

**Header:** "Welcome back, Ahmed Ali 👋" (hardcoded name)

**Section 1 — My Upcoming Appointments**
Table with hardcoded upcoming appointments:
```js
{ id: 1, service: "Root Canal Treatment", date: "March 22, 2026", time: "11:00 AM", status: "Confirmed" }
{ id: 2, service: "Teeth Whitening", date: "April 5, 2026", time: "3:00 PM", status: "Pending" }
```
- Each row has a "Cancel" button (just changes status text to "Cancelled" locally with useState — no backend)

**Section 2 — Past Appointments**
```js
{ id: 3, service: "Dental Braces Checkup", date: "Feb 10, 2026", time: "12:00 PM", status: "Completed" }
{ id: 4, service: "Wisdom Tooth Extraction", date: "Jan 5, 2026", time: "10:00 AM", status: "Completed" }
```

**Section 3 — My Profile**
- Shows: Name, Phone, Email, DOB (all hardcoded)
- "Edit Profile" button (can open a modal with editable fields — changes reflect locally with useState)

**Sidebar/Top Nav:**
- Logo
- My Appointments
- My Profile
- Logout → goes back to `/patient/login`

***

### PAGE 8: Admin Login (`/admin/login`)

**Demo Credentials (hardcoded):**
```js
const ADMIN = {
  email: "admin@makkahdentalcare.com",
  password: "admin123"
}
```

- Same design as patient login but with "Admin Panel" label on top
- On correct login → navigate to `/admin/dashboard`

***

### PAGE 9: Admin Dashboard (`/admin/dashboard`)

**Top Stats Cards (hardcoded numbers):**
| Card | Value |
|---|---|
| 📅 Today's Appointments | 6 |
| 👥 Total Patients | 48 |
| ✅ Completed This Month | 34 |
| ⏳ Pending Approvals | 3 |

**Today's Schedule Table (hardcoded):**
```js
export const todayAppointments = [
  { time: "10:00 AM", patient: "Aryan Gupta", service: "RCT", status: "Confirmed" },
  { time: "11:00 AM", patient: "Sana Mir", service: "Braces Checkup", status: "Confirmed" },
  { time: "12:00 PM", patient: "Tariq Hussain", service: "Teeth Whitening", status: "Pending" },
  { time: "2:00 PM", patient: "Priya Sharma", service: "Crown Fitting", status: "Confirmed" },
  { time: "4:00 PM", patient: "Imran Khan", service: "Implant Consult", status: "Pending" },
  { time: "6:00 PM", patient: "Neha Dogra", service: "Cleaning", status: "Confirmed" },
]
```

**Admin Sidebar Navigation:**
- 🏠 Dashboard
- 📅 Appointments
- 👥 Patients
- 🚪 Logout

***

### PAGE 10: Admin — All Appointments (`/admin/appointments`)

**Hardcoded appointments list (20 entries)** with full table:

```js
// data/appointments.js — 20 mock entries covering various statuses
export const allAppointments = [
  { id: 1, patient: "Aryan Gupta", phone: "94191-XXXXX", service: "Root Canal", date: "Mar 17, 2026", time: "10:00 AM", status: "Confirmed" },
  { id: 2, patient: "Sana Mir", phone: "70060-XXXXX", service: "Braces", date: "Mar 17, 2026", time: "11:00 AM", status: "Confirmed" },
  { id: 3, patient: "Tariq Hussain", phone: "96220-XXXXX", service: "Whitening", date: "Mar 17, 2026", time: "12:00 PM", status: "Pending" },
  // ... 17 more entries
]
```

**Table Columns:** #, Patient Name, Phone, Service, Date, Time, Status, Actions

**Actions per row:**
- ✅ Confirm (turns status green — useState only)
- ❌ Cancel (turns status red — useState only)

**Filter bar at top:**
- Dropdown: All | Pending | Confirmed | Completed | Cancelled
- Date filter input
- Search by patient name

*(All filters work via JavaScript `.filter()` on the hardcoded array — no API)*

***

### PAGE 11: Admin — All Patients (`/admin/patients`)

**Hardcoded patient list (15 patients):**
```js
// data/patients.js
export const patients = [
  { id: 1, name: "Aryan Gupta", phone: "94191-XXXXX", email: "aryan@email.com", age: 28, lastVisit: "Mar 17, 2026", totalVisits: 4 },
  { id: 2, name: "Sana Mir", phone: "70060-XXXXX", email: "sana@email.com", age: 23, lastVisit: "Mar 17, 2026", totalVisits: 7 },
  { id: 3, name: "Tariq Hussain", phone: "96220-XXXXX", email: "tariq@email.com", age: 35, lastVisit: "Mar 17, 2026", totalVisits: 2 },
  // ... 12 more
]
```

**Table Columns:** #, Name, Phone, Email, Age, Last Visit, Total Visits, Actions

**Actions:** "View Profile" → navigates to `/admin/patients/:id`

**Search bar** at top — filters by name or phone (JS filter, no API)

***

### PAGE 12: Admin — Patient Profile (`/admin/patients/:id`)

**Shows full patient details:**

**Card 1 — Personal Info:**
- Name, Phone, Email, Date of Birth, Address, Gender

**Card 2 — Appointment History (hardcoded per patient):**
| Date | Service | Status | Notes |
|---|---|---|---|
| Mar 17, 2026 | Root Canal | Completed | Treatment done in 2 sessions |
| Feb 10, 2026 | X-Ray | Completed | No fracture found |
| Jan 5, 2026 | Consultation | Completed | Recommended braces |

**Card 3 — Dental History Notes:**
- A textarea showing (hardcoded): *"Patient has mild gum sensitivity. Allergic to Penicillin. Completed RCT on lower molar Jan 2026."*
- "Edit Notes" button — opens editable textarea (local useState, doesn't save — demo only)

**Back button** → returns to `/admin/patients`

***

## 5. React Router Setup (`App.jsx`)

```jsx
<Routes>
  {/* Public */}
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/book-appointment" element={<BookAppointment />} />
  <Route path="/appointment-confirmed" element={<AppointmentConfirmed />} />

  {/* Patient */}
  <Route path="/patient/login" element={<PatientLogin />} />
  <Route path="/patient/dashboard" element={<PatientDashboard />} />

  {/* Admin */}
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
  <Route path="/admin/appointments" element={<AdminAppointments />} />
  <Route path="/admin/patients" element={<AdminPatients />} />
  <Route path="/admin/patients/:id" element={<AdminPatientProfile />} />
</Routes>
```

***

## 6. State Management

No Redux or Zustand needed. Use only:
- `useState` — for form inputs, filter states, login mock, cancel/confirm status changes
- `useNavigate` — for routing after login or form submit
- `useParams` — for patient profile page (`/admin/patients/:id`)
- Props — pass hardcoded data from `data/` files into components

***

## 7. Demo Credentials Summary

| Role | Email | Password |
|---|---|---|
| Patient | patient@demo.com | patient123 |
| Admin | admin@makkahdentalcare.com | admin123 |

***

## 8. Deployment (for Demo)

- Run locally: `npm run dev` → `localhost:5173`
- Or deploy to **Vercel** (free, 1 command): `vercel deploy`
- Share the Vercel link with the doctor for the live demo

***

## 9. What to Demo to the Doctor

When presenting to the clinic owner, walk through in this order:
1. **Home page** — show the clinic name, services, testimonials, location
2. **Services page** — all treatments listed
3. **Book Appointment** — fill the form, hit submit, show confirmation page
4. **Patient Login** → Patient Dashboard — show appointment history, cancel button
5. **Admin Login** → Admin Dashboard → Appointments → Approve/Cancel
6. **Admin Patients → Patient Profile** — show contact details, dental history notes

***

This PRD is complete and self-contained. You can paste the folder structure and data files directly into **Cursor AI** and tell it: *"Build this complete static React + Tailwind app exactly as per the PRD"* — and it will generate the entire project in one shot. Want me to also write the actual starter code for `App.jsx` and the data files to kickstart the build?
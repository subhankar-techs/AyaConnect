# AyaConnect - Care Center Application

A modern, responsive care center application built with React, Vite, and TailwindCSS.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Smooth scrolling navigation with mobile menu
- **Services Section**: Interactive service cards with hover effects
- **Contact Form**: Integrated with EmailJS for direct email sending
- **Accessibility**: Built with accessibility best practices

## Services Offered

1. **Professional Nursing** - Skilled nursing care by licensed professionals
2. **Happy Services** - Wellness programs for mental health and engagement
3. **Elder Care** - Specialized care for seniors with daily living assistance
4. **Patient Care** - Personalized care including rehabilitation and chronic disease management

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. EmailJS Configuration

To enable the contact form, you need to set up EmailJS:

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (service.techssolution@gmail.com)

4. Update the EmailJS configuration in `src/components/Contact.jsx`:
   ```javascript
   const serviceId = 'your_service_id'
   const templateId = 'your_template_id'
   const publicKey = 'your_public_key'
   ```

### 3. Run the Application
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services with cards
│   └── Contact.jsx     # Contact form with EmailJS
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # TailwindCSS styles
```

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
- **Unsplash** - High-quality service images

## Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For any questions or support, please contact: service.techssolution@gmail.com
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const serviceId = 'service_t9f5mfp'
      const templateId = 'template_u7kzibh'
      const publicKey = 'MaVYWRJ0x6v_grrD_'

      const templateParams = {
        form_name: formData.name,
        form_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'service.techssolution@gmail.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-purple-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-12 sm:w-16 h-12 sm:h-16 bg-blue-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Ready to get started? Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="animate-fadeInUp">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start group hover-lift">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">123 Care Street, Health City, HC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start group hover-lift">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start group hover-lift">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">service.techssolution@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group hover-lift">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Hours</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">24/7 Emergency Care Available</p>
                  <p className="text-gray-600 text-xs">Office: Mon-Fri 8AM-6PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-500 to-pink-500 p-4 sm:p-6 rounded-xl text-white animate-pulse-slow">
              <h4 className="font-bold text-base sm:text-lg mb-2">🆘 Emergency Contact</h4>
              <p className="text-red-100 text-xs sm:text-sm">For immediate medical emergencies, call 911 or visit your nearest emergency room.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-custom hover-lift animate-fadeInUp">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-300 text-sm"
                  placeholder="Tell us about your care needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 sm:h-5 w-4 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-green-600 text-center font-medium bg-green-50 p-3 sm:p-4 rounded-xl border border-green-200 text-xs sm:text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center font-medium bg-red-50 p-3 sm:p-4 rounded-xl border border-red-200 text-xs sm:text-sm">
                  ✗ Failed to send message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
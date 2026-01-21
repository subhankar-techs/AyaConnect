const Services = () => {
  const services = [
    {
      id: 'nursing',
      title: 'Professional Nursing',
      description: 'Skilled nursing care provided by licensed professionals for medical needs, medication management, and health monitoring.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🏥',
      features: ['24/7 Care', 'Licensed Staff', 'Medical Monitoring']
    },
    {
      id: 'happy-services',
      title: 'Happy Services',
      description: 'Comprehensive wellness programs designed to promote mental health, social engagement, and overall happiness.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '😊',
      features: ['Wellness Programs', 'Social Activities', 'Mental Health Support']
    },
    {
      id: 'elder-care',
      title: 'Elder Care',
      description: 'Specialized care for seniors including daily living assistance, companionship, and age-appropriate health services.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXwWvH8XCaca5hS-YOhpPnrbeirWSe75YrA&s',
      icon: '👴',
      features: ['Daily Assistance', 'Companionship', 'Senior Specialized']
    },
    {
      id: 'patient-care',
      title: 'Patient Care',
      description: 'Personalized patient care services including rehabilitation support, chronic disease management, and recovery assistance.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🩺',
      features: ['Rehabilitation', 'Disease Management', 'Recovery Support']
    }
  ]

  const handleServiceClick = (service) => {
    alert(`Learn more about ${service.title}. Contact us for detailed information about this service.`)
  }

  return (
    <section id="services" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-purple-200 rounded-full opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Comprehensive healthcare services tailored to meet your unique needs
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-custom overflow-hidden hover-lift cursor-pointer group animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-36 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center text-xl sm:text-2xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold text-xs sm:text-sm group-hover:text-purple-600 transition-colors">
                  <span>Learn More</span>
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 animate-fadeInUp">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
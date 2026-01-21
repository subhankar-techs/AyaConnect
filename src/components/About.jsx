const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 sm:top-20 right-0 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About AyaConnect</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Dedicated to providing exceptional healthcare services with a personal touch
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fadeInUp">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              At AyaConnect, we believe everyone deserves compassionate, professional healthcare. 
              Our team of experienced professionals is committed to providing personalized care 
              that enhances the quality of life for our patients and their families.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center group">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 sm:mr-4 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">24/7 Professional Care</span>
              </div>
              <div className="flex items-center group">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 sm:mr-4 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Experienced Healthcare Professionals</span>
              </div>
              <div className="flex items-center group">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 sm:mr-4 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Personalized Treatment Plans</span>
              </div>
              <div className="flex items-center group">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 sm:mr-4 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Family-Centered Approach</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-custom animate-fadeInUp hover-lift">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start sm:items-center mb-2 sm:mb-3 gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 text-base sm:text-lg">
                    🏆
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Professional Excellence</h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Licensed and certified healthcare professionals with years of experience</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start sm:items-center mb-2 sm:mb-3 gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 text-base sm:text-lg">
                    ❤️
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Compassionate Care</h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">We treat every patient with dignity, respect, and genuine care</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start sm:items-center mb-2 sm:mb-3 gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 text-base sm:text-lg">
                    🏥
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Comprehensive Services</h4>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">From nursing to elder care, we provide complete healthcare solutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white animate-fadeInUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">15+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Happy Patients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
              <div className="text-blue-100 text-xs sm:text-sm">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
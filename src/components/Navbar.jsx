import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`text-xl sm:text-2xl font-bold whitespace-nowrap transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white drop-shadow-lg'
            }`}>AyaConnect</span>
          </div>
          
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <button onClick={() => scrollToSection('home')} className={`text-sm lg:text-base transition-colors font-medium relative group ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-blue-600' : 'bg-blue-300'
              }`}></span>
            </button>
            <button onClick={() => scrollToSection('about')} className={`text-sm lg:text-base transition-colors font-medium relative group ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-blue-600' : 'bg-blue-300'
              }`}></span>
            </button>
            <button onClick={() => scrollToSection('services')} className={`text-sm lg:text-base transition-colors font-medium relative group ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Services
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-blue-600' : 'bg-blue-300'
              }`}></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium text-sm lg:text-base hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md">
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden backdrop-blur-md ${
          isScrolled ? 'bg-white/95 shadow-lg' : 'bg-black/80'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
              isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-300 hover:bg-white/10'
            }`}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
              isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-300 hover:bg-white/10'
            }`}>
              About
            </button>
            <button onClick={() => scrollToSection('services')} className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
              isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-300 hover:bg-white/10'
            }`}>
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
              isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-300 hover:bg-white/10'
            }`}>
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
import { Play } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-jadoo-peach to-white overflow-hidden">
      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-jadoo-navy">Jadoo</h1>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-jadoo-navy hover:text-jadoo-orange transition-colors">
              Destinations
            </a>
            <a href="#" className="text-jadoo-navy hover:text-jadoo-orange transition-colors">
              Hotels
            </a>
            <a href="#" className="text-jadoo-navy hover:text-jadoo-orange transition-colors">
              Flights
            </a>
            <a href="#" className="text-jadoo-navy hover:text-jadoo-orange transition-colors">
              Bookings
            </a>
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-jadoo-navy hover:text-jadoo-orange transition-colors">
              Login
            </button>
            <button className="px-4 py-2 border border-jadoo-navy rounded text-jadoo-navy hover:bg-jadoo-navy hover:text-white transition-colors">
              Sign up
            </button>
            <select className="ml-4 text-jadoo-navy border-none bg-transparent">
              <option>EN</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-jadoo-navy">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="relative z-10 lg:max-w-xl">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="text-jadoo-red font-bold text-sm lg:text-base uppercase tracking-wide">
                  BEST DESTINATIONS AROUND THE WORLD
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-jadoo-navy leading-tight mb-6">
                Travel, enjoy{" "}
                <br className="hidden sm:block" />
                and live a new{" "}
                <br className="hidden sm:block" />
                and full life
              </h1>

              {/* Description */}
              <p className="text-jadoo-gray text-base lg:text-lg mb-8 max-w-md">
                Built Wicket longer admire do barton vanity itself do in it. 
                Preferred to sportsmen it engrossed listening. Park gate 
                sell they west hard for the.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="bg-jadoo-orange hover:bg-jadoo-light-orange text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                  Find out more
                </button>
                
                <button className="flex items-center gap-3 text-jadoo-gray hover:text-jadoo-navy transition-colors">
                  <div className="w-12 h-12 bg-jadoo-red rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                  </div>
                  <span className="font-medium">Play Demo</span>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative mt-12 lg:mt-0">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Airplane decorations */}
                <div className="absolute top-20 right-20 animate-pulse">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-jadoo-orange">
                    <path d="M34.2 9.8L24.4 19.6C24.1 19.9 23.6 19.9 23.3 19.6L16.4 12.7C16.1 12.4 16.1 11.9 16.4 11.6L26.2 1.8C26.5 1.5 27 1.5 27.3 1.8L34.2 8.7C34.5 9 34.5 9.5 34.2 9.8Z" fill="currentColor"/>
                    <path d="M1.8 34.2L11.6 24.4C11.9 24.1 11.9 23.6 11.6 23.3L4.7 16.4C4.4 16.1 3.9 16.1 3.6 16.4L-6.2 26.2C-6.5 26.5 -6.5 27 -6.2 27.3L0.7 34.2C1 34.5 1.5 34.5 1.8 34.2Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute top-32 left-16 animate-pulse">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-jadoo-blue">
                    <path d="M22.8 6.5L16.3 13C16.1 13.2 15.7 13.2 15.5 13L11 8.5C10.8 8.3 10.8 7.9 11 7.7L17.5 1.2C17.7 1 18.1 1 18.3 1.2L22.8 5.7C23 5.9 23 6.3 22.8 6.5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Main hero image */}
              <div className="relative z-10 max-w-lg mx-auto lg:max-w-none">
                <img 
                  src="https://cdn.builder.io/api/v1/assets/c72900c7dedc4220b979711c47f53108/figma-screenshot-b600bf?format=webp&width=800"
                  alt="Happy traveler with backpack sitting on luggage"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional decorative airplanes */}
        <div className="absolute top-40 left-1/4 animate-bounce">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-jadoo-blue opacity-60">
            <path d="M26.6 7.8L19.5 14.9C19.3 15.1 18.9 15.1 18.7 14.9L13.3 9.5C13.1 9.3 13.1 8.9 13.3 8.7L20.4 1.6C20.6 1.4 21 1.4 21.2 1.6L26.6 7C26.8 7.2 26.8 7.6 26.6 7.8Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="absolute bottom-32 right-1/4 animate-pulse">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-jadoo-orange opacity-80">
            <path d="M30.4 8.9L21.7 17.6C21.4 17.9 20.9 17.9 20.6 17.6L14.6 11.6C14.3 11.3 14.3 10.8 14.6 10.5L23.3 1.8C23.6 1.5 24.1 1.5 24.4 1.8L30.4 7.8C30.7 8.1 30.7 8.6 30.4 8.9Z" fill="currentColor"/>
          </svg>
        </div>
      </main>
    </div>
  );
}

import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function AnimatedSection({ children, animation = 'fade-in-up', delay = 0 }: {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Syrebyte
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">Home</a>
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">Features</a>
              <a href="#courses" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">Courses</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors duration-300">About</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="container mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Transform Your Future with Syrebyte
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                  Premium education platform designed to elevate your skills and unlock your potential
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    Start Learning
                  </button>
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105">
                    Explore Courses
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <AnimatedSection animation="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
                Why Choose Syrebyte
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Expert Content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Learn from industry experts with real-world experience and proven teaching methods
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Community</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Join thousands of learners in an active community that supports your growth
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Certifications</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Earn recognized certificates that validate your skills and boost your career
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Career Growth</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Fast-track your career with skills that are in high demand in the job market
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="courses" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <AnimatedSection animation="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
                Popular Courses
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-in-left" delay={100}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Web Development</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Master modern web technologies and build stunning applications
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">AI & Machine Learning</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Dive into artificial intelligence and machine learning fundamentals
                  </p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" delay={300}>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">Mobile Development</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Create amazing mobile apps for iOS and Android platforms
                  </p>
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-in-left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                    Your Success is Our Mission
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    At Syrebyte, we believe that quality education should be accessible to everyone.
                    Our platform combines cutting-edge technology with expert instruction to deliver
                    an unparalleled learning experience.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Join thousands of students who have already transformed their careers with Syrebyte.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-12 rounded-2xl text-white shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">10K+</div>
                      <div className="text-xl">Active Students</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">500+</div>
                      <div className="text-xl">Expert Instructors</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold">1000+</div>
                      <div className="text-xl">Premium Courses</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-white py-12 px-6">
          <AnimatedSection animation="fade-in">
            <div className="container mx-auto text-center">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Syrebyte
              </div>
              <p className="text-slate-400 mb-8">Transform your future with premium education</p>
              <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Contact</a>
              </div>
              <p className="text-slate-500">© 2024 Syrebyte. All rights reserved.</p>
            </div>
          </AnimatedSection>
        </footer>
      </main>
    </div>
  );
}

export default App;

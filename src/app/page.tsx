import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-blue-600 text-white">
        <div className="text-xl font-bold">Try Tailwind</div>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/features" className="hover:text-gray-300">Features</Link>
          <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Build Amazing Websites</h1>
        <p className="text-xl mb-6">We provide the best tools to create stunning and functional websites.</p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-lg text-lg font-semibold">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <img src="/images/icn-easy.png" alt="Feature 1" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Easy to Use</h2>
            <p>Our platform is designed to be user-friendly for everyone.</p>
          </div>
          <div className="text-center">
            <img src="/images/icn-responsive.png" alt="Feature 2" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Responsive Design</h2>
            <p>Your website will look great on any device.</p>
          </div>
          <div className="text-center">
            <img src="/images/icn-performance.png" alt="Feature 3" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">Fast Performance</h2>
            <p>Optimized for speed and performance.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="/images/user1.png" alt="User 1" className="mx-auto mb-4 rounded-full"/>
            <p className="mb-4">"This platform is amazing! It helped me build my website in no time."</p>
            <h3 className="font-semibold">John Doe</h3>
            <span className="text-gray-500">Web Developer</span>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="/images/user2.png" alt="User 2" className="mx-auto mb-4 rounded-full"/>
            <p className="mb-4">"I love how easy it is to use. Highly recommended!"</p>
            <h3 className="font-semibold">Jane Smith</h3>
            <span className="text-gray-500">Designer</span>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="/images/user3.png" alt="User 3" className="mx-auto mb-4 rounded-full"/>
            <p className="mb-4">"The performance is outstanding. My website loads super fast!"</p>
            <h3 className="font-semibold">Mike Johnson</h3>
            <span className="text-gray-500">Entrepreneur</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="mb-4">Perfect for small projects</p>
            <div className="text-2xl font-bold mb-4">$10/month</div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Choose Plan</button>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="mb-4">Great for growing businesses</p>
            <div className="text-2xl font-bold mb-4">$25/month</div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Choose Plan</button>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <p className="mb-4">For large-scale projects</p>
            <div className="text-2xl font-bold mb-4">$50/month</div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Choose Plan</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="space-x-6 mb-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
        <p>&copy; 2025 Try Tailwind. All rights reserved.</p>
      </footer>
    </div>
  );
}

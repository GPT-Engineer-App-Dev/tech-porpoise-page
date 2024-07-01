import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to PropTech Co</h1>
          <p className="text-xl mb-8">
            Revolutionizing the real estate industry with cutting-edge technology.
          </p>
          <Button variant="primary" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            PropTech Co is dedicated to bringing the latest technological advancements to the real estate market. Our mission is to make property management and transactions seamless and efficient.
          </p>
          <img src="/images/about-us.jpg" alt="About Us" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img src="/images/service1.png" alt="Service 1" className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Property Management</h3>
              <p>Efficient and effective property management solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img src="/images/service2.png" alt="Service 2" className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real Estate Transactions</h3>
              <p>Seamless and secure real estate transactions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img src="/images/service3.png" alt="Service 3" className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Market Analysis</h3>
              <p>In-depth market analysis and insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src="/images/client1.jpg" alt="Client 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic">"PropTech Co transformed the way we manage our properties. Highly recommend!"</p>
              <p className="mt-4 font-bold">- John Doe</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src="/images/client2.jpg" alt="Client 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic">"Their market analysis is top-notch. We made informed decisions thanks to their insights."</p>
              <p className="mt-4 font-bold">- Jane Smith</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img src="/images/client3.jpg" alt="Client 3" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="italic">"Seamless transactions and excellent support. Couldn't ask for more."</p>
              <p className="mt-4 font-bold">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <Input type="text" placeholder="Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <Input type="text" placeholder="Subject" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Message" />
            </div>
            <Button variant="primary" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="#" className="text-muted-foreground hover:text-foreground mx-2">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground mx-2">Terms of Service</a>
          </div>
          <div className="mb-4">
            <a href="#" className="text-muted-foreground hover:text-foreground mx-2">Facebook</a>
            <a href="#" className="text-muted-foreground hover:text-foreground mx-2">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground mx-2">LinkedIn</a>
          </div>
          <p>&copy; 2023 PropTech Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
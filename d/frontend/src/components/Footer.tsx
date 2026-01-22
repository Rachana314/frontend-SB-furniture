import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import React from "react";

const StoreHours: React.FC = () => {
  const today = new Date();
  const currentDay = today.toLocaleDateString("en-US", { weekday: "short" }); // e.g., "Mon"
  const currentTime = today.getHours() * 60 + today.getMinutes(); // minutes since midnight

  const hours = {
    Sun: { open: "10:00AM", close: "7:00PM", openMinutes: 600, closeMinutes: 1140 },
    Mon: { open: "10:00AM", close: "7:00PM", openMinutes: 600, closeMinutes: 1140 },
    Tue: { open: "10:00AM", close: "7:00PM", openMinutes: 600, closeMinutes: 1140 },
    Wed: { open: "10:00AM", close: "7:00PM", openMinutes: 600, closeMinutes: 1140 },
    Thu: { open: "10:00AM", close: "7:00PM", openMinutes: 600, closeMinutes: 1140 },
    Fri: { open: "10:00AM", close: "7:00PM", openMinutes: 600, closeMinutes: 1140 },
    Sat: { open: "11:00AM", close: "5:00PM", openMinutes: 660, closeMinutes: 1020 },
  };

  const todayHours = hours[currentDay as keyof typeof hours];
  const isOpen =
    currentTime >= todayHours.openMinutes &&
    currentTime <= todayHours.closeMinutes;

  return (
    <div className="flex items-start gap-3 mb-4">
      <FaClock className="mt-1" />
      <div>
        {Object.entries(hours).map(([day, { open, close }]) => (
          <p
            key={day}
            className={day === currentDay ? "font-bold text-green-500" : ""}
          >
            {day} / {open} - {close}
          </p>
        ))}
        <p className={`mt-2 ${isOpen ? "text-green-600" : "text-red-600"}`}>
          {isOpen ? "Open Now" : "Closed Now"}
        </p>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      {/* EMI Info Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg space-y-6 text-gray-800">
        <h1 className="text-3xl font-extrabold text-blue-900">
          Easy EMI Options at SB Furniture Nepal – Furnish Your Home Today
        </h1>
        <p>
          Shop your favorite furniture with EMI options at SB Furniture Nepal.
          No processing fees, flexible tenure, and hassle-free approval for
          credit cardholders.
        </p>

        <h2 className="text-2xl font-bold text-blue-800">
          Furnish Your Dream Home with SB Furniture Nepal’s Easy EMI Plans
        </h2>
        <p>
          At SB Furniture Nepal, we make it easier for you to own the furniture
          you love with our hassle-free EMI facility. Whether you’re shopping
          for a new bedroom set, a stylish sofa, or a complete home makeover,
          our easy EMI options let you bring home quality furniture without the
          financial strain.
        </p>

        <h3 className="text-xl font-semibold mt-4">
          How Does the EMI Facility Work?
        </h3>
        <p>
          Our EMI facility is designed for simplicity and convenience. Here’s
          how it works:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Eligibility Criteria:</b> Must be a credit card holder
            with a pre-approved credit limit from the bank.
          </li>
          <li>
            <b>
              EMI facility is subject to credit approval from the bank.
            </b>
          </li>
          <li>
            <b>No EMI loan processing fee,</b> making it more
            affordable for you.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">
          Why Choose SB Furniture Nepal’s EMI Option?
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>No Processing Fees:</b> Save money while financing your
            furniture.
          </li>
          <li>
            <b>Flexible Tenures:</b> Choose an EMI plan that suits
            your financial needs.
          </li>
          <li>
            <b>Convenient Process:</b> Quick and hassle-free
            application and approval.
          </li>
          <li>
            <b>Access to Premium Furniture:</b> Furnish your home with
            high-quality furniture without upfront costs.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Terms & Conditions Apply</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>EMI approval is subject to the bank’s verification process.</li>
          <li>
            Customers must adhere to the specific terms set by the respective
            bank.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">
          Shop Furniture with EMI in Nepal Today!
        </h3>
        <p>
          With SB Furniture Nepal’s EMI options, you can make smart, flexible
          financial decisions for your home, similar to making wise investments.
          Visit our store or shop online to explore premium furniture
          collections that will enhance your home without the upfront costs.
          Start building your dream home today with affordable EMI plans, and
          enjoy the benefits of flexible payments.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Lagankhel Patan Hospital Road, Lalitpur Bagmati Pradesh (NP)
                Nepal
              </p>
            </div>
            <hr className="border-gray-700 mb-4" />

            <div className="flex items-start gap-3 mb-4">
              <FaPhone className="mt-1" />
              <p>+977 01-5423864, +977 01-5440747, +977 01-5448418</p>
            </div>
            <hr className="border-gray-700 mb-4" />

            <div className="flex items-start gap-3 mb-4">
              <FaEnvelope className="mt-1" />
              <p>info@sbfurniturenepal.com</p>
            </div>
            <hr className="border-gray-700 mb-4" />

            {/* Dynamic Store Hours */}
            <StoreHours />
          </div>

          {/* More About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">More About us</h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>My Orders</li>
              <li>Shipping and Delivery</li>
              <li>Warranty</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Price Disclaimer</li>
              <li>Register Your Mattress</li>
              <li>EMI</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Be the first to know</h2>
            <p className="mb-2">NEWSLETTER SIGNUP:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your email..."
                className="px-3 py-2 text-white w-full bg-[#29323f] rounded"
              />
              <button className="bg-[#29323f] px-4">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 px-6 py-4 flex justify-between items-center">
          <p className="text-xs">
            Copyright © S.N. Joshi & Sons Company Pvt. Ltd
          </p>
          <img src="/fonepay.png" alt="Fonepay" className="h-6" />
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/977XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 text-white text-2xl shadow-lg"
        >
          <FaWhatsapp />
        </a>
      </footer>
    </>
  );
}

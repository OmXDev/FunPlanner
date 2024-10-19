import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-600 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We are passionate about creating memorable events that bring people together. Our team of experts is dedicated to providing the best experiences tailored to your needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to plan, organize, and execute events that leave a lasting impression on our clients and their guests.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              We envision a world where every event is a unique experience, filled with joy and unforgettable moments.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in integrity, creativity, and excellence. Our commitment to these values ensures that we deliver the best services to our clients.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h3>
            <p className="text-gray-600">
              Our team consists of experienced professionals who are passionate about making your event a success.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

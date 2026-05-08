import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our blockchain development services? Reach out
            to our team and let's discuss how we can help bring your Web3 vision
            to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Felix's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co/tTgsLrx5/David-Coutu-owner-beyond-cloud-advisor.jpg"
                alt="David Coutu"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">David Coutu</h3>
              <p className="text-gray-600 mb-4">CEO and Founder</p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:david@dantelabs.us"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  david@dantelabs.us
                </a>
                <a
                  href="https://www.linkedin.com/in/davidcoutu001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Love's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ibb.co/Q3DWSb1S/Christian-Eigner.jpg"
                alt="Christian Einger"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Christian Einger
              </h3>
              <p className="text-gray-600 mb-4">Global Partner</p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:christian@dantelabs.us"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  christian@dantelabs.us
                </a>
                <a
                  href="https://www.linkedin.com/in/christian-eigner-68979a162/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                {/* <a
                  href="tel:+46760149508"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  076-014 95 08
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

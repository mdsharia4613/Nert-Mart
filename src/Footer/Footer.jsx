import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
    return (
        <div className="bg-[#f8f9fa]">
            <footer className=" text-gray-700 b mt-10">
                <div className="max-w-7xl mx-auto  py-10 grid md:grid-cols-6 sm:grid-cols-2 gap-8">
                    {/* Logo and Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <img
                                src={logo}
                                alt="Nest Logo"
                                className="w-12"
                            />
                            <div>
                                <h2 className="text-3xl heading font-bold">Nest</h2>
                                <p className="text-xs text">
                                    MART & GROCERY
                                </p>
                            </div>
                        </div>
                        <p>Awesome grocery store website
                            template</p>
                        
                        <ul className="text-sm space-y-3 mt-5">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1 text-green-600" />
                                <p><span className="cpr font-semibold">Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 USA</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-green-600" />
                                <div>
                                    <span className="crp font-semibold">Call Us:</span> (+91)-540-025-124553
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-green-600" /> 
                                <div>
                                    <span className="cpr font-semibold">Email: </span>
                                    sale@Nest.com
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaClock className="text-green-600" /> 
                                <div>
                                    <span className="cpr font-semibold">Hours:</span> 10:00 - 18:00, Mon - Sat
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="about">About Us</Link></li>
                            <li><Link to="/delivery">Delivery Information</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/support">Support Center</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Account</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/signin">Sign In</Link></li>
                            <li><Link to="/cart">View Cart</Link></li>
                            <li><Link to="/wishlist">My Wishlist</Link></li>
                            <li><Link to="/track-order">Track My Order</Link></li>
                            <li><Link to="/help">Help Ticket</Link></li>
                            <li><Link to="/shipping">Shipping Details</Link></li>
                            <li><Link to="/compare">Compare Products</Link></li>
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Corporate</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/vendor">Become a Vendor</Link></li>
                            <li><Link to="/affiliate">Affiliate Program</Link></li>
                            <li><Link to="/farm">Farm Business</Link></li>
                            <li><Link to="/careers">Farm Careers</Link></li>
                            <li><Link to="/suppliers">Our Suppliers</Link></li>
                            <li><Link to="/accessibility">Accessibility</Link></li>
                            <li><Link to="/promotions">Promotions</Link></li>
                        </ul>
                    </div>

                    {/* Popular */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Popular</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/">Milk & Flavoured Milk</Link></li>
                            <li><Link to="/">Butter and Margarine</Link></li>
                            <li><Link to="/">Eggs Substitutes</Link></li>
                            <li><Link to="/">Marmalades</Link></li>
                            <li><Link to="/">Sour Cream and Dips</Link></li>
                            <li><Link to="/">Tea & Kombucha</Link></li>
                            <li><Link to="/">Cheese</Link></li>
                        </ul>
                    </div>

                   {/* Installtion app */}

                    <div>
                        <h3 className="font-semibold mb-3 text-lg">Install App</h3>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            {/* App Store */}
                            <a
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="Download on the App Store"
                                    className="h-14"
                                />
                            </a>

                            {/* Google Play */}
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="h-14"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
                    © 2025 Nest Mart & Grocery. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;

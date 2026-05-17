import { Outlet, Link, useLocation } from "react-router";
import { Apple, Home, FileText, Calendar, CreditCard, LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { Toaster } from "./ui/sonner";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Apple className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-green-900">BalancedBites</span>
          </Link>

          {!isHomePage && (
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors">
                Dashboard
              </Link>
              <Link to="/meal-plan" className="text-gray-700 hover:text-green-600 transition-colors">
                Meal Plan
              </Link>
              <Link to="/subscription" className="text-gray-700 hover:text-green-600 transition-colors">
                Subscription
              </Link>
              <Link to="/consultation" className="text-gray-700 hover:text-green-600 transition-colors">
                Consultation
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Toaster />

      {/* Footer */}
      <footer className="border-t bg-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Apple className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-green-900">BalancedBites</span>
              </div>
              <p className="text-sm text-gray-600">
                Diabetes-friendly nutrition and meal delivery to help you manage blood sugar and lower A1C.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Diabetes Assessment</li>
                <li>Carb-Controlled Meals</li>
                <li>Meal Delivery</li>
                <li>CDCES Consultations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>support@balancedbites.com</li>
                <li>1-800-HEALTHY</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            © 2026 BalancedBites. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

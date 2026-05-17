import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle2, Apple, Heart, Calendar, Truck } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Take Control of Your Diabetes with Personalized Nutrition
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Balance your blood sugar and improve your A1C with custom meal plans designed
            specifically for diabetes management, backed by certified diabetes educators.
          </p>
          <Link to="/survey">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
              Start Your Health Assessment
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How BalancedBites Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>1. Diabetes Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Share your diabetes type, current A1C, blood sugar patterns, and dietary goals with us.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>2. Diabetes Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work with Certified Diabetes Care and Education Specialists (CDCES) for personalized guidance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Apple className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>3. Carb-Controlled Meals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get meals with precise carb counts, balanced macros, and low glycemic index foods.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>4. Meal Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get fresh, prepared meals delivered to your door every two weeks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Science-Backed Diabetes Nutrition</h2>
              <p className="text-gray-600 mb-6">
                BalancedBites is built on evidence-based diabetes nutrition principles to help you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lower your A1C with consistent carb control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Stabilize blood sugar throughout the day</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Reduce insulin resistance with the right foods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Prevent diabetes complications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Achieve and maintain a healthy weight</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Simplify meal planning and carb counting</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-4">Every Meal Includes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Exact carb counts per serving
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Low glycemic index ingredients
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Balanced protein and healthy fats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Blood sugar impact estimates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    CDCES-approved recipes
                  </li>
                </ul>
                <Link to="/survey">
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Better Manage Your Diabetes?</h2>
          <p className="text-xl mb-8 text-green-50">
            Join thousands who've improved their A1C and blood sugar control with BalancedBites.
          </p>
          <Link to="/survey">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Complete Health Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

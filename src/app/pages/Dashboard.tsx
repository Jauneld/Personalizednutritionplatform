import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Calendar,
  TrendingDown,
  Apple,
  Video,
  CheckCircle2,
  Clock,
  Package,
  Heart,
} from "lucide-react";

export function Dashboard() {
  const upcomingDelivery = {
    date: "May 24, 2026",
    status: "Preparing",
    meals: 21,
    trackingNumber: "BB-2026-05-24-A1",
  };

  const nextConsultation = {
    dietitian: "Dr. Sarah Martinez, CDCES",
    date: "May 20, 2026",
    time: "2:00 PM",
    type: "A1C Review & Adjustment",
  };

  const healthMetrics = {
    currentA1C: 7.2,
    previousA1C: 8.1,
    targetA1C: 6.5,
    avgBloodSugar: 152,
    timeInRange: 68,
    dailyCarbTarget: 150,
    adherence: 85,
  };

  const recentMeals = [
    { date: "Today", meal: "Breakfast", name: "Greek Yogurt Parfait", completed: true },
    { date: "Today", meal: "Lunch", name: "Grilled Chicken Salad", completed: true },
    { date: "Today", meal: "Dinner", name: "Baked Salmon", completed: false },
    { date: "Yesterday", meal: "Dinner", name: "Chicken Stir-Fry", completed: true },
  ];

  const weeklyProgress = [
    { day: "Mon", adherence: 95 },
    { day: "Tue", adherence: 90 },
    { day: "Wed", adherence: 85 },
    { day: "Thu", adherence: 80 },
    { day: "Fri", adherence: 88 },
    { day: "Sat", adherence: 92 },
    { day: "Sun", adherence: 85 },
  ];

  const a1cProgress =
    ((healthMetrics.previousA1C - healthMetrics.currentA1C) /
      (healthMetrics.previousA1C - healthMetrics.targetA1C)) *
    100;

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Here's your diabetes management overview</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current A1C</p>
                  <p className="text-2xl font-bold">{healthMetrics.currentA1C}%</p>
                  <p className="text-xs text-green-600 mt-1">
                    ↓ {(healthMetrics.previousA1C - healthMetrics.currentA1C).toFixed(1)}% from last test
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Blood Sugar</p>
                  <p className="text-2xl font-bold">{healthMetrics.avgBloodSugar}</p>
                  <p className="text-xs text-gray-500 mt-1">mg/dL (7-day avg)</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Time in Range</p>
                  <p className="text-2xl font-bold">{healthMetrics.timeInRange}%</p>
                  <p className="text-xs text-gray-500 mt-1">70-180 mg/dL</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Carb Adherence</p>
                  <p className="text-2xl font-bold">{healthMetrics.adherence}%</p>
                  <p className="text-xs text-gray-500 mt-1">{healthMetrics.dailyCarbTarget}g target</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Apple className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  A1C Progress
                </CardTitle>
                <CardDescription>
                  You're {Math.round(a1cProgress)}% of the way to your target A1C!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Previous: {healthMetrics.previousA1C}%</span>
                      <span className="font-semibold">
                        Current: {healthMetrics.currentA1C}%
                      </span>
                      <span>Goal: {healthMetrics.targetA1C}%</span>
                    </div>
                    <Progress value={a1cProgress} className="h-3" />
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-800">
                      <strong>Excellent work!</strong> Your A1C has improved by{" "}
                      {(healthMetrics.previousA1C - healthMetrics.currentA1C).toFixed(1)} percentage points.
                      Consistent carb control is paying off. Keep following your meal plan!
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <p className="text-sm text-blue-800 mb-1">7-Day Avg</p>
                      <p className="text-xl font-bold text-blue-900">{healthMetrics.avgBloodSugar} mg/dL</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                      <p className="text-sm text-orange-800 mb-1">Time in Range</p>
                      <p className="text-xl font-bold text-orange-900">{healthMetrics.timeInRange}%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Adherence */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Carb Target Adherence</CardTitle>
                <CardDescription>How consistently you stayed within your daily carb goal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-2 h-48">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-end h-40">
                        <div
                          className="w-full bg-green-500 rounded-t-lg transition-all"
                          style={{ height: `${day.adherence}%` }}
                        ></div>
                      </div>
                      <div className="text-xs font-medium text-gray-600">{day.day}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Meals */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Meals</CardTitle>
                  <Link to="/meal-plan">
                    <Button variant="outline" size="sm">
                      View Full Plan
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMeals.map((meal, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            meal.completed ? "bg-green-100" : "bg-gray-100"
                          }`}
                        >
                          {meal.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold">{meal.name}</p>
                          <p className="text-sm text-gray-600">
                            {meal.date} • {meal.meal}
                          </p>
                        </div>
                      </div>
                      {meal.completed && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Completed
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Next Consultation */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Video className="w-5 h-5" />
                  Upcoming Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-blue-800 mb-1">Dietitian</p>
                  <p className="font-semibold text-blue-900">{nextConsultation.dietitian}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-800 mb-1">Date & Time</p>
                  <p className="font-semibold text-blue-900">
                    {nextConsultation.date} at {nextConsultation.time}
                  </p>
                </div>
                <Badge className="bg-blue-600">{nextConsultation.type}</Badge>
                <Link to="/consultation" className="block">
                  <Button variant="secondary" className="w-full mt-2">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Next Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  Next Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Delivery Date</p>
                  <p className="font-semibold">{upcomingDelivery.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    {upcomingDelivery.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Meals Included</p>
                  <p className="font-semibold">{upcomingDelivery.meals} meals</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tracking Number</p>
                  <p className="text-sm font-mono">{upcomingDelivery.trackingNumber}</p>
                </div>
                <Link to="/subscription" className="block">
                  <Button variant="outline" className="w-full mt-2">
                    Manage Subscription
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/meal-plan" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Apple className="w-4 h-4 mr-2" />
                    View Meal Plan
                  </Button>
                </Link>
                <Link to="/consultation" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </Link>
                <Link to="/subscription" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Update Delivery
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { CheckCircle2, Clock, Flame, Apple } from "lucide-react";

const mockMealPlan = {
  profileSummary: {
    diabetesType: "Type 2 Diabetes",
    a1c: "7.2%",
    calorieTarget: 1800,
    dailyCarbTarget: 150,
    reviewedBy: "Dr. Sarah Martinez, RD, CDCES",
  },
  weeklyPlan: {
    monday: [
      {
        meal: "Breakfast",
        name: "Greek Yogurt Parfait with Berries",
        calories: 320,
        protein: 18,
        carbs: 35,
        fiber: 6,
        netCarbs: 29,
        fat: 10,
        time: "8:00 AM",
        glycemicLoad: "Low",
        description: "Low-fat Greek yogurt layered with fresh berries and a sprinkle of granola",
      },
      {
        meal: "Lunch",
        name: "Grilled Chicken Salad with Quinoa",
        calories: 450,
        protein: 42,
        carbs: 28,
        fiber: 7,
        netCarbs: 21,
        fat: 18,
        time: "12:30 PM",
        glycemicLoad: "Low",
        description: "Mixed greens with grilled chicken, cherry tomatoes, cucumber, quinoa, and olive oil dressing",
      },
      {
        meal: "Dinner",
        name: "Baked Salmon with Roasted Vegetables",
        calories: 520,
        protein: 38,
        carbs: 32,
        fiber: 9,
        netCarbs: 23,
        fat: 25,
        time: "6:30 PM",
        glycemicLoad: "Low",
        description: "Wild-caught salmon with broccoli, bell peppers, and a small portion of quinoa",
      },
      {
        meal: "Snack",
        name: "Almonds and Apple Slices",
        calories: 180,
        protein: 6,
        carbs: 18,
        fiber: 5,
        netCarbs: 13,
        fat: 11,
        time: "3:00 PM",
        glycemicLoad: "Low",
        description: "A small handful of raw almonds with fresh apple slices",
      },
    ],
    tuesday: [
      {
        meal: "Breakfast",
        name: "Vegetable Omelet with Toast",
        calories: 340,
        protein: 22,
        carbs: 25,
        fiber: 5,
        netCarbs: 20,
        fat: 18,
        time: "8:00 AM",
        glycemicLoad: "Low",
        description: "Three-egg omelet with spinach, mushrooms, bell peppers, and one slice whole grain toast",
      },
      {
        meal: "Lunch",
        name: "Turkey and Avocado Wrap",
        calories: 420,
        protein: 32,
        carbs: 35,
        fiber: 8,
        netCarbs: 27,
        fat: 18,
        time: "12:30 PM",
        glycemicLoad: "Medium",
        description: "Whole wheat wrap with lean turkey, avocado, lettuce, and tomato",
      },
      {
        meal: "Dinner",
        name: "Chicken Stir-Fry with Cauliflower Rice",
        calories: 420,
        protein: 36,
        carbs: 28,
        fiber: 8,
        netCarbs: 20,
        fat: 18,
        time: "6:30 PM",
        glycemicLoad: "Low",
        description: "Stir-fried chicken with mixed vegetables and cauliflower rice",
      },
      {
        meal: "Snack",
        name: "Celery with Almond Butter",
        calories: 150,
        protein: 5,
        carbs: 8,
        fiber: 3,
        netCarbs: 5,
        fat: 12,
        time: "3:00 PM",
        glycemicLoad: "Low",
        description: "Fresh celery sticks with natural almond butter",
      },
    ],
  },
};

export function MealPlan() {
  const [selectedDay, setSelectedDay] = useState("monday");

  const getDayMeals = (day: string) => {
    return mockMealPlan.weeklyPlan[day as keyof typeof mockMealPlan.weeklyPlan] || [];
  };

  const totalDailyCalories = getDayMeals(selectedDay).reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Diabetes Meal Plan</h1>
          <p className="text-gray-600">
            Carb-controlled meals designed to help stabilize blood sugar, reviewed by a CDCES.
          </p>
        </div>

        {/* Profile Summary */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Plan Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Diabetes Type</p>
                <p className="font-semibold">{mockMealPlan.profileSummary.diabetesType}</p>
                <p className="text-xs text-gray-500 mt-1">Current A1C: {mockMealPlan.profileSummary.a1c}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Daily Calorie Target</p>
                <p className="font-semibold">{mockMealPlan.profileSummary.calorieTarget} cal</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Daily Carb Target</p>
                <p className="font-semibold">{mockMealPlan.profileSummary.dailyCarbTarget}g carbs</p>
                <p className="text-xs text-gray-500 mt-1">~50g per meal</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Reviewed By</p>
                <p className="font-semibold text-sm">{mockMealPlan.profileSummary.reviewedBy}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Meal Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Day Selector */}
          <Card>
            <CardHeader>
              <CardTitle>Select Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(
                  (day) => (
                    <Button
                      key={day}
                      variant={selectedDay === day ? "default" : "outline"}
                      className={`w-full justify-start ${
                        selectedDay === day ? "bg-green-600 hover:bg-green-700" : ""
                      }`}
                      onClick={() => setSelectedDay(day)}
                    >
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </Button>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Meals for Selected Day */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold capitalize">{selectedDay}'s Meals</h2>
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <Flame className="w-5 h-5 text-green-600" />
                <span className="font-semibold">{totalDailyCalories} cal total</span>
              </div>
            </div>

            {getDayMeals(selectedDay).map((mealData, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge className="mb-2">{mealData.meal}</Badge>
                      <CardTitle>{mealData.name}</CardTitle>
                      <CardDescription className="mt-2">{mealData.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {mealData.time}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-3">
                    <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{mealData.carbs}g</p>
                      <p className="text-xs text-gray-600">Total Carbs</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{mealData.netCarbs}g</p>
                      <p className="text-xs text-gray-600">Net Carbs</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold">{mealData.fiber}g</p>
                      <p className="text-xs text-gray-600">Fiber</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold">{mealData.protein}g</p>
                      <p className="text-xs text-gray-600">Protein</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-bold mt-1">{mealData.glycemicLoad}</p>
                      <p className="text-xs text-gray-600">GL Impact</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t text-sm text-gray-600">
                    <span className="font-semibold">{mealData.calories} calories</span> • {mealData.fat}g fat
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-4 pt-4">
              <Link to="/subscription" className="flex-1">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Subscribe to Meal Delivery
                </Button>
              </Link>
              <Link to="/consultation">
                <Button variant="outline" size="lg">
                  Request Plan Adjustment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

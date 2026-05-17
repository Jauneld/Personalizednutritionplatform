import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Checkbox } from "../components/ui/checkbox";
import { Textarea } from "../components/ui/textarea";
import { Progress } from "../components/ui/progress";

export function Survey() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    diabetesType: "",
    a1c: "",
    diabetesDuration: "",
    medications: [] as string[],
    dietaryRestrictions: [] as string[],
    preferences: "",
    bloodSugarGoal: "",
    needConsultation: "",
  });

  const medicationOptions = [
    "Insulin (Long-acting)",
    "Insulin (Rapid-acting)",
    "Metformin",
    "Sulfonylureas",
    "GLP-1 agonists",
    "SGLT2 inhibitors",
    "DPP-4 inhibitors",
    "No medications",
  ];

  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Dairy-Free",
    "Low-Sodium",
    "Low-Carb",
    "Kosher",
    "Halal",
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (formData.needConsultation === "yes") {
      navigate("/consultation");
    } else {
      navigate("/meal-plan");
    }
  };

  const toggleMedication = (medication: string) => {
    setFormData((prev) => ({
      ...prev,
      medications: prev.medications.includes(medication)
        ? prev.medications.filter((m) => m !== medication)
        : [...prev.medications, medication],
    }));
  };

  const toggleDietary = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(option)
        ? prev.dietaryRestrictions.filter((d) => d !== option)
        : [...prev.dietaryRestrictions, option],
    }));
  };

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Diabetes Assessment</h1>
          <p className="text-gray-600 mb-4">
            Help us understand your diabetes management to create a personalized carb-controlled meal plan.
          </p>
          <Progress value={(step / totalSteps) * 100} className="h-2" />
          <p className="text-sm text-gray-500 mt-2">
            Step {step} of {totalSteps}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Basic Information"}
              {step === 2 && "Diabetes Details"}
              {step === 3 && "Current Medications"}
              {step === 4 && "Blood Sugar Goals"}
              {step === 5 && "Diabetes Educator"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Tell us a bit about yourself"}
              {step === 2 && "Share your diabetes type and recent A1C"}
              {step === 3 && "What medications are you currently taking?"}
              {step === 4 && "Your target blood sugar range and food preferences"}
              {step === 5 && "Connect with a Certified Diabetes Care Specialist?"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="font-normal">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="font-normal">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-normal">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-3">
                  <Label>Diabetes Type</Label>
                  <RadioGroup
                    value={formData.diabetesType}
                    onValueChange={(value) => setFormData({ ...formData, diabetesType: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="type1" id="type1" />
                      <Label htmlFor="type1" className="font-normal">Type 1 Diabetes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="type2" id="type2" />
                      <Label htmlFor="type2" className="font-normal">Type 2 Diabetes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prediabetes" id="prediabetes" />
                      <Label htmlFor="prediabetes" className="font-normal">Prediabetes</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="a1c">Most Recent A1C (%)</Label>
                  <Input
                    id="a1c"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 7.2"
                    value={formData.a1c}
                    onChange={(e) => setFormData({ ...formData, a1c: e.target.value })}
                  />
                  <p className="text-xs text-gray-500">Target A1C for most people with diabetes is below 7%</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">How long have you had diabetes?</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 5 years"
                    value={formData.diabetesDuration}
                    onChange={(e) => setFormData({ ...formData, diabetesDuration: e.target.value })}
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  This helps us ensure your meals work with your diabetes management plan.
                </p>
                {medicationOptions.map((medication) => (
                  <div key={medication} className="flex items-center space-x-2">
                    <Checkbox
                      id={medication}
                      checked={formData.medications.includes(medication)}
                      onCheckedChange={() => toggleMedication(medication)}
                    />
                    <Label htmlFor={medication} className="font-normal cursor-pointer">
                      {medication}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="bloodSugarGoal">Target Blood Sugar Range (mg/dL)</Label>
                  <Input
                    id="bloodSugarGoal"
                    placeholder="e.g., 80-130 before meals"
                    value={formData.bloodSugarGoal}
                    onChange={(e) => setFormData({ ...formData, bloodSugarGoal: e.target.value })}
                  />
                  <p className="text-xs text-gray-500">
                    ADA recommends 80-130 mg/dL before meals and less than 180 mg/dL after meals
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferences">Food Preferences & Restrictions</Label>
                  <Textarea
                    id="preferences"
                    placeholder="List any food allergies, dislikes, or dietary preferences (vegetarian, low-carb, etc.)..."
                    value={formData.preferences}
                    onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="space-y-3">
                  <Label>Additional Dietary Restrictions</Label>
                  {dietaryOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.dietaryRestrictions.includes(option)}
                        onCheckedChange={() => toggleDietary(option)}
                      />
                      <Label htmlFor={option} className="font-normal cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  A Certified Diabetes Care and Education Specialist (CDCES) can provide personalized
                  guidance on managing your diabetes through nutrition, including insulin-to-carb ratios
                  and meal timing strategies.
                </p>
                <RadioGroup
                  value={formData.needConsultation}
                  onValueChange={(value) => setFormData({ ...formData, needConsultation: value })}
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer flex-1">
                      <div className="font-semibold">Yes, connect me with a CDCES</div>
                      <div className="text-sm text-gray-600">
                        Get expert help with carb counting, medication timing, and blood sugar goals
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-normal cursor-pointer flex-1">
                      <div className="font-semibold">No, just create my meal plan</div>
                      <div className="text-sm text-gray-600">
                        Generate a diabetes-friendly meal plan based on my assessment
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {step === totalSteps ? "Complete" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

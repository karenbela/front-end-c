let person = {
    firstName: "Karen Kudemus",
    weight: 80, 
    height: 1.72, 

    calculateBMI: function() {
        let bmi = this.weight / (this.height * this.height);
        console.log("BMI: " + bmi);

        if (bmi < 16.0) {
            console.log("Kategori: Severely Underweight");
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            console.log("Kategori: Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log("Kategori: Normal");
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            console.log("Kategori: Overweight");
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            console.log("Kategori: Moderately Obese");
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            console.log("Kategori: Severely Obese");
        } else {
            console.log("Kategori: Morbidly Obese");
        }
    }
};

person.calculateBMI();

function round2Decimals(num){
    return Math.round((num + Number.EPSILON) * 100) / 100
}

export function calculateBmi(heightInCentimeters, weightInKilograms){
    let heightInMeters = heightInCentimeters/100;
    let bmi = round2Decimals(weightInKilograms/(heightInMeters*heightInMeters));
    return bmi;
}

export function generateResultAndRecommendation(bmi){
    const resultAndRecommendation = {};
    if (bmi < 18.5){
        resultAndRecommendation['result'] = "Estás en el rango de bajo peso";
        resultAndRecommendation['recommendation'] = "Te recomendamos agregar a tu dieta aderezos, licuado de frutas, proteína y una buena cantidad de carbohidratos. \n ¡Ánimo que todo se puede!";
    } else if (bmi >= 18.5 && bmi < 25.0) {
        resultAndRecommendation['result'] = "Estás en un peso normal";
        resultAndRecommendation['recommendation'] = "Perfecto, sigue alimentándote bien y si no haces ejercicio, implementalo a tu vida. El balance es importante.";
    } else if (bmi >= 25.0 && bmi < 30.0) {
        resultAndRecommendation['result'] = "Estás en sobrepeso";
        resultAndRecommendation['recommendation'] = "Por tu bien, te recomendamos evitar el consumo de alimentos ultraprocesados, altos en sodio, azúcar, grasas saturadas y grasas trans. \n Puedes implementar a tu vida el deporte, ir al gimnasio o hacer ejercicios desde casa. Toma entre 6 u 8 vasos al día \n¡Ánimo que todo se puede!";
    } else if (bmi >= 30.0 && bmi < 34.9) {
        resultAndRecommendation['result'] = "Estás en obesidad grado I";
        resultAndRecommendation['recommendation'] = "Intenta equilibrar tus platos con una buena porción de proteínas, carbohidratos y bastantes verduras. \nPuedes implementar a tu vida el deporte, ir al gimnasio o hacer ejercicios desde casa. \nPor tu bien, te recomendamos visitar a un profesional para una ayuda más exacta. \n ¡Ánimo que todo se puede!";
    } else if (bmi >= 34.9 && bmi < 40.0) {
        resultAndRecommendation['result'] = "Estás en obesidad grado II";
        resultAndRecommendation['recommendation'] = "Por tu bien, te recomendamos visitar a un profesional para una ayuda más exacta. \nTe recomendamos mejorar tu nutrición e implementar el ejercicio en tu vida. \n ¡Ánimo que todo se puede!";
    } else {
        resultAndRecommendation['result'] = "Estás en obesidad grado III o mórbida.";
        resultAndRecommendation['recommendation'] = "Por favor, solicita información a expertos lo antes posible. \nLa obesidad mórbida daña severamente tu salud. \n¡Ánimo que todo se puede!";
    }
    return resultAndRecommendation;
}
export class Person {
    constructor(age, keywords) {
        this.age = age;
        this.keywords = keywords;
    }
}


export function compareUsers (person_a, person_b, max_age_diff=20) {
    var num_same_interests = 0;
    var age_diff = Math.abs(person_a.age - person_b.age);
    if (age_diff > max_age_diff) {
        return 0;
    }

    for (var i = 0; i < person_a.keywords.length; i++) {
        for (var j = 0; j < person_b.keywords.length; j++) {
            if (person_a.keywords[i].toLowerCase() == person_b.keywords[j].toLowerCase()) {
                num_same_interests+=0.2;
            }
        }
    }
    var age = 1/age_diff*0.6
    if(age_diff==0){
        age=0.6
    }
    return (age + num_same_interests*0.4);
}

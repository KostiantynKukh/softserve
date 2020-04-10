class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.recipeList = [];
    }

    getInfo() {
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
            recipes: this.recipeList,
        }
    }

    addRecipe(recipeObj) {
        this.recipeList.push(recipeObj);
    }
}

class Recipe {
    constructor(name, ingridients, rules) {
        this.name = name;
        this.ingridients = ingridients;
        this.rules = rules;
    }

    getRecipe() {
        return {
            name: this.name,
            ingridients: this.ingridients,
            rules: this.rules,
        }
    }
}
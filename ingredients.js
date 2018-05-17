var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
i = 0;
console.log("WHILE loop that prints out the contents of ingredients:");
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("FOR loop that prints out the contents of ingredients:");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("FOR loop that prints out the contents of ingredients backwards:");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[(ingredients.length - 1) - i]);
}

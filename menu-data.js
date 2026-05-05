// ============================================================
// MENU DATA — edit this file to update the menu display
// ============================================================

// Set this to the Monday of your first "Week 1" rotation
const ROTATION_START_DATE = new Date(2026, 4, 4); // Monday 4 May 2026 = Week 1

// Each day has 3 options. Each option has:
//   dish  — the main meal name
//   sides — starch / accompaniment shown smaller below

const MENUS = {
  week1: {
    monday: {
      option1:    { dish: "Meatballs",                                          sides: "Spaghetti" },
      option2:    { dish: "Chicken Stir-Fry",                                   sides: "Parsley Rice" },
      vegetarian: { dish: "Veg & Barley Plant-based Stir-Fry",                 sides: "" },
    },
    tuesday: {
      option1:    { dish: "Beef Chuck",                                         sides: "Mash Potato" },
      option2:    { dish: "Roasted Chicken",                                    sides: "Savoury Rice" },
      vegetarian: { dish: "Cheesy Baked Butternut",                             sides: "Creamy Spinach & Sweet Potato" },
    },
    wednesday: {
      option1:    { dish: "Fried Fish",                                         sides: "Yellow Rice" },
      option2:    { dish: "Lemon & Herb Grilled Chicken Breast",                sides: "Potato Wedges" },
      vegetarian: { dish: "Gnocchi & Vegetable Pot",                            sides: "Plant-based Chicken" },
    },
    thursday: {
      option1:    { dish: "Beef Potjie",                                        sides: "Dumplings" },
      option2:    { dish: "Chicken Crock Pot",                                  sides: "Rice" },
      vegetarian: { dish: "Crispy Cauliflower",                                 sides: "Orange Sauce & Side Salad" },
    },
    friday: {
      option1:    { dish: "BBQ Beef Strip Roll",                                sides: "Chips" },
      option2:    { dish: "Chicken Strip Roll",                                 sides: "Chips" },
      vegetarian: { dish: "Caramelized Onion & Sundried Tomato Pasta",          sides: "" },
    },
  },
  week2: {
    monday: {
      option1:    { dish: "Boerewors",                                          sides: "Pap Tart" },
      option2:    { dish: "Chicken à la King",                                  sides: "Rice" },
      vegetarian: { dish: "Creamy Mushroom Risotto",                            sides: "Side Salad" },
    },
    tuesday: {
      option1:    { dish: "Beef Stir-Fry",                                      sides: "Chinese Noodles" },
      option2:    { dish: "Chicken Schnitzel",                                  sides: "Macaroni & Cheese" },
      vegetarian: { dish: "Plant-based Mince & Pasta Bake",                     sides: "" },
    },
    wednesday: {
      option1:    { dish: "Beef Burger",                                        sides: "Lettuce, Gherkins, Tomato, Onion & Smokey BBQ Sauce" },
      option2:    { dish: "Chicken Burger",                                     sides: "Lettuce, Gherkins, Tomato, Onion & Chips" },
      vegetarian: { dish: "Plant-based Chicken Burger",                         sides: "Chips" },
    },
    thursday: {
      option1:    { dish: "Beef Curry",                                         sides: "Mealie Rice" },
      option2:    { dish: "Apricot Roasted Chicken",                            sides: "Parsley Baby Potatoes" },
      vegetarian: { dish: "Broccoli, Cauliflower, Peppadew, Avo & Feta",       sides: "Plant-based Nuggets" },
    },
    friday: {
      option1:    { dish: "Bobotie",                                            sides: "Yellow Rice" },
      option2:    { dish: "Lemon & Herb Leg Quarter",                           sides: "Pap" },
      vegetarian: { dish: "Baked Cabbage",                                      sides: "Creamy Cheese Sauce & Crispy Onions" },
    },
  },
};

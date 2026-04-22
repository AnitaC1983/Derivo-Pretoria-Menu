// ============================================================
// MENU DATA — edit this file to update the menu display
// ============================================================

// Set this to the Monday of your first "Week 1" rotation
const ROTATION_START_DATE = new Date(2026, 3, 20); // Monday 20 April 2026 = Week 1

// Each day has 3 options. Each option has:
//   dish  — the main meal name
//   sides — starch / accompaniment shown smaller below

const MENUS = {
  week1: {
    monday: {
      option1:    { dish: "Beef Meatballs in Napoletana Sauce",             sides: "Spaghetti" },
      option2:    { dish: "Chicken & Ginger Stir-Fry",                      sides: "Parsley Rice" },
      vegetarian: { dish: "Butter Bean & Potato Curry",                     sides: "" },
    },
    tuesday: {
      option1:    { dish: "Slow Braised Beef Chuck",                        sides: "Traditional Samp & Beans" },
      option2:    { dish: "Roasted Chicken",                                sides: "Savoury Rice" },
      vegetarian: { dish: "Stuffed Gem Squash",                             sides: "Sweetcorn Salsa & Cheese" },
    },
    wednesday: {
      option1:    { dish: "Fried Lemon & Herb Hake",                        sides: "Yellow Rice" },
      option2:    { dish: "Lemon & Herb Grilled Chicken Breast",            sides: "Sweet Potato Wedges" },
      vegetarian: { dish: "Gnocchi & Vegetable Pot",                        sides: "Plant-based Chicken" },
    },
    thursday: {
      option1:    { dish: "Beef & Lentil Pasta Bake",                       sides: "" },
      option2:    { dish: "Mild North Indian Chicken Curry",                sides: "Brown Rice" },
      vegetarian: { dish: "Mediterranean Pasta",                            sides: "" },
    },
    friday: {
      option1:    { dish: "Beef & Bell Pepper Stroganoff",                  sides: "Creamy Mash Potatoes" },
      option2:    { dish: "Apricot Roasted Chicken Kebab",                  sides: "Savoury Rice" },
      vegetarian: { dish: "Broccoli, Cauliflower, Peppadew, Avo & Feta",   sides: "Plant-based Nuggets" },
    },
  },
  week2: {
    monday: {
      option1:    { dish: "Beef Potjie",                                    sides: "Mealie Rice" },
      option2:    { dish: "Chicken Schnitzel",                              sides: "Brown Rice" },
      vegetarian: { dish: "Roasted Vegetable Bowl",                         sides: "Chickpeas & Feta" },
    },
    tuesday: {
      option1:    { dish: "Bobotie",                                        sides: "Yellow Rice" },
      option2:    { dish: "Chicken Pasta Bake",                             sides: "" },
      vegetarian: { dish: "Plant-based Mince & Pasta Bake",                 sides: "" },
    },
    wednesday: {
      option1:    { dish: "Braised Steak",                                  sides: "Sauté Sweet Potato" },
      option2:    { dish: "Roasted Chicken Thigh with Garlic & Thyme",      sides: "Sauté Sweet Potato" },
      vegetarian: { dish: "Roasted Courgettes & Carrots",                   sides: "Thyme & Red Onion" },
    },
    thursday: {
      option1:    { dish: "Boerewors",                                      sides: "Pap" },
      option2:    { dish: "Crumbed Chicken Strips",                         sides: "Sweet & Sour Sauce, Chinese Noodles" },
      vegetarian: { dish: "Veg Breyani",                                    sides: "Sambals, Yoghurt & Cucumber Salad" },
    },
    friday: {
      option1:    { dish: "BBQ Beef Burger",                                sides: "Lettuce, Fried Onion, Tomato & Chips" },
      option2:    { dish: "Spicy Chicken Mayo Burger",                      sides: "Lettuce, Tomato, Fried Onion & Chips" },
      vegetarian: { dish: "Vegetable Burger",                               sides: "Selection of Toppings & Chips" },
    },
  },
};

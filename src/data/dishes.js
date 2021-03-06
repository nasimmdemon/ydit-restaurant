const DISHES = [
  {
    courseType: [0],
    id: 0,
    title: "Grilled Vegetable Bruschetta",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70",
    description:
      "What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?",
    allery: ["milk", "gluten"],
    spiceLevel: 0,
  },
  {
    courseType: [0],
    id: 1,
    title: "Zucchini-and-Pepper Gratin with Herbs and Cheese",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F200907-r-zucchini-gratin.jpg&w=1600&q=70",
    description:
      "Pleasantly salty Sbrinz to top a gratin made with a ratatouille-like mix of sautéed zucchini strips, bell peppers and tomato.",
    allery: ["milk"],
    spiceLevel: 0,
  },
  {
    courseType: [0],
    id: 2,
    title: "Scallop Ceviche with Aguachile",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201305-xl-scallop-ceviche-with-aguachile.jpg%3Fitok%3DRoCrD6i6&w=1600&q=70",
    description:
      "Aguachile (chile water) is a vibrant sauce made with fresh chiles, herbs and cucumbers that’s fantastic on any type of fish or shellfish. ",
    allery: ["shellfish"],
    spiceLevel: 0,
  },
  {
    courseType: [0],
    id: 3,
    title: "Roast Beef Summer Rolls",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F200909-xl-roast-beef-summer-rolls_0.jpg&w=1600&q=70",
    description:
      "Vietnamese summer rolls are often filled with or shrimp, but Grace Parisi makes hers with roast beef from the deli.",
    allery: [],
    spiceLevel: 0,
  },
  {
    courseType: [0],
    id: 4,
    title: "Grilled Tomato Crostini",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201006-r-xl-grilled-tomato-crostini.jpg%3Fitok%3DNCOaJFQW&w=1600&q=70",
    description: "Lightly golden brown toast with tomato.",
    allery: ["gluten"],
    spiceLevel: 0,
  },
  {
    courseType: [0],
    id: 5,
    title: "Pickled Shrimp with Creamy Spinach Dip",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201106-xl-pickled-shrimp.jpg%3Fitok%3DIkKE-_0Z&w=1600&q=70",
    description:
      "James Holmes grew up in Texas but didn't learn how to make pickled shrimp, a Gulf specialty, until he took a job at a New York City restaurant",
    allery: ["shellfish"],
    spiceLevel: 3,
  },
  {
    courseType: [1],
    id: 6,
    title: "Tomato Soup with Feta, Olives and Cucumbers",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201409-xl-tomato-soup-with-feta-olives-and-cucumber.jpg%3Fitok%3DwVUbCG-4&w=1600&q=70",
    description:
      "This pretty, fresh-tasting tomato soup is David Chang’s riff on Greek salad: He tops it with tomatoes, olives, honeyed cucumbers and feta.",
    allery: [],
    spiceLevel: 0,
  },
  {
    courseType: [1],
    id: 7,
    title: "Miso Soup with Turmeric and Tofu",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201403-xl-miso-soup-with-turmeric-and-tofu.jpg%3Fitok%3DU3Ca3Ky4&w=1600&q=70",
    description:
      "Miso soup gets re-imagined by blogger Heidi Swanson, who adds earthy, brilliant yellow turmeric for additional flavor and color.",
    allery: [],
    spiceLevel: 0,
  },
  {
    courseType: [1],
    id: 8,
    title: "Mint and Pea Soup",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1492007865%2Fmint-and-pea-soup-great-dixter-cookbook-XL-SS0417.jpg&w=1600&q=70",
    description:
      "Mint gives this soup a wonderfully fresh taste, and it makes a perfect lunch with some bread and cheese on the side.",
    allery: ["milk"],
    spiceLevel: 0,
  },
  {
    courseType: [1],
    id: 9,
    title: "Tomato Water Gazpacho",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1527191148%2Ftomato-water-gazpacho-xl-RECIPE0718.jpg&w=1600&q=70",
    description:
      "The base of it is built on the tomato seeds and pulp, plus the brine of pickled green tomatoes, from an elegant amuse-bouche of Tomato and Watermelon Bites.",
    allery: [],
    spiceLevel: 1,
  },
  {
    courseType: [1, 2],
    id: 10,
    title: "Lobster Bisque",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1527190749%2Flobster-bisque-RECIPE0718.jpg&w=1600&q=70",
    description:
      "Lobster shells from the tail, claws, knuckles, and legs are full of flavor and, when very gently simmered in water, yield a clean-tasting, briny stock.",
    allery: [],
    spiceLevel: 0,
  },
  {
    courseType: [2],
    id: 11,
    title: "Seared Salmon with Summer Vegetables",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fseared-salmon-with-summer-vegetables-XL-RECIPE0918.jpg&w=1600&q=70",
    description:
      "The myriad vegetables in the recipe—corn, spinach, shiitakes, and tomato—sing of late summer.",
    allery: ["mushrooms", "fish"],
    spiceLevel: 0,
  },
  {
    courseType: [2],
    id: 12,
    title: "Arctic Char with Soba and Green Beans",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1505934922%2Farctic-char-with-soba-and-green-beans-XL-RECIPE1117.jpg&w=1600&q=70",
    description:
      "A very refreshing and bright soba noodle salad with green beans, radishes, romaine and fresh basil, and serves it with perfectly crisp pieces of arctic char.",
    allery: ["fish", "gluten"],
    spiceLevel: 0,
  },
  {
    courseType: [2],
    id: 13,
    title: "Salmon Yakitori",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1524238015%2Fsalmon-yakitori-XL-RECIPE0618.jpg&w=1600&q=70",
    description:
      "A soy sauce, mirin, and brown sugar glaze caramelizes on the fish and baby bok choy as it grills, and also serves as a dipping sauce.",
    allery: ["gluten", "fish"],
    spiceLevel: 0,
  },
  {
    courseType: [2],
    id: 14,
    title: "Crab and Smoked Salmon Pintxos with Vanilla Oil",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1501086700%2Fcrab-and-smoked-salmon-pintxos-with-vanilla-oil-XL-RECIPE0917.jpg&w=1600&q=70",
    description:
      "These delightful pintxos combine a lemony fresh crab salad with smoked salmon and salty pops of salmon roe.",
    allery: ["fish", "shellfish"],
    spiceLevel: 0,
  },
  {
    courseType: [3],
    id: 15,
    title: "Spinach Salad with Ginger-Soy Dressing",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1515599206%2Fspinach-salad-with-ginger-soy-dressing-XL-RECIPE0218.jpg&w=1600&q=70",
    description:
      "Fresh ginger warms up the soy-citrus dressing in this hearty spinach salad from New York chef JJ Johnson",
    allery: ["gluten"],
    spiceLevel: 1,
  },
  {
    courseType: [3],
    id: 16,
    title: "Classic Caesar Salad",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201206-xl-classic-caesar-salad.jpg%3Fitok%3DGbtQ427B&w=1600&q=70",
    description:
      "This classic Caesar salad is loaded with plenty of garlic, anchovies and Parmigiano cheese. It's also fast and easy to make.",
    allery: ["egg", "milk"],
    spiceLevel: 0,
  },
  {
    courseType: [3],
    id: 17,
    title: "Mixed Greens with Poached Eggs, Hazelnuts and Spices",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1470060241%2Fmixed-greens-with-poached-eggs-hazelnuts-and-spices-XL-RECIPE0916.jpg%3Fitok%3DHnaeVt68&w=1600&q=70",
    description:
      "At L'Arcangelo restaurant in Rome, chef Arcangelo Dandini makes this simple salad with whichever wild greens happen to be in season at the moment.",
    allery: ["egg", "nuts"],
    spiceLevel: 1,
  },
  {
    courseType: [3],
    id: 18,
    title: "Butter Lettuce Salad with Tomato Vinaigrette",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201402-xl-butter-lettuce-salad-with-tomato-vinaigrette.jpg%3Fitok%3D1GPQj37h&w=1600&q=70",
    description:
      "This delicious roasted-tomato vinaigrette is enhanced with blue cheese, which makes the dressing extra-thick and rich.",
    allery: ["egg", "milk"],
    spiceLevel: 0,
  },
  {
    courseType: [3],
    id: 19,
    title: "Shrimp Salad with Green Curry Dressing",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201504-xl-curried-shrimp-salad.jpg%3Fitok%3DtNKjuRJo&w=1600&q=70",
    description:
      "Green curry paste is the secret ingredient in this supersimple, bright and crunchy shrimp salad recipe from F&W’s Justin Chapple.",
    allery: ["shellfish"],
    spiceLevel: 2,
  },

  {
    courseType: [4],
    id: 20,
    title: "Piri Piri Chicken",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1524238015%2Fpiri-piri-chicken-XL-RECIPE0618.jpg&w=1600&q=70",
    description:
      "This riff on the piri piri marinade balances the heat of fresh chiles with sweet bell pepper, garlic, and a splash of tangy red wine vinegar.",
    allery: [],
    spiceLevel: 4,
  },
  {
    courseType: [4],
    id: 21,
    title: "Mojo Pork Steak with Seared Avocados and Oranges",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1524238015%2Fmojo-pork-steak-with-seared-avocados-and-oranges-XL-RECIPE0618.jpg&w=1600&q=70",
    description:
      "Chiles, citrus, and garlic make up the classic mojo rub for this family-size blade steak, cut from the pork shoulder.",
    allery: [],
    spiceLevel: 0,
  },
  {
    courseType: [4],
    id: 22,
    title: "Steak and Brassicas with Red Wine Sauce",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1503509580%2Fsteak-and-brassicas-with-red-wine-sauce-XL-RECIPE1017.jpg&w=1600&q=70",
    description:
      "The brassicas here include baby cauliflower, cute 2- to 4-inch heads that come in vibrant colors like green, orange and purple as well as the usual ivory.",
    allery: [],
    spiceLevel: 0,
  },
  {
    courseType: [4],
    id: 23,
    title: "Brisket with Sweet-and-Sour Onions",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1503509138%2Fbrisket-with-sweet-and-sour-onions-XL-RECIPE1017.jpg&w=1600&q=70",
    description:
      "This brisket recipe is from Jessamyn Rodriguez, the founder and CEO of Hot Bread Kitchen, the New York–based social enterprise that helps immigrant women and others launch careers and food businesses.",
    allery: ["gluten"],
    spiceLevel: 0,
  },
  {
    courseType: [4],
    id: 24,
    title: "Veal Roast with Green Mashed Potatoes",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1487780973%2Fveal-roast-with-green-mashed-potatoes-XL-RECIPE0417.jpg&w=1600&q=70",
    description:
      "Chef Eli Dahlin of Dame in Portland, Oregon, uses this “backwards” mashed potato technique for entertaining.",
    allery: ["milk"],
    spiceLevel: 0,
  },
  {
    courseType: [5],
    id: 25,
    title: "Strawberry Almond Cheesecake with Matzoh Crust",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1522077914%2Fstrawberry-almond-cheesecake-with-matzo-crust-FT-RECIPE2018.jpg%3Fitok%3DznBmOoO5&w=1600&q=70",
    description:
      "This silky cheesecake gets sweetness and tang from a blend of cream cheese and sour cream.",
    allery: ["milk", "egg"],
    spiceLevel: 0,
  },
  {
    courseType: [5],
    id: 26,
    title: "Apple Tart with Apricot Glaze",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1535553436%2Fapple-tart-with-apricot-glaze-XL-RECIPE1018.jpg&w=1600&q=70",
    description:
      "This tart is the final dish in a dinner party menu designed by Stitt and inspired by Olney’s love of seasonal produce and great wine.",
    allery: ["gluten", "milk"],
    spiceLevel: 0,
  },
  {
    courseType: [5],
    id: 27,
    title: "Classic French Macarons",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F2012-r-xl-classic-french-macarons.jpg%3Fitok%3D-JcpAF79&w=1600&q=70",
    description:
      "French macarons (made with almond flour, and distinct from their coconut cousins, macaroons) require some practice and patience.",
    allery: ["gluten", "egg"],
    spiceLevel: 0,
  },
  {
    courseType: [5],
    id: 28,
    title: "Ultimate Chocolate Mousse",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fultimate-chocolate-mousse-XL-RECIPE0918.jpg&w=1600&q=70",
    description:
      "This is the ultimate, the definitive, the ne plus ultra, the finest chocolate mousse creation ever whipped up.",
    allery: ["egg", "milk"],
    spiceLevel: 0,
  },
  {
    courseType: [5],
    id: 29,
    title: "Brown Sugar Cake with Ricotta and Blueberries",
    image:
      "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1527190887%2Fbrown-sugar-cake-with-ricotta-and-blueberries-ft-RECIPE0718.jpg%3Fitok%3D24grW74f&w=1600&q=70",
    description:
      "The chewy, dense confection is like a cross between a cake and a blondie. It’s delicious both by itself and dressed up with Ricotta Mousse and Blueberry Sauce.",
    allery: ["egg", "gluten"],
    spiceLevel: 0,
  },
];


export default DISHES
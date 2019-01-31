let fakeServerData = {
  data: {
    menu: [
      {
        id: 'islandLeft',
        name: "Small Bites",
        info: '',
        items: [
          { name: "Chesse Rolls", price: "2.00" },
          { name: "Pholouri", price: "3.00" },
          { name: "Guyanese Patties", price: "1.00" },
          { name: "Jamaican Beef Patties", price: "1.80" },
          { name: "Coco Bread", price: "$2.00" },
          { name: "Roti", price: "$3.00" }
        ]
      },
      {
        id: 'islandLeft',
        name: "Entrees",
        info: 'Served with 2 sides',
        items: [
          { name: "Pumpkin & Channa Curry", price: "$10.00", iteminfo: [] },
          { name: "Callaloo(Spinach)Cookup", price: "$10.00", iteminfo: [] },
          { name: "Vegan Plate(3 Side Items)", price: "$8.50", iteminfo: [] },
          { name: "Chicken Curry", price: "$11.99"},
          { name: "Shrimp Curry", price: "$13.99"},
          { name: "Stew Chicken", price: "$11.99"},
          { name: "Jerk Chicken", price: "$11.99"},
          { name: "Flavored Wing Meal", price: "$10.99"},
          { name: "Oxtails", price: "$16.99"},
          { name: "Fried Fish Dinner", price: "$14.99", iteminfo: [
            "Fried(w/wo Escovitch), Curried, Stewed"
          ] },
          { name: "Salmom", price: "$15.99", iteminfo: [] },
          { name: "Rasta Pasta", iteminfo: [
            'Oxtail: $15.99 ',
            'Vegan: $9.99 ',
            '        ',
            'Jerk Chicken: $11.99 ',
            'Shrimp: $13.99 ',
            'Salmon: $13.99 '
          ]
         }
        ]
      },
      {
        id: 'islandLeft',
        name: "Sides",
        info: '$3(a la carte)',
        items: [
          { name: "Jasmine Rice", price: "" },
          { name: "Yellow Rice", price: "" },
          { name: "Rice & Beans", price: "" },
          { name: "Guyanese Chow Mein", price: "" },
          { name: "Steamed Cabbage", price: "" },
          { name: "Collard Greens", price: "" },
          { name: "Mixed Vegetables", price: "" },
          { name: "Steamed Callaloo", price: "" },
          { name: "Yams", price: "" },
          { name: "Fried Plaintains", price: "" },
          { name: "Vegan Mac&cheese", price: "" },
          { name: "Baked Mac&Cheese", price: "" },
          { name: "Cornbread", price: "" },
        ]
      },
      {
        id: 'islandRight',
        name: "Sandwiches",
        info: 'served with french fries of plantains',
        items: [
          { name: "Fish Sandwich", price: "$8.99" },
          { name: "Smoked Jerk BBQ Chicken Sandwich", price: "9.50" },
          { name: "Roasted Eggplant Sandwich", price: "$7.99" }
        ]
      },
      {
        id: 'islandRight',
        name: "Appetizers",
        info: '',
        items: [
          { name: "Wings", price: "$7.99" },
          { name: "Jerk Chicken Quesadillas", price: "$9.99" },
          { name: "Jerk Chicken Burrito", price: "10.50" },
          { name: "Peppered Shrimp", price: "10.99" }
        ]
      },
      {
        id: 'islandRight',
        name: "Kids Meal",
        info: '10 and under(includes one side)',
        items: [
          { name: "Chicken Tenders", price: "$6.99" },
          { name: "Fried Fish", price: "$6.99" },
          { name: "Mac&Cheese", price: "5.99" }
        ]
      },
      {
        id: 'islandRight',
        name: "Lunch Specials",
        info: 'Tue-Fir 11-2',
        subinfo: 'served w rice, vegetable and plantain',
        subprice: '$6.99',
        items: [
          { name: "Chicken Curry", price: "" },
          { name: "Stew Chicken", price: "" },
          { name: "Jerk Chicken", price: "" },
          { name: "Fried Fish", price: "" },
          { name: "Pumpkin Curry", price: "" },
          { name: "Wing Snack Box", price: "" }
        ]
      },
      {
        id: 'drinks',
        name: "Drinks",
        info: '',
        subinfo: '',
        subprice: '',
        items: [
          { name: "Half & Half", price: "$2.00", iteminfo: ['(half tea/half lemonade) dine-in free refills'] },
          { name: "Island Punch", price: "$3.00" },
          { name: "Sister Yvonne's Sorrel", price: "$3.00" },
          { name: "Soda", price: "$2.50", hat: ['Ginger Ale(Can) $1.00 ', 'Diet Coke(Bottle) $1.50 ', 'Coke ', 'Spite ', 'Fanta(Glass Bottle) $2.50'], },
          { name: "D&G", price: "$2.00", hat: ['Kola ', 'Champangne ', 'Pineapple ', 'Ginger Beer ', 'or ', 'Cream Soda'] },
          { name: "Ting", price: "$2.50" }
        ]
      },
    ]
  }
}

export default fakeServerData;

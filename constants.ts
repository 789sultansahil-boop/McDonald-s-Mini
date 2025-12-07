
import { MenuItem, Category, Promotion, Reward, InventoryItem, Recipe } from './types';

export const POINTS_PER_DOLLAR = 10;

export const REWARDS: Reward[] = [
  { 
    id: 'r1', 
    name: 'Free Vanilla Cone', 
    description: 'A sweet treat on us.', 
    pointCost: 300, 
    type: 'discount', 
    discountAmount: 1.50 
  },
  { 
    id: 'r2', 
    name: '$5 Off Your Order', 
    description: 'Save big on your favorites.', 
    pointCost: 500, 
    type: 'discount', 
    discountAmount: 5.00 
  },
  { 
    id: 'r3', 
    name: 'Free McChicken', 
    description: 'Crispy, juicy perfection.', 
    pointCost: 800, 
    type: 'discount', 
    discountAmount: 3.49 
  },
  { 
    id: 'r4', 
    name: 'Free Big Mac Meal', 
    description: 'The legend, effectively free.', 
    pointCost: 1500, 
    type: 'discount', 
    discountAmount: 9.99 
  },
];

export const INITIAL_INVENTORY: InventoryItem[] = [
    { id: 'inv_beef', name: 'Beef Patty', quantity: 50, threshold: 10, unit: 'pcs' },
    { id: 'inv_chicken', name: 'Chicken Patty', quantity: 40, threshold: 10, unit: 'pcs' },
    { id: 'inv_bun_reg', name: 'Regular Bun', quantity: 100, threshold: 20, unit: 'pcs' },
    { id: 'inv_bun_sesame', name: 'Sesame Bun', quantity: 60, threshold: 15, unit: 'pcs' },
    { id: 'inv_cheese', name: 'Cheese Slice', quantity: 100, threshold: 20, unit: 'pcs' },
    { id: 'inv_lettuce', name: 'Shredded Lettuce', quantity: 50, threshold: 10, unit: 'servings' },
    { id: 'inv_potato', name: 'Potatoes (Fries)', quantity: 80, threshold: 15, unit: 'servings' },
    { id: 'inv_icecream', name: 'Soft Serve Mix', quantity: 30, threshold: 5, unit: 'servings' },
    { id: 'inv_soda', name: 'Soda Syrup', quantity: 100, threshold: 10, unit: 'servings' },
    { id: 'inv_tortilla', name: 'Tortilla Wrap', quantity: 30, threshold: 8, unit: 'pcs' },
    { id: 'inv_fish', name: 'Fish Fillet', quantity: 25, threshold: 5, unit: 'pcs' },
    { id: 'inv_egg', name: 'Grade A Egg', quantity: 40, threshold: 10, unit: 'pcs' },
    { id: 'inv_muffin', name: 'English Muffin', quantity: 40, threshold: 10, unit: 'pcs' },
];

// Mapping Menu Items to Inventory Requirements
export const RECIPES: Recipe[] = [
    { menuItemId: '1', ingredients: [{ inventoryItemId: 'inv_beef', quantity: 2 }, { inventoryItemId: 'inv_bun_sesame', quantity: 1 }, { inventoryItemId: 'inv_cheese', quantity: 1 }, { inventoryItemId: 'inv_lettuce', quantity: 1 }] }, // Big Mac
    { menuItemId: '2', ingredients: [{ inventoryItemId: 'inv_chicken', quantity: 1 }, { inventoryItemId: 'inv_bun_reg', quantity: 1 }, { inventoryItemId: 'inv_lettuce', quantity: 1 }] }, // McChicken
    { menuItemId: '3', ingredients: [{ inventoryItemId: 'inv_beef', quantity: 1 }, { inventoryItemId: 'inv_bun_sesame', quantity: 1 }, { inventoryItemId: 'inv_cheese', quantity: 1 }] }, // Quarter Pounder
    { menuItemId: '4', ingredients: [{ inventoryItemId: 'inv_chicken', quantity: 1 }] }, // Nuggets (Simplified)
    { menuItemId: '5', ingredients: [{ inventoryItemId: 'inv_potato', quantity: 1 }] }, // Fries
    { menuItemId: '6', ingredients: [{ inventoryItemId: 'inv_icecream', quantity: 1 }] }, // McFlurry
    { menuItemId: '8', ingredients: [{ inventoryItemId: 'inv_soda', quantity: 1 }] }, // Coke
    { menuItemId: '12', ingredients: [{ inventoryItemId: 'inv_beef', quantity: 2 }, { inventoryItemId: 'inv_bun_reg', quantity: 1 }, { inventoryItemId: 'inv_cheese', quantity: 2 }] }, // Double Cheese
    { menuItemId: '13', ingredients: [{ inventoryItemId: 'inv_fish', quantity: 1 }, { inventoryItemId: 'inv_bun_reg', quantity: 1 }, { inventoryItemId: 'inv_cheese', quantity: 1 }] }, // Filet-O-Fish
    { menuItemId: '14', ingredients: [{ inventoryItemId: 'inv_chicken', quantity: 1 }, { inventoryItemId: 'inv_bun_reg', quantity: 1 }] }, // Spicy McCrispy
    { menuItemId: '15', ingredients: [{ inventoryItemId: 'inv_egg', quantity: 1 }, { inventoryItemId: 'inv_muffin', quantity: 1 }, { inventoryItemId: 'inv_cheese', quantity: 1 }] }, // Egg McMuffin
    { menuItemId: '18', ingredients: [{ inventoryItemId: 'inv_icecream', quantity: 1 }] }, // Shake
    { menuItemId: '21', ingredients: [{ inventoryItemId: 'inv_soda', quantity: 1 }] }, // Sprite
    { menuItemId: '22', ingredients: [{ inventoryItemId: 'inv_chicken', quantity: 1 }, { inventoryItemId: 'inv_tortilla', quantity: 1 }] }, // Wrap
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Big Mac',
    description: 'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac® sauce sandwiched between a sesame seed bun.',
    price: 5.99,
    category: Category.BURGER,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop',
    tags: ['Beef', 'Classic'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten', 'Egg', 'Soy'] }
  },
  {
    id: '2',
    name: 'McChicken',
    description: 'It’s a classic for a reason. Savor the crispy chicken fillet topped with mayonnaise and shredded lettuce.',
    price: 3.49,
    category: Category.CHICKEN,
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?q=80&w=1974&auto=format&fit=crop',
    tags: ['Chicken'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Gluten', 'Egg'] }
  },
  {
    id: '3',
    name: 'Quarter Pounder with Cheese',
    description: 'Each Quarter Pounder® with Cheese burger features a ¼ lb. of 100% fresh beef that’s hot, deliciously juicy and cooked when you order.',
    price: 6.29,
    category: Category.BURGER,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop',
    tags: ['Beef', 'Cheese'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten'] }
  },
  {
    id: '4',
    name: 'Chicken McNuggets (9 pc)',
    description: 'Our tender, juicy Chicken McNuggets® are made with 100% white meat chicken and no artificial colors, flavors or preservatives.',
    price: 5.49,
    category: Category.CHICKEN,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop',
    tags: ['Chicken', 'Shareable'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Gluten'] }
  },
  {
    id: '5',
    name: 'World Famous Fries',
    description: 'Our World Famous Fries® are guaranteed to be golden and crispy on the outside and soft and fluffy on the inside.',
    price: 2.99,
    category: Category.SIDES,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vegetarian', 'Popular'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: true, isGlutenFree: true, allergens: [] }
  },
  {
    id: '6',
    name: 'Oreo McFlurry',
    description: 'The McDonald’s McFlurry® with OREO® Cookies is a popular combination of creamy vanilla soft serve with crunchy pieces of OREO® cookies!',
    price: 3.49,
    category: Category.DESSERT,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop',
    tags: ['Sweet', 'Cold'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten', 'Soy'] }
  },
  {
    id: '7',
    name: 'Hot Apple Pie',
    description: 'Our Apple Pie is made with crisp apples, spiced with cinnamon and baked in a flaky pastry crust.',
    price: 1.99,
    category: Category.DESSERT,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vegetarian', 'Warm'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: true, isGlutenFree: false, allergens: ['Gluten'] }
  },
  {
    id: '8',
    name: 'Coca-Cola',
    description: 'Ice-cold Coca-Cola®.',
    price: 1.99,
    category: Category.DRINK,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop',
    tags: ['Cold', 'Caffeine'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: true, isGlutenFree: true, allergens: [] }
  },
  {
    id: '9',
    name: 'Happy Meal',
    description: 'A meal just for kids with a toy, fries, drink, and a burger.',
    price: 4.99,
    category: Category.MEAL,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2069&auto=format&fit=crop',
    tags: ['Kids', 'Toy'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten', 'Soy'] }
  },
  {
    id: '10',
    name: 'Build Your Own Pizza',
    description: 'Classic mozzarella cheese pizza with your choice of crust and fresh toppings.',
    price: 8.99,
    category: Category.PIZZA,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    tags: ['Customizable', 'Hot'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten'] },
    variants: [
      { id: 'v1', name: 'Small (10")', price: 8.99 },
      { id: 'v2', name: 'Medium (12")', price: 11.99 },
      { id: 'v3', name: 'Large (14")', price: 14.99 },
    ],
    customizationGroups: [
      {
        id: 'cg1',
        name: 'Choose Crust',
        type: 'single',
        minSelection: 1,
        maxSelection: 1,
        options: [
          { id: 'o1', name: 'Hand Tossed', price: 0 },
          { id: 'o2', name: 'Thin Crust', price: 0 },
          { id: 'o3', name: 'Stuffed Crust', price: 2.50 },
        ]
      },
      {
        id: 'cg2',
        name: 'Add Toppings',
        type: 'multiple',
        options: [
          { id: 't1', name: 'Pepperoni', price: 1.50 },
          { id: 't2', name: 'Mushrooms', price: 1.00 },
          { id: 't3', name: 'Onions', price: 0.50 },
          { id: 't4', name: 'Sausage', price: 1.50 },
          { id: 't5', name: 'Extra Cheese', price: 2.00 },
        ]
      }
    ]
  },
  {
    id: '11',
    name: 'Grilled Chicken Club',
    description: 'Grilled chicken breast with bacon, lettuce, tomato and mayo.',
    price: 6.99,
    category: Category.SANDWICH,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop',
    tags: ['Lunch', 'Chicken'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Gluten', 'Egg', 'Dairy'] },
    customizationGroups: [
      {
        id: 'sg1',
        name: 'Bread Choice',
        type: 'single',
        minSelection: 1,
        maxSelection: 1,
        options: [
          { id: 'b1', name: 'Sesame Bun', price: 0 },
          { id: 'b2', name: 'Whole Wheat', price: 0.50 },
          { id: 'b3', name: 'Brioche Bun', price: 1.00 },
        ]
      },
      {
        id: 'sg2',
        name: 'Modifications',
        type: 'multiple',
        options: [
          { id: 'm1', name: 'No Onions', price: 0 },
          { id: 'm2', name: 'No Mayo', price: 0 },
          { id: 'm3', name: 'Extra Cheese', price: 0.75 },
          { id: 'm4', name: 'Add Bacon', price: 1.50 },
        ]
      }
    ]
  },
  // --- NEW ITEMS ---
  {
    id: '12',
    name: 'Double Cheeseburger',
    description: 'Two 100% pure beef patties seasoned with just a pinch of salt and pepper, topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty cheese.',
    price: 3.49,
    category: Category.BURGER,
    image: 'https://images.unsplash.com/photo-1534790566855-4ca758e9150f?q=80&w=2000&auto=format&fit=crop',
    tags: ['Beef', 'Cheese', 'Classic'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten', 'Soy'] }
  },
  {
    id: '13',
    name: 'Filet-O-Fish',
    description: 'Dive into our wild-caught fish sandwich! Sourced from sustainable fisheries, topped with melty American cheese and creamy tartar sauce.',
    price: 4.79,
    category: Category.CHICKEN, // Fits broadly under "Chicken & Fish"
    image: 'https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?q=80&w=2000&auto=format&fit=crop',
    tags: ['Fish', 'Seafood'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Fish', 'Gluten', 'Dairy', 'Egg'] }
  },
  {
    id: '14',
    name: 'Spicy McCrispy',
    description: 'Southern-style fried chicken fillet on a potato roll, topped with spicy pepper sauce and crinkle-cut pickles.',
    price: 5.39,
    category: Category.CHICKEN,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2000&auto=format&fit=crop',
    tags: ['Spicy', 'Chicken'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Gluten', 'Egg'] }
  },
  {
    id: '15',
    name: 'Egg McMuffin',
    description: 'Our signature breakfast sandwich. A freshly cracked Grade A egg, Canadian bacon, and melty American cheese on a toasted English Muffin.',
    price: 3.99,
    category: Category.BREAKFAST,
    image: 'https://images.unsplash.com/photo-1550504953-294747201b1b?q=80&w=2000&auto=format&fit=crop',
    tags: ['Breakfast', 'Egg'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Gluten', 'Egg', 'Dairy', 'Pork'] }
  },
  {
    id: '16',
    name: 'Hash Browns',
    description: 'Shredded potato hash brown patties that are prepared so they are fluffy on the inside and crispy and toasty on the outside.',
    price: 1.89,
    category: Category.BREAKFAST,
    image: 'https://images.unsplash.com/photo-1541544744-378c5d8a6b93?q=80&w=2000&auto=format&fit=crop',
    tags: ['Breakfast', 'Potato'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: true, isGlutenFree: true, allergens: [] }
  },
  {
    id: '17',
    name: 'Hotcakes',
    description: 'Three golden brown, melt-in-your-mouth hotcakes with a side of real butter and sweet maple syrup.',
    price: 4.29,
    category: Category.BREAKFAST,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=2000&auto=format&fit=crop',
    tags: ['Breakfast', 'Sweet'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: false, allergens: ['Gluten', 'Dairy', 'Egg'] }
  },
  {
    id: '18',
    name: 'Vanilla Shake',
    description: 'Creamy vanilla soft serve blended into a thick and delicious shake, topped with whipped cream.',
    price: 3.19,
    category: Category.DESSERT,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2000&auto=format&fit=crop',
    tags: ['Sweet', 'Cold', 'Shake'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: false, allergens: ['Dairy'] }
  },
  {
    id: '19',
    name: 'Strawberry Sundae',
    description: 'Creamy vanilla soft serve topped with a sweet, fruity strawberry topping.',
    price: 2.79,
    category: Category.DESSERT,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2000&auto=format&fit=crop', // Reusing McFlurry style img but different desc
    tags: ['Sweet', 'Ice Cream'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: false, allergens: ['Dairy'] }
  },
  {
    id: '20',
    name: 'Iced Caramel Macchiato',
    description: 'Rich espresso, milk, and sweet caramel syrup over ice.',
    price: 3.89,
    category: Category.DRINK,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=2000&auto=format&fit=crop',
    tags: ['Coffee', 'Caffeine', 'Cold'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: true, allergens: ['Dairy'] }
  },
  {
    id: '21',
    name: 'Sprite',
    description: 'Lemon-lime soda with 100% natural flavors.',
    price: 1.99,
    category: Category.DRINK,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=2000&auto=format&fit=crop',
    tags: ['Cold', 'Soda'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: true, isGlutenFree: true, allergens: [] }
  },
  {
    id: '22',
    name: 'Spicy Chicken Wrap',
    description: 'Crispy chicken breast with lettuce, shredded cheese, and spicy mayo wrapped in a soft flour tortilla.',
    price: 5.89,
    category: Category.CHICKEN,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2000&auto=format&fit=crop',
    tags: ['Spicy', 'Wrap'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Gluten', 'Dairy', 'Egg'] }
  },
  {
    id: '23',
    name: 'Mozzarella Sticks (4 pc)',
    description: 'Crispy, golden-brown battered mozzarella cheese sticks served with marinara sauce.',
    price: 3.29,
    category: Category.SIDES,
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?q=80&w=2000&auto=format&fit=crop',
    tags: ['Cheese', 'Snack'],
    available: true,
    dietaryInfo: { isVegetarian: true, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten', 'Egg'] }
  },
  {
    id: '24',
    name: 'Cheeseburger Happy Meal',
    description: 'A classic Cheeseburger with kids fries, apple slices, and a choice of drink and toy.',
    price: 5.29,
    category: Category.MEAL,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop',
    tags: ['Kids', 'Toy', 'Beef'],
    available: true,
    dietaryInfo: { isVegetarian: false, isVegan: false, isGlutenFree: false, allergens: ['Dairy', 'Gluten', 'Soy'] }
  },
  {
      id: '25',
      name: 'Orange Juice',
      description: '100% pure orange juice, fresh and fruity.',
      price: 2.49,
      category: Category.DRINK,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2000&auto=format&fit=crop',
      tags: ['Drink', 'Breakfast'],
      available: true,
      dietaryInfo: { isVegetarian: true, isVegan: true, isGlutenFree: true, allergens: [] }
  }
];

export const MOCK_PROMOTIONS: Promotion[] = [
  {
    id: 'p1',
    title: 'Burger Bonanza Weekend',
    description: 'Get 20% off all delicious Burgers this weekend only!',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop',
    discountPercent: 20,
    targetCategory: Category.BURGER,
    endDate: Date.now() + 86400000 * 2, // 2 days from now
    isActive: true
  },
  {
    id: 'p2',
    title: 'Late Night Slice',
    description: '15% off all Pizza orders. Perfect for sharing!',
    imageUrl: 'https://images.unsplash.com/photo-1593560708920-63878b27375e?q=80&w=2070&auto=format&fit=crop',
    discountPercent: 15,
    targetCategory: Category.PIZZA,
    endDate: Date.now() + 3600000 * 5, // 5 hours
    isActive: true
  }
];

export const STORAGE_KEY = 'mcd_orders_butranwali';

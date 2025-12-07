
export enum OrderStatus {
  PENDING = 'Pending',
  PREPARING = 'Preparing',
  READY = 'Ready', // New status for Pickup/Curbside
  SERVED = 'Served', // Delivered to table or car
  PAID = 'Paid',
  CANCELLED = 'Cancelled',
  FAILED = 'Failed',
  REFUNDED = 'Refunded',
}

export enum Category {
  BURGER = 'Burgers',
  CHICKEN = 'Chicken & Fish',
  SIDES = 'Sides',
  DESSERT = 'Desserts',
  DRINK = 'Beverages',
  MEAL = 'Happy Meal',
  PIZZA = 'Pizza',
  SANDWICH = 'Sandwich',
  BREAKFAST = 'Breakfast',
}

export interface Modifier {
  id: string;
  name: string;
  price: number;
}

export interface CustomizationGroup {
  id: string;
  name: string;
  type: 'single' | 'multiple';
  minSelection?: number;
  maxSelection?: number;
  options: Modifier[];
}

export interface Variant {
  id: string;
  name: string;
  price: number;
  image?: string; // Optional image for specific variant
}

export interface DietaryInfo {
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  allergens: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tags: string[]; 
  available: boolean;
  isFavorite?: boolean;
  variants?: Variant[]; 
  customizationGroups?: CustomizationGroup[];
  dietaryInfo?: DietaryInfo;
}

export interface SelectedModifier {
  groupName: string;
  optionName: string;
  price: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  discountPercent: number;
  targetCategory: Category | 'All'; 
  endDate: number;
  isActive: boolean;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointCost: number;
  type: 'discount' | 'free-item';
  discountAmount?: number;
}

export interface SavedFavorite {
  id: string;
  name: string;
  baseItemId: string;
  selectedVariant?: Variant;
  selectedModifiers?: SelectedModifier[];
  itemNote?: string;
}

export interface LoyaltyUser {
  phoneNumber: string;
  name?: string;
  email?: string;
  points: number;
  history: {
    id: string;
    date: number;
    activity: string;
    pointsChange: number;
  }[];
  savedFavorites?: SavedFavorite[];
}

export interface CartItem extends MenuItem {
  cartId: string;
  quantity: number;
  selectedVariant?: Variant;
  selectedModifiers?: SelectedModifier[];
  itemNote?: string;
  finalPrice: number;
  appliedDiscount?: {
    name: string;
    amount: number;
  };
}

export type OrderType = 'dine-in' | 'curbside' | 'pickup' | 'drive-thru';

export interface Order {
  id: string;
  tableNumber?: string; // Optional for non-dine-in
  items: CartItem[];
  total: number;
  status: OrderStatus;
  timestamp: number;
  customerNote?: string;
  cancellationReason?: string; // Also used for Refund/Fail reasons
  loyaltyPointsEarned?: number;
  loyaltyUserPhone?: string;
  
  // New Fields
  orderType: OrderType;
  scheduledTime?: number; // Timestamp for future order
  curbsideDetails?: {
    carModel: string;
    carColor: string;
    licensePlate: string;
    isArrived?: boolean; // Signal from user "I'm Here"
  };
  guestContact?: {
    name?: string;
    email?: string;
    phone?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// --- Inventory Types ---

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number; // Low stock warning level
  unit: string;
}

export interface Recipe {
  menuItemId: string;
  ingredients: {
    inventoryItemId: string;
    quantity: number;
  }[];
}

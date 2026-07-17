// Firebase Configuration & Firestore Helper Functions
// Using Firebase Compat SDK v10 for maximum browser compatibility without bundlers

// WARNING: Replace this config with your own Firebase project credentials for production
const firebaseConfig = {
  apiKey: "AIzaSyAs-demo-key-for-pietro-restaurant",
  authDomain: "pietro-restaurant-demo.firebaseapp.com",
  projectId: "pietro-restaurant-demo",
  storageBucket: "pietro-restaurant-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

let db = null;

// Initialize Firebase only if the SDK is loaded
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    
    // Enable offline persistence if supported (great for mobile connectivity)
    db.enablePersistence().catch((err) => {
      console.warn("Firestore persistence failed to enable:", err.code);
    });
  } catch (e) {
    console.error("Firebase initialization failed:", e);
  }
} else {
  console.warn("Firebase SDK was not loaded. Falling back to localStorage mode.");
}

// 1. Save Booking to Cloud (with LocalStorage Fallback)
window.addBookingToCloud = async function(booking) {
  if (db) {
    try {
      await db.collection("bookings").doc(booking.id).set(booking);
      console.log("Booking saved to Firebase cloud successfully:", booking.id);
      return true;
    } catch (error) {
      console.error("Error writing booking to Firestore, saving locally:", error);
    }
  }
  
  // LocalStorage Fallback
  let bookings = safeGetItem("pietro_bookings");
  bookings.unshift(booking);
  localStorage.setItem("pietro_bookings", JSON.stringify(bookings));
  localStorage.setItem("pietro_new_booking_event", Date.now().toString());
  return false;
};

// 2. Real-time Bookings Listener (for Admin Panel Dashboard)
window.onBookingsChange = function(onUpdate) {
  if (db) {
    // Listen to changes in real-time, sorted by timestamp descending
    return db.collection("bookings")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const bookingsList = [];
        snapshot.forEach((doc) => {
          bookingsList.push(doc.data());
        });
        
        // Sync local storage so other parts of the app remain compatible
        localStorage.setItem("pietro_bookings", JSON.stringify(bookingsList));
        
        onUpdate(bookingsList);
      }, (error) => {
        console.error("Firestore snapshot listener failed, using local sync:", error);
      });
  }
  
  // Local Fallback Listener (via storage event polling fallback)
  window.addEventListener("storage", (e) => {
    if (e.key === "pietro_bookings" || e.key === "pietro_new_booking_event") {
      onUpdate(safeGetItem("pietro_bookings"));
    }
  });
  
  // Initial local load trigger
  onUpdate(safeGetItem("pietro_bookings"));
  return null;
};

// 3. Update Booking Status (Status/PaymentStatus)
window.updateBookingInCloud = async function(bookingId, updates) {
  if (db) {
    try {
      await db.collection("bookings").doc(bookingId).update(updates);
      console.log("Booking updated in Firebase cloud:", bookingId, updates);
      return true;
    } catch (error) {
      console.error("Error updating booking in Firestore:", error);
    }
  }
  
  // Local fallback updates
  let bookings = safeGetItem("pietro_bookings");
  const idx = bookings.findIndex(b => b.id === bookingId);
  if (idx !== -1) {
    bookings[idx] = { ...bookings[idx], ...updates };
    localStorage.setItem("pietro_bookings", JSON.stringify(bookings));
    localStorage.setItem("pietro_new_booking_event", Date.now().toString());
  }
  return false;
};

// 4. Delete Booking
window.deleteBookingFromCloud = async function(bookingId) {
  if (db) {
    try {
      await db.collection("bookings").doc(bookingId).delete();
      console.log("Booking deleted from Firebase cloud:", bookingId);
      return true;
    } catch (error) {
      console.error("Error deleting booking from Firestore:", error);
    }
  }
  
  // Local fallback deletion
  let bookings = safeGetItem("pietro_bookings");
  bookings = bookings.filter(b => b.id !== bookingId);
  localStorage.setItem("pietro_bookings", JSON.stringify(bookings));
  localStorage.setItem("pietro_new_booking_event", Date.now().toString());
  return false;
};

// Helper function to safely load from local storage
function safeGetItem(key, fallback = []) {
  const item = localStorage.getItem(key);
  if (!item) return fallback;
  try {
    return JSON.parse(item);
  } catch (e) {
    return fallback;
  }
}

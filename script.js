import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNOmpDESJB6Z0FWvb-2jLeZ6aDSbxfJAE",
  authDomain: "smartloop-5ab8f.firebaseapp.com",
  projectId: "smartloop-5ab8f",
  storageBucket: "smartloop-5ab8f.firebasestorage.app",
  messagingSenderId: "944421836283",
  appId: "1:944421836283:web:f7f269c875fea9003ce75e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const inviteCode = document.getElementById("inviteCode").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert("Registration error: " + error.message);
    }
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const loginEmailOrPhone = document.getElementById("loginEmailOrPhone").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, loginEmailOrPhone, password);
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } catch (error) {
      alert("Login error: " + error.message);
    }
  });
}

// Deposit
const depositForm = document.getElementById("depositForm");
if (depositForm) {
  depositForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const plan = document.getElementById("plan").value;
    const mpesaCode = document.getElementById("mpesaCode").value;

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await addDoc(collection(db, "deposits"), {
            userId: user.uid,
            email: user.email,
            planAmount: plan,
            mpesaCode: mpesaCode,
            status: "pending",
            createdAt: serverTimestamp()
          });
          alert("Deposit submitted successfully! Await approval.");
          depositForm.reset();
        } catch (error) {
          alert("Error saving deposit: " + error.message);
        }
      } else {
        alert("You must be logged in to submit a deposit.");
      }
    });
  });
}

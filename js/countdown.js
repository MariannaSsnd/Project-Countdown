const countdownDate = new Date("2026-12-31T00:00:00").getTime();
const countdownFunction = setInterval(function() {
const now = new Date().getTime();
const distance = countdownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  // Όταν φτάσει στο 0
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }

}, 1000);


// Subscribe 

// Επιλογή στοιχείων
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeModal = document.getElementById("subscribeModal");
const closeSubscribe = document.getElementById("closeSubscribe");

// Άνοιγμα modal
subscribeBtn.addEventListener("click", () => {
  subscribeModal.style.display = "flex";
});

// Κλείσιμο modal
closeSubscribe.addEventListener("click", () => {
  subscribeModal.style.display = "none";
});

// Κλείσιμο αν κάνει κλικ έξω από το modal-content
window.addEventListener("click", (e) => {
  if(e.target === subscribeModal){
    subscribeModal.style.display = "none";
  }
});


// Contact Us 

// Επιλογή στοιχείων
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeContact = document.getElementById("closeContact");

// Άνοιγμα modal
contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

// Κλείσιμο modal με X
closeContact.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Κλείσιμο modal αν κάνουμε κλικ έξω από το περιεχόμενο
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Το μήνυμα στάλθηκε!");
  contactModal.style.display = "none";
});

// ΦΥΛΟ
const genderSelect = document.getElementById("a10"); // ΦΥΛΟ
const militaryField = document.getElementById("a11").parentElement; // ΣΤΡ.ΥΠΟΧΡΕΩΣΕΙΣ
const militaryYearField = document.getElementById("a12").parentElement; // ΕΤΟΣ ΑΠΟΛ.ΣΤΡΑΤΟΥ
const militarySelect = document.getElementById("a11"); // Ναι / Όχι
const militaryYearInput = document.getElementById("a12");


function toggleMilitaryFields() {
  const isFemale = genderSelect.value === "Γυναίκα";
  const hasMilitary = militarySelect.value === "Ναι";

  // Αν είναι γυναίκα → κρύβονται όλα
  if (isFemale) {
    militaryField.style.display = "none";
    militaryYearField.style.display = "none";
    militarySelect.value = "";
    militaryYearInput.value = "";
    return;
  }

  // Αν είναι άνδρας → εμφανίζονται στρατιωτικές υποχρεώσεις
  militaryField.style.display = "flex";

  // Αν στρατιωτικές = Όχι → κρύβεται το έτος
  if (!hasMilitary) {
    militaryYearField.style.display = "none";
    militaryYearInput.value = "";
  } else {
    militaryYearField.style.display = "flex";
  }
}



// Εκτελείται όταν αλλάζει η επιλογή του ΦΥΛΟ
genderSelect.addEventListener("change", toggleMilitaryFields);
militarySelect.addEventListener("change", toggleMilitaryFields);


// Κάνουμε έλεγχο κατά το φόρτωμα modal για να είναι σωστά από την αρχή
toggleMilitaryFields();

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// Navbar toggler background logic
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const collapseEl = document.getElementById('navbarNavAltMarkup');

  if (toggler && collapseEl) {
    toggler.addEventListener('click', function () {
      collapseEl.classList.toggle('custom-bg');
    });
  }

  // ===== Price Calculation Logic =====
const checkInEl = document.getElementById("checkIn");
const checkOutEl = document.getElementById("checkOut");
const priceEl = document.getElementById("totalPrice");
let pricePerNight = 0;
const gstRate = 0.18;

if (priceEl) {
  pricePerNight = parseInt(priceEl.dataset.price);
}

function calculatePrice() {
  const checkIn = new Date(checkInEl.value);
  const checkOut = new Date(checkOutEl.value);
  if (!isNaN(checkIn) && !isNaN(checkOut) && checkOut > checkIn) {
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const base = pricePerNight * nights;
    const gst = Math.round(base * gstRate);
    const total = base + gst;

    document.getElementById("totalPrice").innerText = total.toLocaleString("en-IN");
    document.getElementById("gstAmount").innerText = gst.toLocaleString("en-IN");
  }
}

if (checkInEl && checkOutEl && priceEl) {
  checkInEl.addEventListener("change", calculatePrice);
  checkOutEl.addEventListener("change", calculatePrice);
}


  // ===== Require Login for Reserve Button =====
  const reserveBtn = document.getElementById("reserveBtn");

  if (reserveBtn && !reserveBtn.dataset.loggedin) {
    reserveBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Please log in to reserve.");
      window.location.href = "/login";
    });
  }  

});

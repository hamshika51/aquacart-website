
// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTop");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Example of simple product filter or alert
function addToCart(product) {
  alert(product + " added to cart!");
}

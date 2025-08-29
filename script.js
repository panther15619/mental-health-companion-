const ventForm = document.getElementById("ventForm");
const ventInput = document.getElementById("ventInput");
const positivityWall = document.getElementById("positivityWall");

ventForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = ventInput.value.trim();
  if (text !== "") {
    const post = document.createElement("p");
    post.classList.add("post");
    post.textContent = text;
    positivityWall.appendChild(post);
    ventInput.value = "";
    const placeholder = positivityWall.querySelector(".placeholder");
    if (placeholder) placeholder.remove();
  }
});

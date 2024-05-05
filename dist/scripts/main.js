let load_more = document.querySelector(".load-more");
load_more.addEventListener("click", function () {
  let section = document.createElement("section");
  section.classList.add("mt-7");
  section.innerHTML = `
<div class="cards">
  <div class="card">
    <div class="image">
      <img src="/dist/img/assassins-creed-mirage.jpg" class="image" />
    </div>
    <div class="title">
      <div class="main-title">Assassin's Creed Mirage</div>
      <div class="sub-title">Developers: Ubisoft</div>
    </div>
    <div class="badge"><i class="bx bxs-star"></i> 15/20</div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/dist/img/assassins-creed-mirage.jpg" class="image" />
    </div>
    <div class="title">
      <div class="main-title">Assassin's Creed Mirage</div>
      <div class="sub-title">Developers: Ubisoft</div>
    </div>
    <div class="badge"><i class="bx bxs-star"></i> 15/20</div>
  </div>
  <div class="card">
    <div class="image">
      <img src="/dist/img/assassins-creed-mirage.jpg" class="image" />
    </div>
    <div class="title">
      <div class="main-title">Assassin's Creed Mirage</div>
      <div class="sub-title">Developers: Ubisoft</div>
    </div>
    <div class="badge"><i class="bx bxs-star"></i> 15/20</div>
  </div>
</div>`;
  load_more.before(section);
});

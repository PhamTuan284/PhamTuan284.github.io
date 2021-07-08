// bike
let navDropdown = document.querySelector(".nav-dropdown");
let navbarExtended = document.querySelector(".navbar-extended");
navDropdown.onclick = (ev) => {
    navbarExtended.classList.toggle("visible");
}

let president = document.querySelector('.president'),
    luxsa = document.querySelector('.luxsa'),
    luxa = document.querySelector('.luxa'),
    fadil = document.querySelector('.fadil'),
    vfe34 = document.querySelector('.vfe34');
let carDetail = document.querySelector('.car-detail');
let carName = document.querySelectorAll('.car-name');

president.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    president.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide text-center" style="position:relative; ">Theon</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner carousel-inner-bike">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allbike/theon1.png" class="d-block w-70 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allbike/theon2.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item">
                    <img src="img/allbike/theon3.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                </div>
                <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </div>
                <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </div>
              </div>
        </div>
        <div class="col-12 d-flex align-items-center mb-5 justify-content-between">
            <div class="car-info d-flex flex-column">
                <b>Tốc độ tối đa</b>
                <span>90 km/h</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>3500 W</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Quãng đường đi được</b>
                <span>Ở tốc độ 30km/h được 101km</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>
    </div>
    `
})

luxsa.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    luxsa.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide text-center" style="position:relative; ">Klara S</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner carousel-inner-bike">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allbike/klara1.png" class="d-block w-70 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allbike/klara2.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item">
                    <img src="img/allbike/klara3.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                </div>
                <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </div>
                <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </div>
              </div>
        </div>
        <div class="col-12 d-flex align-items-center mb-5 justify-content-between">
            <div class="car-info d-flex flex-column">
                <b>Tốc độ tối đa</b>
                <span>48 km/h</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>1200 W</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Dung lượng pin</b>
                <span>4,8h (100% SOC)/pin</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>

    </div>
    `
})

luxa.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    luxa.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide text-center" style="position:relative; ">Feliz</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner carousel-inner-bike">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allbike/feliz1.png" class="d-block w-70 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allbike/feliz2.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item">
                    <img src="img/allbike/feliz3.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                </div>
                <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </div>
                <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </div>
              </div>
        </div>
        <div class="col-12 d-flex align-items-center mb-5 justify-content-between">
            <div class="car-info d-flex flex-column">
                <b>Tốc độ tối đa</b>
                <span>60 km/h</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>1200 W</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Quãng đường đi được</b>
                <span>Ở tốc độ 30km/h được 90km</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>

    </div>
    `
})


fadil.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    fadil.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide text-center" style="position:relative; ">Impes</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner carousel-inner-bike">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allbike/impes1.png" class="d-block w-70 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allbike/impes2.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item">
                    <img src="img/allbike/impes3.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                </div>
                <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </div>
                <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </div>
              </div>
        </div>
        <div class="col-12 d-flex align-items-center mb-5 justify-content-between">
            <div class="car-info d-flex flex-column">
                <b>Tốc độ tối đa</b>
                <span>49 km/h</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>1200 W</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Thời gian sạc</b>
                <span>4,8h (100% SOC)/pin</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>

    </div>
    `
})


vfe34.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    vfe34.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide text-center" style="position:relative; ">Ludo</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner carousel-inner-bike">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allbike/ludo1.png" class="d-block w-70 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allbike/ludo2.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                  <div class="carousel-item">
                    <img src="img/allbike/ludo3.png" class="d-block w-100 m-auto" alt="bike" style="width: 60% !important; ">
                  </div>
                </div>
                <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </div>
                <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </div>
              </div>
        </div>
        <div class="col-12 d-flex align-items-center mb-5 justify-content-between">
            <div class="car-info d-flex flex-column">
                <b>Tốc độ tối đa</b>
                <span>35 km/h</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>500 W</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Thời gian sạc</b>
                <span>4,8h (100% SOC)/pin</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="president.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>

    </div>
    `
})
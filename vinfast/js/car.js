// car
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
    <h1 class="car-name-slide">President</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allcar/president.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allcar/president2.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/president3.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/president4.png" class="d-block w-100" alt="car">
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
                <b>Động cơ</b>
                <span>V6 6.2L</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>420 HP</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Dài x Rộng x Cao</b>
                <span>5146 x 1987 x 1760 (mm)</span>
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
    <h1 class="car-name-slide">LUX SA 2.0</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allcar/luxsa.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allcar/luxsa2.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/luxsa3.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/luxsa4.png" class="d-block w-100" alt="car">
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
                <b>Động cơ</b>
                <span>2.0L</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>228 HP</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Dài x Rộng x Cao</b>
                <span>4940 x 1960 x 1773 (mm)</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="luxsa.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="luxsa.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>
    </div>
    `
})

luxa.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    luxa.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide">LUX A 2.0</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allcar/luxa.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allcar/luxa2.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/luxa3.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/luxa4.png" class="d-block w-100" alt="car">
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
                <b>Động cơ</b>
                <span>2.0L</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>228 HP</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Dài x Rộng x Cao</b>
                <span>4973 x 1900 x 1464 (mm)</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="luxa.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="luxa.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>
    </div>
    `
})


fadil.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    fadil.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide">Fadil</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="img/allcar/fadil.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allcar/fadil2.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/fadil3.png" class="d-block w-100" alt="car">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/fadil4.png" class="d-block w-100" alt="car">
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
                <b>Động cơ</b>
                <span>1.4L</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Công suất</b>
                <span>98 HP</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Dài x Rộng x Cao</b>
                <span>3676 x 1632 x 1495 (mm)</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="fadil.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="fadil.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>
    </div>
    `
})


vfe34.addEventListener("click", (ev) => {
    for (let i = 0; i < carName.length; i++){
        carName[i].classList.remove('car-name-active');
    }
    vfe34.classList.add('car-name-active');
    carDetail.innerHTML = `
    <h1 class="car-name-slide text-center" style="position: relative; width:100%">VF e34</h1>
    <div class="row">
        <div class="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner carousel-inner-vfe34">
                <div class="carousel-item active text-center" data-bs-interval="10000">
                    <img src="img/allcar/vfe34.jpeg" class="d-block w-100 m-auto" alt="car" style="width: 80% !important;">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/allcar/vfe342.jpeg" class="d-block w-100 m-auto" alt="car" style="width: 80% !important;">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/vfe343.jpeg" class="d-block w-100 m-auto" alt="car" style="width: 80% !important;">
                </div>
                <div class="carousel-item">
                    <img src="img/allcar/vfe344.jpeg" class="d-block w-100 m-auto" alt="car" style="width: 80% !important;">
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
                <b>Công suất</b>
                <span>110 kW/147 HP</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Mô men xoắn</b>
                <span>242 Nm</span>
            </div>
            <div class="car-info-slash"></div>
            <div class="car-info d-flex flex-column">
                <b>Dài x Rộng x Cao</b>
                <span>4300 x 1793 x 1613 mm</span>
            </div>
            <div class="car-info-slash d-none d-md-block"></div>
            <a href="vfe34.html"><div class="btn btn-outline-dark car-info-btn d-none d-md-block">Xem chi tiết</div></a>
        </div>
        <a href="vfe34.html"><div class="btn btn-outline-dark car-info-btn d-block d-md-none m-auto">Xem chi tiết</div></a>
    </div>
    `
})
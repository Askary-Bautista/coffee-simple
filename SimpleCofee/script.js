fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const coffeeListContainer = document.querySelector('.coffe-cards'); // Selecciona el contenedor donde quieres mostrar los datos

        data.forEach(coffee => {
            const coffeeCard = document.createElement('div'); // Crea un nuevo elemento <div> para cada café
            coffeeCard.classList.add('coffee-card'); // Agrega una clase para dar estilo a cada tarjeta de café

            // Construye el contenido de la tarjeta de café utilizando los datos del JSON
            coffeeCard.innerHTML = `
                <div class="content-1">
                    <img class="coffe-image" src="${coffee.image}" alt="${coffee.name} Image">
                </div>

                <div class="content-2">
                    <div class="coffe-name">${coffee.name}</div>
                    <div class="coffe-price">${coffee.price}</div>
                </div>

                ${coffee.popular ? '<div class="coffe-popular">Popular</div>' : ''} <!-- Aquí se controla la etiqueta 'Popular' -->

                <div class="content-3">
                    <div class="coffe-rating">${coffee.rating}</div>
                    <div class="coffe-votes">${coffee.rating === "" || coffee.votes === 0 ? 'No Ratings' : `(${coffee.votes} votes)`}</div>
                    <div class="coffe-available">${coffee.available ? '' : 'Sold out'}</div>
                </div>
            `;

            // Validar el rating y agregar SVG antes del rating
            const ratingElement = coffeeCard.querySelector('.coffe-rating');
            if (coffee.rating > 4.5) {
                const svgElement = document.createElement('img');
                svgElement.classList = "star-rating";
                svgElement.src = 'svg/Star_fill.svg';
                svgElement.alt = 'no hay imagen';
                ratingElement.parentNode.insertBefore(svgElement, ratingElement); // Agregar SVG antes del rating
            } else if (coffee.rating === "") {
                const svgElement = document.createElement('img');
                svgElement.src = 'svg/Star.svg';
                svgElement.alt = 'no hay imagen';
                ratingElement.parentNode.insertBefore(svgElement, ratingElement); // Agregar otro SVG antes del rating
            }

            coffeeListContainer.appendChild(coffeeCard); // Agrega la tarjeta de café al contenedor
        });
    })
    .catch(error => {
        console.log(error);
    });

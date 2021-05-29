//Вывод карточек товаров
const items = [
    {
        like: false,
        discount: true,
        discountSize: '-40%',
        img: './img/card_1.png',
        title: 'Кот полосатый',
        age: 10,
        price: 30000,
        btn: 'active',
    },
    {
        like: true,
        discount: false,
        img: './img/card_2.png',
        title: 'Кот неполосатый',
        age: 7,
        price: 40000,
        btn: 'no-active',
    },
    {
        like: false,
        discount: false,
        img: './img/card_3.png',
        title: 'Кот очень полосатый',
        age: 1,
        price: 20000,
        btn: 'active',
    },
    {
        like: false,
        discount: false,
        img: './img/card_1.png',
        title: 'Кот немного полосатый',
        age: 8,
        price: 23000,
        btn: 'active',
    },
    {
        like: false,
        discount: true,
        discountSize: '-40%',
        img: './img/card_3.png',
        title: 'Кот слегка полосатый',
        age: 4,
        price: 30000,
        btn: 'active',
    },
    {
        like: true,
        discount: false,
        img: './img/card_2.png',
        title: 'Кот неполосатый',
        age: 2,
        price: 10000,
        btn: 'no-active',
    },
];
const catalog = document.querySelector('.catalog__list');
const sortPriceBtn = document.querySelector('.sorting__price');
const sortAgeBtn = document.querySelector('.sorting__age');
const scrollUpButton = document.querySelector('.btn__up');

window.addEventListener('DOMContentLoaded', () => {
    addItems(items)

});

sortPriceBtn.addEventListener('click', () => {
    const btnValue = sortPriceBtn.classList[2]
    let sortArr;

    if (btnValue === undefined) {
        sortPriceBtn.classList.add('plus')

        sortArr = items.sort((a, b) => a.price > b.price ? 1 : -1);
    } else if (btnValue === 'plus') {
        sortPriceBtn.classList.remove('plus');

        sortArr = items.sort((a, b) => a.price < b.price ? 1 : -1);
    }

    deleteItems()
    addItems(sortArr)
})

sortAgeBtn.addEventListener('click', () => {
    const btnValue = sortPriceBtn.classList[2]
    let sortArr;

    if (btnValue === undefined) {
        sortPriceBtn.classList.add('plus')

        sortArr = items.sort((a, b) => a.age > b.age ? 1 : -1);
    } else if (btnValue === 'plus') {
        sortPriceBtn.classList.remove('plus');

        sortArr = items.sort((a, b) => a.age < b.age ? 1 : -1);
    }

    deleteItems()
    addItems(sortArr)
})

const sortButtons = document.querySelectorAll('.sorting-btn');
sortButtons.forEach(btn => btn.onclick = function () {
    this.childNodes[1].classList.toggle('rotate');

})

function addItems (arr) {
    for (const item of arr) {
        const card = document.createElement('li');
        card.className = 'catalog__item';
        catalog.appendChild(card)
        const like = document.createElement('img');
        like.className = 'item__like';
        like.setAttribute('src', './img/like.png')
        card.appendChild(like)
        if (item.discount === true) {
            const itemDiscount = document.createElement('div')
            itemDiscount.className = 'item__discount';
            itemDiscount.innerText = `${item.discountSize}`
            card.appendChild(itemDiscount)
        }
        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', `${item.img}`)
        cardImg.className = 'item__img'
        card.appendChild(cardImg)
        const itemContent = document.createElement('div');
        itemContent.className = 'item__content';
        card.appendChild(itemContent)
        const itemTitle = document.createElement('h2');
        itemTitle.className = 'item__title';
        itemTitle.innerText = `${item.title}`
        itemContent.appendChild(itemTitle)

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item__info';
        itemContent.appendChild(itemInfo)
        const infoColor = document.createElement('span');
        infoColor.className = 'info__color';
        infoColor.classList.add('info');
        infoColor.innerText = 'Коричневый окрас'
        itemInfo.appendChild(infoColor)
        const infoAge = document.createElement('span');
        infoAge.className = 'info__age';
        infoAge.classList.add('info');
        infoAge.innerText = 'Возраст'
        itemInfo.appendChild(infoAge)
        const age = document.createElement('span');
        age.className = 'age';
        age.classList.add('num');
        age.innerText = `${item.age}` + ' мес.'
        infoAge.appendChild(age)
        const infoPaws = document.createElement('span');
        infoPaws.className = 'info__paws';
        infoPaws.classList.add('info');
        infoPaws.innerText = 'Кол-во лап'
        itemInfo.appendChild(infoPaws)
        const paws = document.createElement('span');
        paws.className = 'counter';
        paws.classList.add('num');
        paws.innerText = '4'
        infoPaws.appendChild(paws)

        const itemPrice = document.createElement("h2");
        itemPrice.className = 'item__price';
        itemPrice.innerText = `${item.price}` + ' руб.'
        itemContent.appendChild(itemPrice)
        const itemBtn = document.createElement('button');
        itemBtn.className = 'item__btn'
        itemBtn.classList.add(`${item.btn}`)
        if (item.btn === 'active') {
            itemBtn.innerText = 'Продан'
        } else { itemBtn.innerText = 'Купить' }
        card.appendChild(itemBtn)
    }

    const likeButtons = document.querySelectorAll('.item__like')

    likeButtons.forEach(btn => btn.addEventListener('click', function () {
        if (this.classList[1] === undefined) {
            this.classList.add('laked')
            this.style.opacity = '1';

            alert('Товар добавлен в избранное.')
        } else {
            this.classList.remove('laked')
            this.style.opacity = '0.5'
        }
    }))
}

function deleteItems () {
    const itemsCard = document.querySelectorAll('.catalog__item');
    itemsCard.forEach(item => item.remove())
}

//ВАЛИДАЦИЯ
new JustValidate('.footer__form', {
    rules: {
        mail: {
            required: true,
            email: true,
        },
    },
    messages: {
        mail: "Укажите ваш e-mail."
    },
});

//SCROLL UP
window.addEventListener('scroll', function () {
    const y = pageYOffset;

    if (y >= 300) {
        scrollUpButton.style.display = 'block';
        scrollUpButton.style.opacity = '1';
    } else {
        scrollUpButton.style.display = 'none';
        scrollUpButton.style.opacity = '0';
    }
})

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.btn__up');
    // При клике прокручиваем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        // Вызываем функцию, первый аргумент - отступ, второй - скорость скролла, чем больше значение, тем медленнее скорость прокрутки
        scrollTo(0, 400);
    }
});

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}
let pointer = 1;
const left_button_DOM = document.getElementById('button-left');
const right_button_DOM = document.getElementById('button-right');

const list_cards = [
    {
        img_src: './Assets/picture_1.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_2.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_3.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_1.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_2.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_3.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_1.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_2.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
    {
        img_src: './Assets/picture_3.svg',
        category: 'Ngành',
        date: '1 Mar 2023',
        title: 'TOP useful office software for programmers.'
    },
]

function generateList(parent, arr) {
    const DOM = document.querySelector(parent);
    let _html = arr.map(item => `
        <div class="cards">
                <div class="background-img">
                    <img src="${item.img_src}" alt="">
                </div>
                <div class="text">
                    <div class="title-small">
                        <div>
                            ${item.category}
                        </div>
                        <img src="./Assets/dot.svg" alt="" class="dot">
                        <div>
                            ${item.date}
                        </div>
                    </div>
                    <div class="title-big">
                        ${item.title}
                    </div>
                </div>
            </div>
    `).join('');

    DOM.innerHTML = _html;
}

generateList('.list-cards', list_cards);

const list_cards_DOM = document.querySelector('.list-cards');
//console.log(list_cards_DOM);

function checkDisable() {
    if (pointer == 1) {
        left_button_DOM.disabled = true;
    } else if (pointer == list_cards.length) {
        right_button_DOM.disabled = true;
    }
}

function goLeft() {
    //console.log('going left');
    pointer--;
    right_button_DOM.disabled = false;
    // const listEl_DOM = document.querySelector('.list-cards');
    // //console.log(listEl_DOM);
    // listEl_DOM.className = 'list-cards';
    // listEl_DOM.className += ' left';
    list_cards_DOM.style.transform = `translateX(${-516 * (pointer - 1)}px)`;
    checkDisable();
    //console.log(pointer);

}

function goRight() {
    //console.log('going right');
    pointer++;
    left_button_DOM.disabled = false;
    list_cards_DOM.style.transform = `translateX(${-516 * (pointer - 1)}px)`;
    checkDisable();
    //console.log(pointer);
}

if (pointer === 1) {
    document.querySelector('.left-right').children[0].disabled = 'true';
}

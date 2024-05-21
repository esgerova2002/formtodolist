document.addEventListener("DOMContentLoaded", function() {
    const yeniRolButton = document.querySelector('.topbutton button');
    const searchInput = document.querySelector('#search');
    const formHTML = `
    <form id="newRoleForm">
        <div class="grid">
            <fieldset><legend>Adi</legend><input type="text" name="name" placeholder="Rəhbər"></fieldset>
            <fieldset><legend>Haqqında</legend><input type="text" name="description" placeholder="Yeni rol yaradılması"></fieldset>
        </div>
        <fieldset id="f3"><legend>Haqqında</legend><select name="category">
            <option value="secin">Secin</option>
            <option value="sistem">Sistem rolları</option>
            <option value="diger">Digər rollar</option>
        </select></fieldset>
        <div class="bottombutton">
            <button type="button" id="imtina"><img src="./img/bottom.svg" alt="">İmtina</button>
            <button type="button" id="yaddas"><img src="./img/Check.svg" alt="">Yadda saxla</button>
        </div>
    </form>
    `;

    yeniRolButton.addEventListener('click', function() {
        const formContainer = document.createElement('div');
        formContainer.innerHTML = formHTML;
        document.body.appendChild(formContainer);

        const imtinaButton = document.querySelector('#imtina');
        const yaddaSaxlaButton = document.querySelector('#yaddas');

        imtinaButton.addEventListener('click', function() {
            formContainer.remove();
        });

        yaddaSaxlaButton.addEventListener('click', function() {
            const name = document.querySelector('input[name="name"]').value;
            const description = document.querySelector('input[name="description"]').value;
            const category = document.querySelector('select[name="category"]').value;

            if (name && description && category !== 'secin') {
                const newCard = document.createElement('div');
                newCard.classList.add('card');
                newCard.innerHTML = `<p>${name}</p><p>${description}</p>`;

                if (category === 'sistem') {
                    document.querySelector('.sistemRollari .cards').appendChild(newCard);
                } else {
                    const digerRollar = document.querySelector('.digerRollar .cedvel');
                    if (digerRollar.querySelector('.cards')) {
                        digerRollar.innerHTML = '';
                    }
                    digerRollar.appendChild(newCard);

                    const digerRollarCount = document.querySelector('.digerRollar .basliq span');
                    const digerRollarCountText = digerRollarCount.textContent;
const countWithoutParentheses = digerRollarCountText.replace('(', '').replace(')', '');
const currentCount = Number(countWithoutParentheses) + 1;


                }
                formContainer.remove();
            } else {
                alert('Zəhmət olmasa bütün sahələri doldurun.');
            }
        });
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const name = card.querySelector('p:first-child').textContent.toLowerCase();
            const description = card.querySelector('p:last-child').textContent.toLowerCase();
            
            if (name.includes(query) || description.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});







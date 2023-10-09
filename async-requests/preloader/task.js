const itemsWrapper = document.querySelector('#items');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

let xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function(event) {
    if(this.readyState === 4 && this.status === 201) {
        const responseText = this.responseText;
        const parsedResponse = JSON.parse(responseText);
        const valuteObj = parsedResponse.response.Valute;

        for(const currencyCode in valuteObj) {
            if(valuteObj.hasOwnProperty(currencyCode)) {
                const currencyItem = valuteObj[currencyCode];

                let divItemCode = document.createElement('div');
                divItemCode.className = 'item__code';
                divItemCode.innerHTML = currencyItem.CharCode;

                let divItemValue = document.createElement('div');
                divItemValue.className = 'item__value';
                divItemValue.innerHTML = currencyItem.Value;

                let divItemCurrency = document.createElement('div');
                divItemCurrency.className = 'item__currency';
                divItemCurrency.innerHTML = 'руб.';

                let itemsContainer = document.createElement('div');
                itemsContainer.classname = 'item';
                
                itemsContainer.appendChild(divItemCode);
                itemsContainer.appendChild(divItemValue);
                itemsContainer.appendChild(divItemCurrency);
                itemsWrapper.appendChild(itemsContainer);

            };
        };
        loader.classList.toggle('loader__active');
    };
};

xhr.send();
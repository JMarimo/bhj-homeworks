const modal = document.querySelector('#subscribe-modal');
const modalCloseTimes = modal.querySelector('.modal__close');

let cookie = document.cookie;

function checkCookie() {
  let cookieArray = cookie.split('; ');

  cookieArray.find(item => {
    if(item !== 'modalclosed=true') {
      modal.classList.add('modal_active');
    }
  });
};

checkCookie();

function closeModal(event) {
  event.preventDefault();

  modal.classList.remove('modal_active');
  document.cookie = 'modalclosed=true';
};

modalCloseTimes.addEventListener('click', closeModal);
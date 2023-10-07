const progress = document.querySelector('#progress');
const form = document.forms.form;

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('filename', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.upload.addEventListener('progress', event => {
        if(event.lengthComputable) {
            let progressLoad = event.loaded / event.total;
            progress.value = progressLoad;
        };
    });
    xhr.onreadystatechange = () => {
        if(xhr.readyState !== xhr.Done && xhr.Status !== 200) {
            console.log('ошибка загрузки файла!');
        } else {
            console.log('Загрузка успешно завершена!');
        };
        };
        xhr.send(formData);
    });
const ip = 'http://192.168.239.148:8080'

export const post = (url, form) => {
    return fetch(url, { method: 'POST', body: form})
                .then((response) => (response.json()))
                .catch((error) => { console.error(error); });
}



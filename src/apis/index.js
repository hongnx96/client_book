import request from 'axios';

export default () => {
    return request.create({
        baseURL: 'https://server-book.herokuapp.com'
    });
}
import axios from 'axios';

export const LOADING_POSTS = 'LOADING_POSTS';
export const GET_POSTS = 'GET_POSTS';

export function loadingPosts(loading) {
    return {
        type: LOADING_POSTS,
        payload: loading,
    };
}

export function fetchPosts(data) {
    return {
        type: GET_POSTS,
        payload: data,
    };
}

export function postsFetchData(url) {
    return (dispatch) => {
        const request = axios.get(url);
        request.then((response) => {
            dispatch(loadingPosts(false));
            dispatch(fetchPosts(response.data.post));
        });
    };
}
import { GET_POSTS } from '../../actions/actions';

export default function getPosts(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
    }
    return state;
} 
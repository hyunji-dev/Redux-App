// 액션 생성
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increase = (size) => {
    return { type: INCREMENT, size: size };
};

export const decrease = (size) => {
    return { type: DECREMENT, size: size };
};

const initstate = {
    number: 0,
};

// 규칙: 1.state, 2.action을 받음
const reducer = (state = initstate, action) => {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + action.size };
        case DECREMENT:
            return { number: state.number - action.size };
        default:
            return state;
    }
};

export default reducer;

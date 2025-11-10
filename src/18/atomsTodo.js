import { atom } from 'jotai';

export const todosAtom = atom([
    {id : "1", text: '리액트 공부', completed: false},
    {id : "2", text: '넥스트 js 공부', completed: false}
]);

export const completedAtom = atom((get) => {
    const todos = get(todosAtom); // todosAtom의 값을 갖고옴

    return todos.filter(todo => todo.completed).length;
});

export const inCompletedAtom = atom((get) => {
    const todos = get(todosAtom); // todosAtom의 값을 갖고옴

    return todos.filter(todo => !todo.completed).length;
});
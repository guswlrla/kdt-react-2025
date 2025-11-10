import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useAtomValue } from 'jotai'
import { todosAtom, completedAtom, inCompletedAtom } from './atomsTodo'

export default function TodoList() {
  const todos = useAtomValue(todosAtom);
  const completed = useAtomValue(completedAtom);
  const incompleted = useAtomValue(inCompletedAtom);
//   console.log(todos);
  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h1 className='w-full max-w-3xl text-2xl font-bold text-center mt-10'>🎯 할 일 목록</h1>
      <div className='w-full max-w-3xl bg-gray-100 p-5 my-2 font-bold'>전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 : {incompleted}개 </div>
      <TodoInput />
      {todos.map(i => <TodoItem key={i.id} todoItem={i}/>)}
    </div>
  )
}

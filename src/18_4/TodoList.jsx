import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { supabase } from "../supabase/client";


export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [incompleted, setIncompleted] = useState(0);
  // console.log(todos);

  // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  // const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

  const getTodos = async () => { // 라이브러리를 써서 간단하게 할 수 있음
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('id', { ascending: false });
    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      setTodos(data);
    }
  }

  // const getTodos = async () => { // 데이터 가져오기
  //   let url = `${supabaseUrl}/rest/v1/todos?select=*&order=id.desc`
  //   // console.log(url)
  //   const resp = await fetch(url,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'apikey' : supabaseKey,
  //         'Authorization' : `Bearer ${supabaseKey}`
  //       }
  //     });
  //     // console.log(resp)
  //     if(resp.ok) {
  //       const data = await resp.json();
  //       console.log(data);
  //       setTodos(data);
  //     } else {
  //       console.log('Error fetching todos : ', resp.statusText);
  //       setTodos([]);
  //     }
  // }

  const handleSave = async (newItem) => {
    setTodos(newItem);
    localStorage.setItem("todo", JSON.stringify(newItem));
  }

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setCompleted(todos.filter(todo => todo.completed).length);
    setIncompleted(todos.filter(todo => !todo.completed).length);
  }, [todos])

  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h1 className='w-full max-w-3xl text-2xl font-bold text-center mt-10'>🎯 할 일 목록(Supabase Client 라이브러리)</h1>
      <div className='w-full max-w-3xl bg-gray-100 p-5 my-2 font-bold'>전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 : {incompleted}개 </div>
      <TodoInput todos={todos} setTodos={handleSave} />
      {todos.map(i => <TodoItem key={i.id} todoItem={i} todos={todos} setTodos={handleSave} />)}
    </div>
  )
}

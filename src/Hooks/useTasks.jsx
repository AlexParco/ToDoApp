import {useState, useEffect} from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(window.localStorage.getItem('tasks')) || [])

  useEffect(()=> {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))

  }, [tasks])
  
  return {
    tasks,
    setTasks
  }
}


import React from 'react'
import { useRef, useState, useEffect } from 'react';
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Checkbox} from '@/components/ui/checkbox'
import { PencilIcon, TrashIcon, CheckIcon } from "lucide-react"

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props;
    const[isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(true);

    // const changeFocus = () => {
    //     inputRef.current.disabled = false;
    //     inputRef.current.focus();
    // };

    const handleEditClick = () => {
      setIsEditing(true);  // Enable edit mode
    };

    useEffect(() => {
      if (isEditing && inputRef.current){
        inputRef.current.focus();
      }
    }, [isEditing])

    const update = (id, value, e) => {
        if (e.which === 13) {
          //here 13 is key code for enter key
          updateTodo({ id, item: value });
          // inputRef.current.disabled = true;
          setIsEditing(false)
        }
    };

  return (
    
    <div className="flex max-w-xl items-center bg-secondary p-4 rounded-lg shadow mb-2">
      <Checkbox checked={item.completed}
      onCheckedChange={() => completeTodo(item.id)}
      className="mr-2"/>
      {isEditing ? 
      <Input ref={inputRef}  defaultValue={item.item} 
      onKeyDown={(e) => update(item.id, inputRef.current.value, e)} className="flex-grow mr-2"/> : 
      <p className={`break-words flex-grow mr-2 ${item.completed ? 'line-through text-gray-500' : ''}`}>
        {item.item} 
      </p> }
      <div className="flex space-x-2 ml-auto">
        <Button onClick={() => completeTodo(item.id)} variant="outline" > <CheckIcon /> </Button>
        <Button onClick={handleEditClick} variant="outline" > <PencilIcon /></Button>
        <Button onClick={() => removeTodo(item.id)} variant="destructive" ><TrashIcon /></Button>
      </div>
    </div>
    
  )
}

export default TodoItem;
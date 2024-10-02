/* eslint-disable react/prop-types */

import {nanoid} from '@reduxjs/toolkit'
import { useState } from 'react'
import {connect} from 'react-redux'
import {addTodos} from '../redux/reducers'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'


export const AddTodo = (props) => {
    const [todo, setTodo] = useState("");
    
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    console.log(props)
    const add = () => {
        if (todo === "") alert("Input is ready")
        else {
            props.addTodos({
                id : nanoid(),
                item : todo,
                completed : false
            })
            setTodo("")
        }
    }


  return (
    <div className="max-w-xl mx-auto p-4 bg-background rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-primary">Todo List</h1>
        <div className="flex mb-4">
            <Input type="text" 
            onChange={(e) => handleChange(e)}
            value={todo}
            placeholder = {"Add a new todo"}
            className="flex-grow mr-2"/>
            <Button onClick={() => add()}>Add</Button>
        </div>
    </div>
  )
}



const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (obj) => dispatch(addTodos(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
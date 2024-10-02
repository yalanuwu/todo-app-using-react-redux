import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addTodos, updateTodos, removeTodos, completeTodos} from '../redux/reducers'
import TodoItem from './TodoItem'

export const DisplayTodos = (props) => {
  return (
    <div>
        {props.todos.length > 0 ? 
        <ul className='max-w-xl items-center mx-auto p-4 bg-background rounded-lg shadow mb-2 mt-2'>
            {props.todos.map((item) => {
                return ( <TodoItem 
                    key={item.id}
                    item = {item}
                    removeTodo = {props.removeTodo}
                    completeTodo = {props.completeTodo}
                    updateTodo = {props.updateTodo}
                />)
            })}
        </ul> : null}
        
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        todos : state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (todoText) => dispatch(addTodos( todoText )),
        removeTodo : (id) => dispatch(removeTodos(id)),
        updateTodo : (obj) => dispatch(updateTodos(obj)),
        completeTodo : (id) => dispatch(completeTodos(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)
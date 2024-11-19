import React, { useState } from 'react'
import { TaskModal } from './components/TaskModal'
import { Calendar } from './components/Calendar'

const Main: React.FC = () => {

  return (
    <div className="App">
      <h1>タスク管理</h1>
      <Calendar />
    </div>
  )
}

export default Main

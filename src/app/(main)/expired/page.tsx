import TaskCard from '@/components/TaskCard/TaskCard';
import Link from 'next/link';
import React from 'react'
import { MdAddTask } from 'react-icons/md';

const ExpiredTaskPage = () => {
    return (
        <div className="text-gray-800 p-8 h-full overflow-y-auto pd-24">
          <header className="flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
          </header>
          <div className="mt-8 flex flex-wrap gap-4">
            <TaskCard/>
          </div>
        </div>
      );
}

export default ExpiredTaskPage
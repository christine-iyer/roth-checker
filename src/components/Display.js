import React from 'react'
import DisplayItem from './DisplayItem'
// import Container from 'react-bootstrap/Container'
// import {
//   DndContext,
//   closestCenter
// } from '@dnd-kit/core'
// import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Display = ({ results, errorMessage }) => {
  return (
    !results ? errorMessage :
      (<section className='section'>

        {results.map((result) => (
          <DisplayItem
            key={result?.symbol}
            result={result} />
        ))}
      </section>)

  )
}

export default Display
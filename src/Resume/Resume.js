import React from 'react'
import pdf from './resume.pdf'

export default function Resume () {
    return (
        <object className='embed-responsive embed-responsive-16by9' data={pdf} type="application/pdf">
            <embed className='embed-responsive-item' src={pdf} type="application/pdf" title='Grace resume'></embed>
        </object>
    )
}
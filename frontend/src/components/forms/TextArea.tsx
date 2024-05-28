import Button from '@/components/Buttons/Button'
import React from 'react'

const TextArea = ({ btnLabel = 'Send', formSubmitHandler }) => {
    const [value, setValue] = React.useState('')
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        formSubmitHandler(value)
        setValue('')
    }
    return (
        <form onSubmit={submitHandler} className='w-full space-y-6 relative'>
            <fieldset>
                <textarea className='border-2 border-blue-600 w-full rounded-lg p-4 lg:placeholder:text-lg'
                    rows={10}
                    placeholder='Leave your comment here...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}>
                </textarea>
                <Button className='absolute bottom-6 right-3 max-w-[100px] text-xs font-send'>{btnLabel}</Button>
            </fieldset>
        </form>
    )
}

export default TextArea

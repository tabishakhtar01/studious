import React from 'react'
import SuggestionBox from './SuggestionBox'

const Input = ({list,clearSuggestion,inputFunction,removeSuggestion,setInput}) => {
    return (
    <>
        <div className="sticky top-0 z-10 max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
                <div className="w-full p-5">
                    <div className="relative">
                        {list && list.length > 0 ? <i onClick={clearSuggestion} className="absolute animate-bounce text-lg text-gray-500 hover:text-red-700 hover:scale-105 far fa-trash-alt top-5 left-4"></i> : <i className="absolute animate-bounce fa fa-search text-gray-400 top-5 left-4"></i>}
                        <input type="text" autoComplete='off' onChange={inputFunction} onKeyUp={removeSuggestion} className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name=""/>
                        <SuggestionBox list={list} setInput={setInput} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Input

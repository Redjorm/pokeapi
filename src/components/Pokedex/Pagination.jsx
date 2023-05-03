import React, { useEffect, useState } from 'react'
import "./styles/pagination.css"

const Pagination = ({ page, setPage, max, pokemons }) => {
    const [input, setInput] = useState(1);
    const [numpage, setNumpage] = useState(0);
  
    useEffect(() => {
      setInput(1);
      setPage(1);
    }, [pokemons]);
  
    const nextPage = () => {
      setInput(parseInt(input) + 1);
      setPage(parseInt(page) + 1);
    };
  
    const previousPage = () => {
      setInput(parseInt(input) - 1);
      setPage(parseInt(page) - 1);
    };
  
    const onKeyDown = (e) => {
      if (e.keyCode == 13) {
        setPage(parseInt(e.target.value));
        if (
          parseInt(e.target.value < 1) ||
          parseInt(e.target.value) > Math.ceil(max) ||
          isNaN(parseInt(e.target.value))
        ) {
          setPage(1);
          setInput(1);
        } else {
          setPage(parseInt(e.target.value));
        }
      }
    };
  
    const onChange = (e) => {
        if (e.target.value <= 0) {
            
        }else{
            setInput(e.target.value);
        }
      
    };
  
    //console.log(max);
    useEffect(() => {
      if (max < 1) {
        setNumpage(1);
      } else if (max > 1) {
        setNumpage(Math.trunc(max) + 1);
      } else if (max == 1) {
        setNumpage(max);
      }
    }, [max]);
  
    return (
      <div className="pagination">
        <div className="options">
          <button
            className="btn_pagination-pre"
            disabled={page === 1 || page < 1}
            onClick={previousPage}
          >
            Prev.
          </button>
          <input
              className="pagination__input"
            id="pagintaion_id"
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onKeyDown(e)}
            name="page"
            autoComplete="off"
            value={input}
            min={1}
            disabled
          />
          <p className='p__pagination'> de {numpage} </p>
          <button
            className="btn_pagination-next"
            disabled={page === Math.ceil(max) || page > Math.ceil(max)}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

export default Pagination
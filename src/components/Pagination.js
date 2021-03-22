import React,{useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const [pageSet,setPageSet] = useState(10)
  const [prevPageList,setPrevPageList] = useState(0)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () =>{
      setPageSet(pageSet-10)
      setPrevPageList(prevPageList-10)
    }
    const handleNext = () =>{
      setPrevPageList(pageSet)
      setPageSet(pageSet+10)
  }
  return (
      <nav>
      <ul className='pagination'>
        {prevPageList !==0 ? <li className='page-item'>
            <a onClick={() => handlePrev()} href='!#' className='page-link'>
                Prev
            </a>
        </li> :''}
        {pageNumbers.slice(prevPageList,pageSet).map(number => (
            <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='javascript:void(0)' className={(currentPage == number)?'page-link active' : 'page-link' }>
              {number}
            </a>
          </li>
        ))}
        {console.log(prevPageList)}
        {prevPageList !== (pageNumbers.length - 10) ? <li className='page-item'>
            <a onClick={() => handleNext()} href='!#' className='page-link'>
                Next
            </a>
        </li>:'' }

      </ul>
    </nav>
  );
};

export default Pagination;
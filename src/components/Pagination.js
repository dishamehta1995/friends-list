import React,{useState} from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const [pageSet,setPageSet] = useState(5)
  const [prevPageList,setPrevPageList] = useState(0)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () =>{
      setPageSet(pageSet-5)
      setPrevPageList(prevPageList-5)
    }
    const handleNext = () =>{
      setPrevPageList(pageSet)
      setPageSet(pageSet+5)
  }
  return (
      <nav>
      <ul className='pagination'>
        {prevPageList !==0 ? <li className='page-item'>
            <a onClick={() => handlePrev()} href='javascript:void(0)' className='page-link'>
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
        {prevPageList !== (pageNumbers.length - 5) ? <li className='page-item'>
            <a onClick={() => handleNext()} href='javascript:void(0)' className='page-link'>
                Next
            </a>
        </li>:'' }

      </ul>
    </nav>
  );
};

export default Pagination;
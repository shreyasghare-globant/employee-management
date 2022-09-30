import Button from "./Button";

const Pagination = (props) => {

    const {
        pageSize,
        totalEntries,
        currentPage,
        setCurrentPage,
        setPageSize,
    } = props;

    const totalPages = Math.ceil(totalEntries/pageSize);

    const buttonClasses = (key) => 
        key === currentPage ?
        `transparent_background pagination-button selected-page` :
        `transparent_background pagination-button`;

    const allPages = (
        [...Array(totalPages)]
            .map((_, index) => index + 1)
            .map(key => <Button 
                            key={key}
                            text={key}
                            buttonClass = {buttonClasses(key)}
                            clickHandler={() => changePage('page', key)}
                        />
                )
    )

    const partialPages = (
        <>
            {
                currentPage > 2 &&
                <span className="pagination-button"> ... </span>
            }
            {
            [
                currentPage-1 || null,
                currentPage,
                currentPage !== totalPages ? currentPage+1 : null
            ]
                .map(key => <Button 
                                key={key}
                                text={key}
                                buttonClass = {buttonClasses(key)}
                                clickHandler={() => changePage('page', key)}
                                disabled={!key}
                            />
                    )}
            {
                currentPage < totalPages-1 &&
                <span className="pagination-button"> ... </span>
            }
        </>
    )

    
    const pageOptions = [3, 5, 10, 20];

    const setPageSizeHandler = (e) => {
        setPageSize(e.target.value);
    }

    const changePage = (action, page) => {
        switch (action) {
            case 'page':
                setCurrentPage(page)
                break;
            case 'previous':
                if(currentPage !== 1) {
                    setCurrentPage(currentPage-1);
                }
                break;
            case 'next':
                if(currentPage < totalPages) {
                    setCurrentPage(currentPage+1);
                }
                break;
            default: break;
        }
    }

    const paginationUI = (
        <>
            <div className="pagination-text">
                <label htmlFor="pageSize">Showing</label>
                <select
                    name="pageSize"
                    id="pageSize"
                    className="page-size-dropdown"
                    onChange={setPageSizeHandler}
                    value= {pageSize}
                >
                    {pageOptions.map((option) => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
                out of {totalEntries} entries
            </div>
            <div>
                <Button
                    key = 'previous'
                    text={'Previous'}
                    buttonClass = {buttonClasses(undefined)}
                    clickHandler={() => changePage('previous', null)}
                />
                {Boolean(totalPages <= 3) && allPages}
                {Boolean(totalPages > 3) && partialPages}
                <Button
                    key = 'next'
                    text={'Next'}
                    buttonClass = {buttonClasses(null)}
                    clickHandler={() => changePage('next', null)}
                />
            </div>
        </>
    )
    return (
        <>
            { Boolean(totalPages) && paginationUI }
        </>
    )
}

export default Pagination;

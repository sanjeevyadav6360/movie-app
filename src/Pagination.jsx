let Pagination = (props) => {
    let arr = [];
    for (let i = 0; i < props.numberofpages; i++) {
        arr.push(i);
    }
    return (
        <nav>
            <ul class="pagination mt-4">
                {arr.map((el) => {
                    return (
                        <li
                            onClick={() => {
                                props.selectpage(el);
                            }}
                            class={`page-item ${props.currPage === el ? "active" : ""}`}
                        >
                            <a class="page-link">{el}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
import React, { useState, useMemo } from "react";
import Pagination from "react-js-pagination";
import "Assets/css/pagenations.css";
import data from "./mock-data.json";
let PageSize = 5; //보여지는 페이지 수 조절
const PageNation = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		console.log(page);
	};
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>FIRST NAME</th>
						<th>LAST NAME</th>
						<th>EMAIL</th>
						<th>PHONE</th>
					</tr>
				</thead>
				<tbody>
					{currentTableData.map((item) => {
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.first_name}</td>
								<td>{item.last_name}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* <div>
				{currentTableData.map((item) => {
					return (
						<div>
							{item.id}
							{item.first_name}
							{item.last_name}
							{item.email}
							{item.phone}
						</div>
					);
				})}
			</div> */}
			<Pagination
				pageSize={3}
				activePage={currentPage}
				itemsCountPerPage={5}
				totalItemsCount={450}
				pageRangeDisplayed={5}
				prevPageText={"‹"}
				nextPageText={"›"}
				onChange={handlePageChange}
			/>
		</>
	);
};

export default PageNation;

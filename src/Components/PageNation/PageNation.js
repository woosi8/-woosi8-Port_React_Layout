import React, { useState, useMemo, useEffect } from "react";
import Pagination from "react-js-pagination";
import "Assets/css/pagenations.css";
import data from "./mock-data.json";
import { Button2, ColorBox } from "../../Assets/Common-styled";

let PageSize = 5; //보여지는 페이지 수 조절
const PageNation = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(
			"https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setVideos(result.items))
			.catch((error) => console.log("error", error));
	}, []);

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

	console.log(videos);

	// BTN Click 이벤트
	const [mycolor, setMyColor] = useState("red");
	const [textcolor, setTextcolor] = useState("white");
	const onClick = () => {
		mycolor === "red" ? setMyColor("yellow") : setMyColor("red");
		mycolor === "red" ? setTextcolor("red") : setTextcolor("white");
	};

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
			{/* <ul key={item.id}>
								<li>{item.id}</li>
								<li>{item.first_name}</li>
								<li>{item.last_name}</li>
								<li>{item.email}</li>
								<li>{item.phone}</li>
			</ul> */}
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

			<ColorBox mycolor={mycolor} onClick={onClick} textcolor={textcolor}>
				BTN
			</ColorBox>
			<Button2 color="blue" background="green">
				Green Button
			</Button2>

			<ul>
				{videos.map((video) => (
					<li key={video.id}>
						<div>
							<img
								src={video.snippet.thumbnails.medium.url}
								alt="video thumbnail"
							/>
							<div>
								<p>{video.snippet.title}</p>
								<p>{video.snippet.channelTitle}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default PageNation;

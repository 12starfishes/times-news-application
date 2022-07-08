import React, { Component } from "react";
import "./NewsItem.css";
import moment from "moment";

export default class NewsItem extends Component {
	render() {
		return (
			<div className="each_item">
				<div className="card mb-4">
					<img
						className="card-img-top"
						src={
							this.props.item.urlToImage
								? this.props.item.urlToImage
								: "https://imgplaceholder.com/420x320/e3e0e0/757575/fa-file-picture-o?text=Image+Not+Found"
						}
						alt={this.props.item.title}
					/>
					<div className="card-body">
						<a href={this.props.item.url} target="_blank">
							<h3 className="card-title">
								{this.props.item.title}
							</h3>
						</a>
						<p className="card-text pb-6">
							{this.props.item.description}
						</p>
						<p href="#" className="">
							<small>
								By:&nbsp;
								{this.props.item.author
									? this.props.item.author
									: "Not Specified"}
							</small>
						</p>
					</div>
					<div className="card-footer text-right foot">
						<div  className="text-muted">
							{moment(this.props.item.publishedAt).format(
								"D/MMM/YYYY - h:mma"
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

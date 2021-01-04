import React from 'react';
import tubeApi from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = {
		videos: [],
		videoSelected: null,
		noOfVideos: 5,
		searchWord: '',
		isDataLoaded: false
	};
	youTubeApi = async keyword => {
		this.setState({ isDataLoaded: false });
		const response = await tubeApi.get('/search', {
			params: {
				q: keyword
			}
		});
		const items = response.data.items.slice(0, this.state.noOfVideos);
		this.setState({
			searchWord: keyword,
			videos: items,
			videoSelected: items[0],
			isDataLoaded: true
		});
	};

	onSelectedVideo = video => {
		this.setState({ videoSelected: video });
	};
	componentDidMount() {
		this.youTubeApi('Latest telugu video songs 2019');
	}

	loadMore = () => {
		this.setState(prevState => {
			return {
				noOfVideos: prevState.noOfVideos + 5
			};
		});
		if(this.state.searchWord === ''){
			this.youTubeApi("Latest telugu video songs 2019");
		}else{
			this.youTubeApi(this.state.searchWord);
		}
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar search={this.youTubeApi} />
				{this.state.isDataLoaded ? (
					<div className='ui grid'>
						<div className='ui row'>
							<div className='eleven wide column'>
								<VideoDetail video={this.state.videoSelected} />
							</div>
							<div className='five wide column'>
								<VideoList
									videos={this.state.videos}
									onSelect={this.onSelectedVideo}
								/>
								{this.state.noOfVideos >= 15 ? null : (
									<button
										className='ui primary button'
										onClick={this.loadMore}
										style={{ textAlign: 'center' }}>
										Load more
									</button>
								)}
							</div>
						</div>
					</div>
				) : (
					<div class='loadingio-spinner-pulse-o7q8aot62d'>
						<div class='ldio-tg0ool0yca9'>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default App;

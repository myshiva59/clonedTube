import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ searchText: value });
  };

  handleSearchClick = () => {
    this.props.search(this.state.searchText);
  };

  onSubmitForm = event => {
    this.props.search(this.state.searchText);
    event.preventDefault();
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <div className="ui container">
              <label>Video Search:</label>
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={this.handleInputChange}
                  value={this.state.searchText}
                />
                <i
                  className="inverted circular search link icon"
                  onClick={this.handleSearchClick}
                ></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

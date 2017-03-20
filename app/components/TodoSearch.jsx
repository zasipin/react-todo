import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends React.Component {
  // handleSearch(){
  //   var showCompleted = this.refs.showCompleted.checked;
  //   var searchText = this.refs.searchText.value;

  //   this.props.onSearch(showCompleted, searchText);
  // }

  render(){
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="searchText" placeholder="Search todos"
            value={searchText} onChange={()=>{
              {/*this.handleSearch()*/}

              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
              }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                {/*this.handleSearch()*/}

                dispatch(actions.toggleShowCompleted());
                }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch);
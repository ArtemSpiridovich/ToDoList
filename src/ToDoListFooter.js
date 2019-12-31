import React from 'react';
import Button from "./Button";
import './App.css';

class ToDoListFooter extends React.Component {

    state = {
        isHidden: false
    }

    onAllFilterClick = () => this.props.changeFilter("All")

    onCompletedFilterClick = () => this.props.changeFilter("Completed")

    onActiveFilterClick = () => this.props.changeFilter("Active")

    onShowFiltersClick = () => this.setState({isHidden: false})

    onHideFiltersClick = () => this.setState({isHidden: true})

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                { !this.state.isHidden && <div className='class-button'>
                    <Button onClick={this.onAllFilterClick} className={classForAll} textButton='All'/>
                    <Button onClick={this.onCompletedFilterClick} className={classForCompleted} textButton='Completed'/>
                    <Button onClick={this.onActiveFilterClick} className={classForActive} textButton='Active'/>
                </div>}
                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>Hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>Show</span>}
            </div>
        );
    }
}

export default ToDoListFooter;

import React, {Component} from 'react';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: "All"},
            {name: 'like', label: "Liked"}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const cl = active ? 'btn-info' : 'btn-info-outline'
            return (
                <Button key={name} type='button' className={`btn ${cl}`}
                onClick={() => onFilterSelect(name)}
                >{label}</Button>
            )
    });
        return(
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}


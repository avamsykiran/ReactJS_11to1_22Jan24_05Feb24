import { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {

        let {count} = this.state;

        return (
            <section>
                <p>
                    <strong>
                        I have made {count} visits so far to this site.
                    </strong>
                </p>

                <button type="button" onClick={ event => this.setState({count:count-1}) }>- Decrement </button>
                <button type="button" onClick={ event => this.setState({count:count+1}) }>+ Increment </button>
            </section >
        );
    }
}

export default Counter;
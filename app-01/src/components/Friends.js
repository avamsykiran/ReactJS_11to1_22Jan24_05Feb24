import { Component } from 'react';

class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: [
                "Vamsy", "Sagar", "Suseela", "Suresh", "Dileep", "Girish"
            ],
            friendName: ''
        };
    }

    addFriend = event => {
        let { friends, friendName } = this.state;
        if (friendName && friendName.trim().length > 0) {
            this.setState({ friends: [...friends, friendName], friendName: '' });
        }
    };

    removeFriend = event => {
        let { friends, friendName } = this.state;
        this.setState({friends: friends.filter(f => f!=friendName),friendName:''});
    };

    render() {

        let { friends, friendName } = this.state;

        return (
            <section>
                <h4>Friends List</h4>
                <ol>
                    {friends.map(f => <li>{f}</li>)}
                </ol>

                <form>
                    <label>
                        Friend Name:
                        <input type="text" value={friendName}
                            onChange={event => this.setState({ friendName: event.target.value })} />
                    </label>
                    <button type='button' onClick={this.addFriend}>ADD</button>
                    <button type='button' onClick={this.removeFriend}>REMOVE</button>
                </form>
            </section>
        );
    }
}

export default Friends;
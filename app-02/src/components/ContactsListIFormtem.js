import { Component } from 'react';

class ContactsListFormItem extends Component {

    constructor({contact,save,cancelEdit}){
        super({save});
        this.state = contact ? {...contact} : this.initData();
    }

    initData = () => ({ id: 0, name: "", dob: new Date().toISOString().substring(0,10), mail: "", mobile: "" })

    saveBtnClicked = e => {
        this.props.save({...this.state});
        this.setState(this.initData());
    };

    cancelBtnClicked = e => {
        if(this.state.isEditing){
            this.props.cancelEdit(this.state.id);
        }else{
            this.setState(this.initData());
        }
    };

    render() {
        let {id,name,dob,mail,mobile} = this.state;

        return (
            <form className='row border-bottom border-primary p-2 text-center'>
                <div className='col-1'>{id}</div>
                <div className='col'>
                    <input type="text" className='form-control' value={name}
                    onChange={e => this.setState({name:e.target.value})} />
                </div>
                <div className='col-2'>
                    <input type="date" className='form-control' value={dob}
                    onChange={e => this.setState({dob:e.target.value})} />
                </div>
                <div className='col-2'>
                    <input type="text" className='form-control' value={mail}
                    onChange={e => this.setState({mail:e.target.value})} />
                </div>
                <div className='col-2'>
                    <input type="text" className='form-control' value={mobile}
                    onChange={e => this.setState({mobile:e.target.value})} />
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-sm btn-primary me-1" onClick={this.saveBtnClicked}>
                        SAVE
                    </button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={this.cancelBtnClicked}>
                        CANCEL
                    </button>
                </div>
            </form>
        );
    }
}

export default ContactsListFormItem;